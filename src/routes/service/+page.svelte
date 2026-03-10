<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { SERVICE_MODULES, type ServiceModule, type ServiceTask } from '$lib/service';
  import { getBikes, updateBike, deleteBike, getServiceProgress, saveServiceProgress, clearServiceProgress, type Bike } from '$lib/bikes';
  import { getBikeById, type BikeSpec, type ServiceInterval } from '$lib/bikeDatabase';

  let bikeId = '';
  let bike: Bike | null = null;
  let bikeSpec: BikeSpec | null = null;
  let bikeSpecificTasks: ServiceInterval[] = [];
  let currentModuleIndex = 0;
  let currentTaskIndex = 0;
  let completedModules: string[] = [];
  let showComplete = false;
  let speechSynthesis: SpeechSynthesis | null = null;
  let isSpeaking = false;
  let showDeleteConfirm = false;
  let bikeToDelete: string | null = null;
  
  // Local copy of service modules for tracking completion
  let modules: ServiceModule[] = JSON.parse(JSON.stringify(SERVICE_MODULES));

  $: currentModule = modules[currentModuleIndex];
  $: currentTask = currentModule?.tasks[currentTaskIndex];
  $: progress = `${currentModuleIndex + 1}/${modules.length}`;

  onMount(() => {
    speechSynthesis = window.speechSynthesis;
    const params = new URLSearchParams($page.url.search);
    bikeId = params.get('bike') || '';
    
    const bikes = getBikes();
    bike = bikes.find(b => b.id === bikeId) || null;

    if (!bike) {
      goto('/');
      return;
    }

    // Load bike-specific data from database if available
    if (bike.bikeDbId) {
      bikeSpec = getBikeById(bike.bikeDbId) || null;
      if (bikeSpec) {
        bikeSpecificTasks = bikeSpec.serviceIntervals;
      }
    }

    // Load saved progress
    const savedProgress = getServiceProgress(bikeId);
    if (savedProgress && savedProgress.modules) {
      savedProgress.modules.forEach(savedMod => {
        const modIndex = modules.findIndex(m => m.id === savedMod.id);
        if (modIndex >= 0) {
          modules[modIndex].tasks.forEach(task => {
            const savedTask = savedMod.tasks.find(t => t.id === task.id);
            if (savedTask) {
              task.completed = savedTask.completed;
            }
          });
          // Mark module as completed if all tasks done
          const allDone = modules[modIndex].tasks.every(t => t.completed);
          if (allDone && !completedModules.includes(modules[modIndex].id)) {
            completedModules = [...completedModules, modules[modIndex].id];
          }
        }
      });
    }
  });

  function toggleTask(task: ServiceTask) {
    task.completed = !task.completed;
    modules[currentModuleIndex].tasks[currentTaskIndex] = task;
    modules = [...modules];
    saveProgress();
  }

  function saveProgress() {
    const progressToSave = modules.map(m => ({
      id: m.id,
      tasks: m.tasks.map(t => ({ id: t.id, completed: t.completed }))
    }));
    saveServiceProgress(bikeId, progressToSave);
  }

  function nextTask() {
    if (currentTaskIndex < currentModule.tasks.length - 1) {
      currentTaskIndex++;
    } else if (currentModuleIndex < modules.length - 1) {
      if (!completedModules.includes(currentModule.id)) {
        completedModules = [...completedModules, currentModule.id];
      }
      currentModuleIndex++;
      currentTaskIndex = 0;
    } else {
      finishService();
    }
    saveProgress();
  }

  function prevTask() {
    if (currentTaskIndex > 0) {
      currentTaskIndex--;
    } else if (currentModuleIndex > 0) {
      currentModuleIndex--;
      currentTaskIndex = modules[currentModuleIndex].tasks.length - 1;
    }
    saveProgress();
  }

  function speakTask(task: ServiceTask) {
    if (!speechSynthesis) return;
    
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(task.voiceGuidance);
    utterance.rate = 0.9;
    utterance.onstart = () => isSpeaking = true;
    utterance.onend = () => isSpeaking = false;
    speechSynthesis.speak(utterance);
  }

  function finishService() {
    if (bike) {
      const hours = bike.totalServiceHours + 50;
      updateBike(bike.id, {
        totalServiceHours: hours,
        lastServiceDate: new Date().toISOString()
      });
      // Clear progress after finishing service
      clearServiceProgress(bike.id);
    }
    showComplete = true;
  }

  function goHome() {
    goto('/');
  }

  function goToModule(index: number) {
    currentModuleIndex = index;
    currentTaskIndex = 0;
  }

  function confirmDelete() {
    showDeleteConfirm = true;
  }

  function cancelDelete() {
    showDeleteConfirm = false;
    bikeToDelete = null;
  }

  function handleDelete() {
    if (bike) {
      deleteBike(bike.id);
      goto('/');
    }
  }

  $: moduleProgress = (index: number) => {
    const mod = modules[index];
    const completed = mod.tasks.filter(t => t.completed).length;
    return `${completed}/${mod.tasks.length}`;
  };
