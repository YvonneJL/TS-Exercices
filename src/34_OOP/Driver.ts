import { Car, CarType } from "./Car";

export default class Driver {
    firstName: string;
    lastName: string;
    age: number;
    car: Car;
    licenseFromYear: number;

    constructor(  firstName: string, lastName: string, age: number, car: Car, licenseFromYear: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
        this.licenseFromYear = licenseFromYear
    }

    getCarType(): CarType {
        return this.car.carType
    }
}

