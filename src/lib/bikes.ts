export interface Bike {
  id: string;
  year: number;
  make: string;
  model: string;
  lastServiceDate: string | null;
  totalServiceHours: number;
  createdAt: string;
  bikeDbId?: string; // Reference to bike database entry
}

export interface ServiceLog {
  id: string;
  bikeId: string;
  date: string;
  hoursCompleted: number;
  modulesCompleted: string[];
}

export interface ServiceProgress {
  bikeId: string;
  modules: {
    id: string;
    tasks: { id: string; completed: boolean }[];
  }[];
}

const BIKES_KEY = 'trailwrench_bikes';
const PROGRESS_KEY = 'trailwrench_progress';

export function getBikes(): Bike[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const data = localStorage.getItem(BIKES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading bikes:', e);
    return [];
  }
}

export function saveBike(bike: Omit<Bike, 'id' | 'createdAt'>): Bike {
  const bikes = getBikes();
  const newBike: Bike = {
    ...bike,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };
  try {
    bikes.push(newBike);
    localStorage.setItem(BIKES_KEY, JSON.stringify(bikes));
  } catch (e) {
    console.error('Error saving bike:', e);
    alert('Failed to save bike. Storage may be full.');
  }
  return newBike;
}

export function deleteBike(id: string): void {
  try {
    const bikes = getBikes().filter(b => b.id !== id);
    localStorage.setItem(BIKES_KEY, JSON.stringify(bikes));
    // Also delete progress
    const progress = getServiceProgress(id);
    if (progress) {
      const allProgress = getAllProgress().filter(p => p.bikeId !== id);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
    }
  } catch (e) {
    console.error('Error deleting bike:', e);
  }
}

export function updateBike(id: string, updates: Partial<Bike>): Bike | null {
  const bikes = getBikes();
  const index = bikes.findIndex(b => b.id === id);
  if (index === -1) return null;
  
  try {
    bikes[index] = { ...bikes[index], ...updates };
    localStorage.setItem(BIKES_KEY, JSON.stringify(bikes));
    return bikes[index];
  } catch (e) {
    console.error('Error updating bike:', e);
    return null;
  }
}

// Service Progress Functions
export function getAllProgress(): ServiceProgress[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const data = localStorage.getItem(PROGRESS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading progress:', e);
    return [];
  }
}

export function getServiceProgress(bikeId: string): ServiceProgress | null {
  const allProgress = getAllProgress();
  return allProgress.find(p => p.bikeId === bikeId) || null;
}

export function saveServiceProgress(bikeId: string, modules: { id: string; tasks: { id: string; completed: boolean }[] }[]): void {
  try {
    const allProgress = getAllProgress();
    const existingIndex = allProgress.findIndex(p => p.bikeId === bikeId);
    
    const progress: ServiceProgress = {
      bikeId,
      modules
    };
    
    if (existingIndex >= 0) {
      allProgress[existingIndex] = progress;
    } else {
      allProgress.push(progress);
    }
    
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

export function clearServiceProgress(bikeId: string): void {
  try {
    const allProgress = getAllProgress().filter(p => p.bikeId !== bikeId);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(allProgress));
  } catch (e) {
    console.error('Error clearing progress:', e);
  }
}
