<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { SERVICE_MODULES, type ServiceModule, type ServiceTask } from '$lib/service';
  import { getBikes, updateBike, deleteBike, getServiceProgress, saveServiceProgress, clearServiceProgress, type Bike } from '$lib/bikes';

  let bikeId = '';
  let bike: Bike | null = null;
  let currentModuleIndex = 0;
  let currentTaskIndex = 0;
  let completedModules: string[] = [];
  let showComplete = false;
  let speechSynthesis: SpeechSynthesis | null = null;
  let isSpeaking = false;
  let showDeleteConfirm = false;
  let showAllModules = false;
  
  // Local copy of service modules for tracking completion
  let modules: ServiceModule[] = JSON.parse(JSON.stringify(SERVICE_MODULES));

  $: currentModule = modules[currentModuleIndex];
  $: currentTask = currentModule?.tasks[currentTaskIndex];
  $: overallProgress = Math.round((completedModules.length / modules.length) * 100);

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
      clearServiceProgress(bikeId);
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

  $: moduleProgressPercent = (index: number) => {
    const mod = modules[index];
    const completed = mod.tasks.filter(t => t.completed).length;
    return Math.round((completed / mod.tasks.length) * 100);
  };
</script>

<div class="service-container">
  {#if showDeleteConfirm}
    <div class="modal-overlay" on:click|self={() => showDeleteConfirm = false}>
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">Delete Bike?</h3>
        </div>
        <p class="text-muted">Are you sure you want to delete this bike? This cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" on:click={() => showDeleteConfirm = false}>Cancel</button>
          <button class="btn btn-danger" on:click={handleDelete}>Delete</button>
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
        <div class="stats-card">
          <div class="stat">
            <span class="stat-value">{bike.totalServiceHours + 50}</span>
            <span class="stat-label">Total Service Hours</span>
          </div>
        </div>
      {/if}
      
      <button class="btn btn-primary btn-full" on:click={goHome}>Back to Home</button>
    </div>
  {:else if bike}
    <header class="service-header">
      <div class="header-top">
        <button class="back-btn" on:click={goHome}>← Back</button>
        <button class="icon-btn" on:click={confirmDelete}>🗑️</button>
      </div>
      <h1>{bike.year} {bike.make} {bike.model}</h1>
      <p class="subtitle">50-Hour Service Wizard</p>
      
      <div class="progress-info">
        <div class="progress-bar">
          <div class="progress-fill" style="width: {overallProgress}%"></div>
        </div>
        <span class="progress-text">{overallProgress}% Complete</span>
      </div>
    </header>

    <nav class="module-nav">
      {#each modules as mod, i}
        <button 
          class="module-nav-item" 
          class:active={i === currentModuleIndex}
          class:completed={completedModules.includes(mod.id)}
          on:click={() => goToModule(i)}
        >
          <span class="module-icon">{mod.icon}</span>
          <span class="module-name">{mod.name}</span>
          <span class="module-check">{moduleProgress(i)}</span>
        </button>
      {/each}
    </nav>

    {#if currentModule && currentTask}
      <div class="task-card">
        <div class="task-header">
          <span class="module-badge">{currentModule.icon} {currentModule.name}</span>
          <span class="task-counter">{currentTaskIndex + 1}/{currentModule.tasks.length}</span>
        </div>

        <h2 class="task-title">{currentTask.title}</h2>
        <p class="task-desc">{currentTask.description}</p>

        <button 
          class="btn btn-secondary btn-small" 
          class:speaking={isSpeaking}
          on:click={() => speakTask(currentTask)}
        >
          {isSpeaking ? '🔊 Playing...' : '🔈 Listen to Instructions'}
        </button>

        <label class="checkbox-label">
          <input 
            type="checkbox" 
            checked={currentTask.completed}
            on:change={() => toggleTask(currentTask)}
          />
          <span>Mark as Completed</span>
        </label>
      </div>

      <div class="task-nav">
        <button 
          class="btn btn-secondary" 
          on:click={prevTask}
          disabled={currentModuleIndex === 0 && currentTaskIndex === 0}
        >
          ← Previous
        </button>
        <button class="btn btn-primary" on:click={nextTask}>
          {currentModuleIndex === modules.length - 1 && currentTaskIndex === currentModule.tasks.length - 1 ? 'Finish Service' : 'Next →'}
        </button>
      </div>
    {/if}
  {/if}
</div>

<style>
  .service-container {
    min-height: 100vh;
    background: var(--color-bg);
    padding-bottom: 100px;
  }

  .service-header {
    background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%);
    padding: 20px 16px;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .back-btn {
    background: none;
    border: none;
    color: var(--color-primary);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
  }

  .icon-btn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    padding: 8px;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .icon-btn:hover {
    opacity: 1;
  }

  .service-header h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
  }

  .subtitle {
    color: var(--color-text-secondary);
    font-size: 14px;
    margin: 4px 0 16px;
  }

  .progress-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .progress-info .progress-bar {
    flex: 1;
  }

  .progress-text {
    font-size: 13px;
    color: var(--color-text-secondary);
    white-space: nowrap;
  }

  .module-nav {
    display: flex;
    gap: 8px;
    padding: 12px 16px;
    background: var(--color-bg-secondary);
    border-bottom: 1px solid var(--color-border);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .module-nav-item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 14px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.2s;
    min-width: 70px;
  }

  .module-nav-item:hover {
    border-color: var(--color-primary);
  }

  .module-nav-item.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  .module-nav-item.active .module-name,
  .module-nav-item.active .module-check {
    color: #000;
  }

  .module-nav-item.completed {
    border-color: var(--color-success);
  }

  .module-nav-item.completed .module-check {
    color: var(--color-success);
  }

  .module-icon {
    font-size: 18px;
  }

  .module-name {
    font-size: 11px;
    font-weight: 600;
    color: var(--color-text-secondary);
    text-align: center;
  }

  .module-check {
    font-size: 10px;
    color: var(--color-text-muted);
  }

  .task-card {
    margin: 20px 16px;
    padding: 24px;
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .module-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: rgba(245, 158, 11, 0.15);
    color: var(--color-primary);
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  .task-counter {
    font-size: 14px;
    color: var(--color-text-secondary);
    font-weight: 500;
  }

  .task-title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 12px;
    line-height: 1.3;
  }

  .task-desc {
    color: var(--color-text-secondary);
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 20px;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
    padding: 16px;
    background: var(--color-bg-tertiary);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: background 0.2s;
  }

  .checkbox-label:hover {
    background: var(--color-bg-secondary);
  }

  .checkbox-label input {
    width: 22px;
    height: 22px;
    accent-color: var(--color-success);
  }

  .checkbox-label span {
    font-size: 15px;
    font-weight: 600;
  }

  .task-nav {
    display: flex;
    gap: 12px;
    padding: 0 16px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: var(--color-bg);
    border-top: 1px solid var(--color-border);
  }

  .task-nav .btn {
    flex: 1;
  }

  .task-nav .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .complete-screen {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    text-align: center;
  }

  .complete-icon {
    font-size: 80px;
    margin-bottom: 20px;
    animation: bounce 0.5s ease;
  }

  @keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  .complete-screen h1 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px;
  }

  .congrats {
    color: var(--color-text-secondary);
    font-size: 18px;
    margin: 0 0 32px;
  }

  .stats-card {
    background: var(--color-surface);
    border-radius: var(--radius-lg);
    padding: 24px 40px;
    margin-bottom: 32px;
    border: 1px solid var(--color-border);
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-value {
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
  }

  .stat-label {
    font-size: 14px;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
</style>
