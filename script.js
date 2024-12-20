function Car(make, model) {
  this.make = make; // Assign make to the instance
  this.model = model; // Assign model to the instance
}

// Add the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`; // Return make and model as a string
};

function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed; // Assign topSpeed to the instance
}

// Inherit Car's prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);

// Reset the constructor to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed; // Return the top speed
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
