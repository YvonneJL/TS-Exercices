export enum CarType {
    Unknown = "unknown",
    Sedan = "sedan",
    SUV = "SUV",
    Coupe = "Coupe",
    Convertible = "Convertible",
    Hatchback = "hatchback",
    Truck = "Truck"
}

export class Car {
    brand: string;
    private _constructionYear: number;
    currentSpeed: number;
    carType: CarType

    constructor (brand: string, constructionYear: number, currentSpeed: number, carType: CarType){
        this.brand = brand;
        this._constructionYear = constructionYear;
        this.currentSpeed = currentSpeed
        this.carType = carType
    }

    get constructionYear (): number {
        return this._constructionYear
    }


    getSpeedInfo(): string {
        if (this.currentSpeed  <= 40) {
            return "driving slowly"
        } else if (this.currentSpeed > 40 && this.currentSpeed <= 70) {
            return "driving normally"
        } else if (this.currentSpeed > 70 && this.currentSpeed <= 120) {
            return "driving fast"
        } else if (this.currentSpeed > 120 && this.currentSpeed <= 190) {
            return "driving really fast"
        } else {
            return "WTF"
        } 
    }
}