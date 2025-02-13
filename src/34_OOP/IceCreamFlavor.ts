export default class IceCreamFlavor {
    name: string = "";
    price: number = 0;
    isPopular: boolean = false;
    description?: string = undefined

    showNameOfIcecream(){
        if (this.isPopular === true)
            console.log(this.name);
    }

    getTotalPrice (numberOfScoops: number) {
        return this.price * numberOfScoops
    }

    printInfo () {
        if (this.isPopular === true) {
            console.log(`Flavour ${this.name} costs ${this.price} and is popular`);
        } else {
            console.log(`Flavour ${this.name} costs ${this.price}`);
        }
    }

    getLengthOfDescription () {
        if (!this.description?.length) {
            throw new Error("There is no description")
        } else {
            console.log(`The lenght of the description is ${this.description?.length}`);
        }
    }
}