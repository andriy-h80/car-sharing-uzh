export function saveCars(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error.message);
    }
  }
  
  export function loadCars(key) {
    try {
      const savedData = localStorage.getItem(key);
      return savedData === null ? [] : JSON.parse(savedData);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  export function removeCars(key, id) {
    try {
      const storage = loadCars(key);
      const cars = [...storage].filter(car => car.id !== id);
      localStorage.setItem(key, JSON.stringify(cars));
    } catch (error) {
      console.error(error.message);
    }
  }
  
  export function clearLocal() {
    localStorage.clear();
  }