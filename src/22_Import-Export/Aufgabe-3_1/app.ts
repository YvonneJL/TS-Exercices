//& Module-Namensräume-TS-3_1
console.log("Module-Namensräume-TS-3_1");

//..Lege folgende Funktionen in den Dateien an
//..ProductFunctions: createProduct(name: string, price: number)
//..ProductServiceFunctions: addProductToService(service: string, productName: string)
//..OrderFunctions: createOrder(products: string[])
//..OrderServiceFunctions: addOrderToService(service: string, orderNumber: string)
//..Die Funktionen sollen keine Logik enthalten, nur per console.log den Funktionsnamen (fest reingeschrieben) und die Werte durch übergebenen Parameter ausgeben!
//..Lege eine Datei app.ts an
//..Dort sollen alle verfügbaren Funktionen importiert werden
//..Rufe alle Funktionen mit Beispielwerten a//..


import {createOrder} from "./Order/order_functions.ts";
import {addOrderToService} from "./Order/order_service_functions.ts";
import {createProduct} from "./Product/product_functions.ts";
import {addProductToService} from "./Product/product_service_functions.ts";

console.log(`createOrder : ${createOrder(["coffee", "tea", "lemonade"])}`);
console.log(`addOrderToService : ${addOrderToService("Yvi", "6")}`);
console.log(`createProduct : ${createProduct("coffee", 4.5)}`);
console.log(`addProductToService : ${addProductToService("Yvi", "tea")}`);



//..in der index.ts sollen jeweils alle Funktionen aus den Dateien im gleichen Ordner exportiert werden, d. h. in product/index.ts sollen die Funktionen aus ProductFunctions.ts und ProductServiceFunctions.ts exportiert werden und in order/index.ts sollen die Funktionen aus OrderFunctions und OrderServiceFunctions exportiert werden
//..In app.ts sollen alle verfügbaren Funktionen über die index.ts importiert werden - nicht aus der Datei direkt
//..Für den Ordner product soll es also so aussehen:


import {createProduct as createProductFromIndex, addProductToService as addProductToServiceFromIndex} from './Product/index.ts';
console.log(createProductFromIndex("coffee", 4.5));
console.log(addProductToServiceFromIndex("Yvi", "tea"));


import {createOrder as createOrderFromIndex, addOrderToService as addOrderToServiceFromIndex} from "./Order/index.ts";
console.log(createOrderFromIndex(["coffee", "tea", "lemonade"]));
console.log(addOrderToServiceFromIndex("Yvi", "6"));

