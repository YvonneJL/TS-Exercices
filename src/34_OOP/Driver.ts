import Car from "./Car";

export default class Driver {
    firstName: string;
    lastName: string;
    age: number;
    car: Car

    constructor(  firstName: string, lastName: string, age: number, car: Car){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car
    }
}

