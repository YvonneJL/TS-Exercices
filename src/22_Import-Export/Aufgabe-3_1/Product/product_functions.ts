//&Module-Namensräume-TS-3_1

export function createProduct (name: string, price: number) {
    const priceItem = `A ${name} is ${price} €`;
    return priceItem;
};