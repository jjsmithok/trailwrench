<script lang="ts">
  import { onMount } from 'svelte';
  import { getBikes, saveBike, deleteBike, type Bike } from '$lib/bikes';

  let bikes: Bike[] = [];
  let showAddForm = false;
  let newBike = { year: new Date().getFullYear(), make: '', model: '' };
  let errors = { make: '', model: '' };
  let showDeleteConfirm = false;
  let bikeToDelete: Bike | null = null;

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

  function confirmDelete(bike: Bike) {
    bikeToDelete = bike;
    showDeleteConfirm = true;
  }

  function cancelDelete() {
    showDeleteConfirm = false;
    bikeToDelete = null;
  }

  function handleDelete() {
    if (bikeToDelete) {
      deleteBike(bikeToDelete.id);
      bikes = bikes.filter(b => b.id !== bikeToDelete!.id);
    }
    showDeleteConfirm = false;
    bikeToDelete = null;
  }

  function startService(bike: Bike) {
    window.location.href = `/service?bike=${bike.id}`;
  }
</script>

<div class="container">
  {#if showDeleteConfirm}
    <div class="modal-overlay">
      <div class="modal">
        <h2>Delete Bike?</h2>
        <p>Are you sure you want to delete your {bikeToDelete?.year} {bikeToDelete?.make} {bikeToDelete?.model}? This cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn-secondary" on:click={cancelDelete}>Cancel</button>
          <button class="btn-danger" on:click={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  {/if}

  <header>
    <h1>🚵 TrailWrench AI</h1>
    <p>MTB Maintenance Tracker</p>
  </header>

  {#if bikes.length === 0 && !showAddForm}
    <div class="empty-state">
      <p>No bikes yet. Add your first bike to get started!</p>
      <button class="btn-primary" on:click={() => showAddForm = true}>
        + Add Your Bike
      </button>
    </div>
  {:else if showAddForm}
    <div class="add-form">
      <h2>Add New Bike</h2>
      <div class="form-group">
        <label for="year">Year</label>
        <select id="year" bind:value={newBike.year}>
          {#each years as year}
            <option value={year}>{year}</option>
          {/each}
        </select>
      </div>
      <div class="form-group">
        <label for="make">Make *</label>
        <input 
          id="make" 
          type="text" 
          placeholder="Santa Cruz, Trek, Yeti..." 
          bind:value={newBike.make}
          class:error={errors.make}
        />
        {#if errors.make}
          <span class="error-text">{errors.make}</span>
        {/if}
      </div>
      <div class="form-group">
        <label for="model">Model *</label>
        <input 
          id="model" 
          type="text" 
          placeholder="Tallboy, Fuel EX, SB130..." 
          bind:value={newBike.model}
          class:error={errors.model}
        />
        {#if errors.model}
          <span class="error-text">{errors.model}</span>
        {/if}
      </div>
      <div class="form-actions">
        <button class="btn-secondary" on:click={() => { showAddForm = false; errors = { make: '', model: '' }; }}>
          Cancel
        </button>
        <button class="btn-primary" on:click={addBike}>
          Save Bike
        </button>
      </div>
    </div>
  {/if}

  {#if bikes.length > 0}
    <section class="bike-list">
      <h2>Your Bikes</h2>
      {#each bikes as bike (bike.id)}
        <div class="bike-card">
          <div class="bike-info">
            <h3>{bike.year} {bike.make} {bike.model}</h3>
            <p class="hours">
              {bike.totalServiceHours} service hours
            </p>
          </div>
          <div class="bike-actions">
            <button class="btn-service" on:click={() => startService(bike)}>Start 50-Hour Service</button>
            <button class="btn-delete" on:click={() => confirmDelete(bike)} aria-label="Delete bike">🗑</button>
          </div>
        </div>
      {/each}
      {#if !showAddForm}
        <button class="btn-add" on:click={() => showAddForm = true}>
          + Add Another Bike
        </button>
      {/if}
    </section>
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
    padding: 20px;
  }

  header {
    text-align: center;
    margin-bottom: 30px;
  }

  header h1 {
    margin: 0;
    font-size: 1.8rem;
  }

  header p {
    margin: 5px 0 0;
    color: #666;
  }

  .empty-state {
    text-align: center;
    padding: 40px 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .empty-state p {
    margin-bottom: 20px;
    color: #666;
  }

  .add-form {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .add-form h2 {
    margin: 0 0 20px;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .form-group input.error {
    border-color: #dc2626;
  }

  .error-text {
    color: #dc2626;
    font-size: 0.85rem;
    margin-top: 4px;
    display: block;
  }

  .form-actions {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }

  button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-primary {
    background: #22c55e;
    color: white;
    flex: 1;
  }

  .btn-primary:hover {
    background: #16a34a;
  }

  .btn-secondary {
    background: #e5e5e5;
    color: #333;
  }

  .btn-secondary:hover {
    background: #d4d4d4;
  }

  .bike-list {
    margin-top: 30px;
  }

  .bike-list h2 {
    margin-bottom: 16px;
  }

  .bike-card {
    background: white;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 12px;
  }

  .bike-info h3 {
    margin: 0 0 4px;
    font-size: 1.1rem;
  }

  .bike-info .hours {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .bike-actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  .btn-service {
    background: #3b82f6;
    color: white;
    flex: 1;
    text-align: center;
  }

  .btn-service:hover {
    background: #2563eb;
  }

  .btn-delete {
    background: #fee2e2;
    color: #dc2626;
    padding: 12px 16px;
  }

  .btn-delete:hover {
    background: #fecaca;
  }

  .btn-add {
    width: 100%;
    background: white;
    border: 2px dashed #ccc;
    color: #666;
  }

  .btn-add:hover {
    border-color: #22c55e;
    color: #22c55e;
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

  .btn-danger {
    padding: 12px 20px;
    background: #dc2626;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
