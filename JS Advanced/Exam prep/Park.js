class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  addCar(carModel, carNumber) {
    if (this.capacity <= this.vehicles.length) {
      throw new Error("Not enough parking space.");
    } else {
      this.vehicles.push({
        carModel,
        carNumber,
        payed: false,
      });
      return `The ${carModel}, with a registration number ${carNumber}, parked."`;
    }
  }
  removeCar(carNumber) {
    let index = this.vehicles.findIndex((o) => o.carNumber === carNumber);
    if (index > -1 && this.vehicles[index].payed) {
      this.vehicles.splice(index, 1);
      return `${carNumber} left the parking lot.`;
    } else if (index > -1 && !this.vehicles[index].payed) {
      return `${carNumber} needs to pay before leaving the parking lot.`;
    } else {
      return `The car, you're looking for, is not found.`;
    }
  }
  pay(carNumber) {
    let index = this.vehicles.findIndex((o) => o.carNumber === carNumber);
    if (index > -1 && !this.vehicles[index].payed) {
      return `${carNumber}'s driver successfully payed for his stay.`;
    } else if (index > -1 && this.vehicles[index].payed) {
      return `${carNumber}'s driver has already payed his ticket.`;
    } else {
      return `${carNumber} is not in the parking lot.`;
    }
  }
  getStatisctics(carNumber){
      if(carNumber){
          console.log(`The Parking Lot has ${ this.capacity - this.vehicles.length } empty spots left.`);
      }
  }
}

let parking = new Parking(12);
parking.addCar("Passat", 10);

console.log(parking.vehicles);
