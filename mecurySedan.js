//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super (make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.speed = 0;
        this.started = false;
        this.numberOfWheels = 4
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
            if((num + this.passenger) < this.maximumPassengers){
                console.log("Room Available")
            }
            if((num + this.passenger) = 5){
                console.log("No Room Available")
            }
        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }
    scheduleService(mileage){
        if (this.mileage > 3000) {
            console.log("schedule service...");
            return this.scheduleService == true;
        } else {
            console.log("service not needed...");
            return this.scheduleService == false;
        }
    }
}

let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.scheduleService()

console.log(myCar)