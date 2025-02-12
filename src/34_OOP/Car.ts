export default class Car {
    brand: string;
    constructionYear: number;
    currentSpeed: number;

    constructor (brand: string, constructionYear: number, currentSpeed: number){
        this.brand = brand;
        this.constructionYear = constructionYear;
        this.currentSpeed = currentSpeed
    }
}