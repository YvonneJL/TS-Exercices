export default class IceCreamFlavor {
    name: string = "";
    price: number = 0;
    isPopular: boolean = false;
    description?: string = undefined

    showNameOfIcecream(){
        if (this.isPopular === true)
            console.log(this.name);
    }
}