</script>

<div class="container">
  {#if showDeleteConfirm}
    <div class="modal-overlay">
      <div class="modal">
        <h2>Delete Bike?</h2>
        <p>Are you sure you want to delete this bike? This cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn-secondary" on:click={cancelDelete}>Cancel</button>
          <button class="btn-danger" on:click={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  {/if}

  {#if showComplete}
    <div class="complete-screen">
      <div class="complete-icon">🎉</div>
      <h1>Service Complete!</h1>
      <p class="congrats">Great job giving your bike some love.</p>
      
      {#if bike}
        <div class="stats">
          <div class="stat">
            <span class="stat-value">{bike.totalServiceHours + 50}</span>
            <span class="stat-label">Total Service Hours</span>
          </div>
        </div>
      {/if}
      
      <button class="btn-home" on:click={goHome}>Back to Home</button>
    </div>
  {:else if bike}
    <header>
      <button class="back-btn" on:click={goHome}>← Back</button>
      <h1>{bike.year} {bike.make} {bike.model}</h1>
      <p class="subtitle">50-Hour Service</p>
      
      {#if bikeSpec}
        <div class="bike-specs">
          <span class="spec-badge">🚲 {bikeSpec.category}</span>
          {#if bikeSpec.suspension?.fork}
            <span class="spec-badge">{bikeSpec.suspension.fork.brand} {bikeSpec.suspension.fork.travelMm}mm</span>
          {/if}
          <span class="spec-badge">{bikeSpec.wheelSize}"</span>
        </div>
      {/if}
    </header>

    <div class="progress-bar">
      <div class="progress-fill" style="width: {((currentModuleIndex + 1) / modules.length) * 100}%"></div>
    </div>

    {#if bikeSpec && bikeSpecificTasks.length > 0}
      <div class="bike-specific">
        <h3>🔧 Your {bikeSpec.make} {bikeSpec.model} Service Schedule</h3>
        <div class="service-intervals">
          {#each bikeSpecificTasks as task}
            <div class="interval-item">
              <span class="interval-hours">{task.hours === 0 ? 'Every ride' : `Every ${task.hours}h`}</span>
              <span class="interval-component">{task.component}</span>
              <span class="interval-task">{task.task}</span>
              <span class="interval-source">{task.source}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <div class="module-tabs">
      {#each modules as mod, i}
        <button 
          class="module-tab" 
          class:active={i === currentModuleIndex}
          class:completed={completedModules.includes(mod.id)}
          on:click={() => goToModule(i)}
        >
          <span class="tab-icon">{mod.icon}</span>
          <span class="tab-name">{mod.name}</span>
          <span class="tab-progress">{moduleProgress(i)}</span>
        </button>
      {/each}
    </div>

    {#if currentModule && currentTask}
      <div class="task-card">
        <div class="task-header">
          <span class="module-badge">{currentModule.icon} {currentModule.name}</span>
          <span class="task-counter">{currentTaskIndex + 1}/{currentModule.tasks.length}</span>
        </div>

        <h2>{currentTask.title}</h2>
        <p class="task-desc">{currentTask.description}</p>

        <button 
          class="voice-btn" 
          class:speaking={isSpeaking}
          on:click={() => speakTask(currentTask)}
        >
          {isSpeaking ? '🔊 Playing...' : '🔈 Listen'}
        </button>

        <label class="checkbox-label">
          <input 
            type="checkbox" 
            checked={currentTask.completed}
            on:change={() => toggleTask(currentTask)}
          />
          <span>Task Completed</span>
        </label>
      </div>

      <div class="nav-buttons">
        <button 
          class="btn-nav btn-prev" 
          on:click={prevTask}
          disabled={currentModuleIndex === 0 && currentTaskIndex === 0}
        >
          ← Previous
        </button>
        <button class="btn-nav btn-next" on:click={nextTask}>
          {currentModuleIndex === modules.length - 1 && currentTaskIndex === currentModule.tasks.length - 1 ? 'Finish' : 'Next →'}
        </button>
      </div>
    {/if}
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f5f5f5;
    color: #333;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    padding-bottom: 100px;
  }

  header {
    text-align: center;
    margin-bottom: 16px;
    position: relative;
  }

  .back-btn {
    position: absolute;
    left: 0;
    top: 0;
    background: none;
    border: none;
    color: #3b82f6;
    font-size: 1rem;
    cursor: pointer;
    padding: 8px;
  }

  header h1 {
    margin: 0;
    font-size: 1.3rem;
  }

  .subtitle {
    margin: 4px 0 8px;
    color: #666;
    font-size: 0.9rem;
  }

  .bike-specs {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4px;
  }

  .spec-badge {
    background: #e0f2fe;
    color: #0369a1;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
  }

  .progress-bar {
    height: 4px;
    background: #e5e5e5;
    border-radius: 2px;
    margin-bottom: 16px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: #22c55e;
    transition: width 0.3s ease;
  }

  .bike-specific {
    background: white;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .bike-specific h3 {
    margin: 0 0 12px;
    font-size: 0.95rem;
    color: #333;
  }

  .service-intervals {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .interval-item {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 0.8rem;
    padding: 8px;
    background: #f9fafb;
    border-radius: 6px;
  }

  .interval-hours {
    font-weight: 600;
    color: #22c55e;
    white-space: nowrap;
  }

  .interval-component {
    background: #e0f2fe;
    color: #0369a1;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: 600;
  }

  .interval-task {
    color: #333;
  }

  .interval-source {
    color: #999;
    font-size: 0.7rem;
    white-space: nowrap;
  }

  .module-tabs {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 8px;
    margin-bottom: 16px;
    -webkit-overflow-scrolling: touch;
  }

  .module-tab {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 12px;
    background: white;
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 60px;
  }

  .module-tab.active {
    border-color: #3b82f6;
    background: #eff6ff;
  }

  .module-tab.completed {
    border-color: #22c55e;
  }

  .tab-icon {
    font-size: 1.2rem;
  }

  .tab-name {
    font-size: 0.7rem;
    font-weight: 600;
    margin-top: 2px;
  }

  .tab-progress {
    font-size: 0.65rem;
    color: #666;
  }

  .task-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 16px;
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .module-badge {
    background: #f3f4f6;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .task-counter {
    color: #666;
    font-size: 0.85rem;
  }

  .task-card h2 {
    margin: 0 0 12px;
    font-size: 1.2rem;
  }

  .task-desc {
    margin: 0 0 16px;
    line-height: 1.5;
    color: #444;
  }

  .voice-btn {
    width: 100%;
    padding: 14px;
    background: #f0f9ff;
    border: 2px solid #3b82f6;
    border-radius: 10px;
    color: #3b82f6;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 16px;
    transition: all 0.2s;
  }

  .voice-btn:hover, .voice-btn.speaking {
    background: #3b82f6;
    color: white;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 12px;
    background: #f9fafb;
    border-radius: 8px;
  }

  .checkbox-label input {
    width: 20px;
    height: 20px;
    accent-color: #22c55e;
  }

  .checkbox-label span {
    font-weight: 500;
  }

  .nav-buttons {
    display: flex;
    gap: 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: white;
    border-top: 1px solid #e5e5e5;
    max-width: 600px;
    margin: 0 auto;
  }

  .btn-nav {
    flex: 1;
    padding: 14px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-prev {
    background: #e5e5e5;
    color: #333;
  }

  .btn-prev:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-next {
    background: #22c55e;
    color: white;
  }

  .btn-next:hover {
    background: #16a34a;
  }

  /* Complete screen */
  .complete-screen {
    text-align: center;
    padding: 40px 20px;
  }

  .complete-icon {
    font-size: 4rem;
    margin-bottom: 16px;
  }

  .complete-screen h1 {
    margin: 0 0 8px;
    color: #22c55e;
  }

  .congrats {
    color: #666;
    margin-bottom: 30px;
  }

  .stats {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  }

  .stat {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #22c55e;
  }

  .stat-label {
    color: #666;
    font-size: 0.9rem;
  }

  .btn-home {
    padding: 14px 30px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  .btn-home:hover {
    background: #2563eb;
  }

  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal {
    background: white;
    padding: 24px;
    border-radius: 12px;
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  .modal h2 {
    margin: 0 0 12px;
  }

  .modal p {
    color: #666;
    margin-bottom: 20px;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
  }

  .btn-secondary {
    padding: 12px 20px;
    background: #e5e5e5;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .btn-danger {
    padding: 12px 20px;
    background: #dc2626;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
