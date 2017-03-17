function Car(make, model, year, color, seats, passengers = []) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats
  this.passengers = passengers
  // TODO: add color, seats here

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
}

Car.prototype.sell = function(newOwner) {
  this.previousOwners.push(this.owner)
  this.owner = newOwner;
  return newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor
  return newColor;
};

Car.prototype.start = function() {
  this.running = true
};

Car.prototype.off = function() {
  this.running = false
};

Car.prototype.driveTo = function(place) {
  if (this.running ===true) { this.place = place
  return true;}
  else {return false}
};

Car.prototype.park = function(place) {
  if (this.running === false) { this.place = place
  return true;}
  else {return false}
};

Car.prototype.pickUp = function(passengers) {
  if (this.seats > (this.passengers.length +1) && this.running === true) {
    this.passengers.push(passengers)
    return true}
  else {return false}
};

Car.prototype.dropOff = function(passengers) {
  if (this.running === true && this.passengers.includes(passengers) ) {
    this.passengers.splice(this.passengers.indexOf(passengers), 1)
    return true}
  else {return false}
};

Car.prototype.passengerCount = function(passengers) {
  return this.passengers.length
};
// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
