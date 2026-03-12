<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { getBikes, saveBike, deleteBike, updateBike, type Bike } from '$lib/bikes';

  let bikes: Bike[] = [];
  let showAddForm = false;
  let newBike = { year: new Date().getFullYear(), make: '', model: '' };
  let errors = { make: '', model: '' };
  let showDeleteConfirm = false;
  let bikeToDelete: Bike | null = null;
  
  // Edit mode
  let editingBike: Bike | null = null;
  let editForm = { year: 0, make: '', model: '' };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1989 }, (_, i) => currentYear - i);

  onMount(() => {
    bikes = getBikes();
  });

  function validateForm(): boolean {
    errors = { make: '', model: '' };
    let valid = true;

    if (!newBike.make.trim()) {
      errors.make = 'Please enter a bike make';
      valid = false;
    }

    if (!newBike.model.trim()) {
      errors.model = 'Please enter a bike model';
      valid = false;
    }

    return valid;
  }

  function addBike() {
    if (!validateForm()) return;
    
    const bike = saveBike({
      year: newBike.year,
      make: newBike.make.trim(),
      model: newBike.model.trim(),
      lastServiceDate: null,
      totalServiceHours: 0
    });
    
    bikes = [...bikes, bike];
    showAddForm = false;
    newBike = { year: currentYear, make: '', model: '' };
    errors = { make: '', model: '' };
  }

  function startEdit(bike: Bike) {
    editingBike = bike;
    editForm = { year: bike.year, make: bike.make, model: bike.model };
  }

  function cancelEdit() {
    editingBike = null;
    editForm = { year: 0, make: '', model: '' };
  }

  function saveEdit() {
    if (!editingBike) return;
    
    updateBike(editingBike.id, {
      year: editForm.year,
      make: editForm.make.trim(),
      model: editForm.model.trim()
    });
    
    bikes = getBikes();
    editingBike = null;
    editForm = { year: 0, make: '', model: '' };
  }

  function confirmDelete(bike: Bike) {
    bikeToDelete = bike;
    showDeleteConfirm = true;
  }

  function handleDelete() {
    if (!bikeToDelete) return;
    deleteBike(bikeToDelete.id);
    bikes = getBikes();
    showDeleteConfirm = false;
    bikeToDelete = null;
  }

  function getServiceStatus(bike: Bike): 'ok' | 'due' | 'overdue' {
    if (!bike.lastServiceDate) return 'due';
    
    const lastService = new Date(bike.lastServiceDate);
    const monthsSinceService = (Date.now() - lastService.getTime()) / (1000 * 60 * 60 * 24 * 30);
    
    if (monthsSinceService < 2) return 'ok';
    if (monthsSinceService < 4) return 'due';
    return 'overdue';
  }

  function getServiceStatusText(status: 'ok' | 'due' | 'overdue'): string {
    switch (status) {
      case 'ok': return 'Good';
      case 'due': return 'Due Soon';
      case 'overdue': return 'Overdue';
    }
  }

  function goToService(bikeId: string) {
    goto(`/service?bike=${bikeId}`);
  }
</script>

<header class="header">
  <h1>🔧 Trail<span>Wrench</span></h1>
  <p class="subtitle">Mountain Bike Service Tracker</p>
</header>

<nav class="nav">
  <button class="nav-item active">🚲 My Bikes</button>
  <button class="nav-item">📅 History</button>
  <button class="nav-item">⚙️ Settings</button>
</nav>

<main class="content">
  {#if bikes.length === 0 && !showAddForm}
    <div class="empty-state">
      <div class="empty-state-icon">🚲</div>
      <h3>No Bikes Yet</h3>
      <p>Add your first bike to start tracking service intervals</p>
      <button class="btn btn-primary" on:click={() => showAddForm = true}>
        + Add Your First Bike
      </button>
    </div>
  {:else}
    <div class="flex justify-between items-center mb-4">
      <h2 style="margin: 0; font-size: 20px;">Your Bikes ({bikes.length})</h2>
      <button class="btn btn-primary btn-small" on:click={() => showAddForm = true}>
        + Add Bike
      </button>
    </div>

    <div class="bike-list">
      {#each bikes as bike}
        {#if editingBike?.id === bike.id}
          <div class="card">
            <div class="form-group">
              <label class="form-label">Year</label>
              <select class="form-select" bind:value={editForm.year}>
                {#each years as year}
                  <option value={year}>{year}</option>
                {/each}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Make</label>
              <input class="form-input" type="text" bind:value={editForm.make} placeholder="Santa Cruz, Trek, Specialized..." />
            </div>
            <div class="form-group">
              <label class="form-label">Model</label>
              <input class="form-input" type="text" bind:value={editForm.model} placeholder="Tallboy, Bronson, Ripmo..." />
            </div>
            <div class="flex gap-2">
              <button class="btn btn-secondary" on:click={cancelEdit}>Cancel</button>
              <button class="btn btn-primary" on:click={saveEdit}>Save</button>
            </div>
          </div>
        {:else}
          <div class="bike-item" on:click={() => goToService(bike.id)}>
            <div class="bike-icon">🚲</div>
            <div class="bike-info">
              <div class="bike-name">{bike.year} {bike.make} {bike.model}</div>
              <div class="bike-meta">
                {bike.totalServiceHours || 0} service hours
              </div>
            </div>
            <span class="bike-status {getServiceStatus(bike)}">
              {getServiceStatusText(getServiceStatus(bike))}
            </span>
          </div>
        {/if}
      {/each}
    </div>
  {/if}

  {#if showAddForm}
    <div class="modal-overlay" on:click|self={() => showAddForm = false}>
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">Add New Bike</h3>
          <button class="modal-close" on:click={() => showAddForm = false}>&times;</button>
        </div>
        
        <div class="form-group">
          <label class="form-label">Year</label>
          <select class="form-select" bind:value={newBike.year}>
            {#each years as year}
              <option value={year}>{year}</option>
            {/each}
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Make</label>
          <input 
            class="form-input" 
            type="text" 
            bind:value={newBike.make} 
            placeholder="Santa Cruz, Trek, Specialized..."
          />
          {#if errors.make}
            <p class="text-danger" style="color: var(--color-danger); font-size: 13px; margin-top: 4px;">{errors.make}</p>
          {/if}
        </div>
        
        <div class="form-group">
          <label class="form-label">Model</label>
          <input 
            class="form-input" 
            type="text" 
            bind:value={newBike.model} 
            placeholder="Tallboy, Bronson, Ripmo..."
          />
          {#if errors.model}
            <p class="text-danger" style="color: var(--color-danger); font-size: 13px; margin-top: 4px;">{errors.model}</p>
          {/if}
        </div>
        
        <div class="modal-actions">
          <button class="btn btn-secondary" on:click={() => showAddForm = false}>Cancel</button>
          <button class="btn btn-primary" on:click={addBike}>Add Bike</button>
        </div>
      </div>
    </div>
  {/if}

  {#if showDeleteConfirm}
    <div class="modal-overlay" on:click|self={() => showDeleteConfirm = false}>
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">Delete Bike?</h3>
          <button class="modal-close" on:click={() => showDeleteConfirm = false}>&times;</button>
        </div>
        <p>Are you sure you want to delete {bikeToDelete?.year} {bikeToDelete?.make} {bikeToDelete?.model}? This cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn btn-secondary" on:click={() => showDeleteConfirm = false}>Cancel</button>
          <button class="btn btn-danger" on:click={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  {/if}
</main>
