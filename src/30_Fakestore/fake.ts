console.log("Projekt Fakestore");

//&alle Elemente aus DOM ziehen

const productSection = document.querySelector("#hero");

const productInput = document.querySelector<HTMLInputElement>("#search-input");
const productButtonSearch = document.querySelector("#search-button");

const productCategoryElButton = document.querySelector("#category-1");
const productCategoryJeButton = document.querySelector("#category-1");
const productCategoryMeButton = document.querySelector("#category-1");
const productCategoryEWoButton = document.querySelector("#category-1");



//& Typ für die Daten bestimmen
type Product =  {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
};


//& Daten innerhalb try catch ziehen mit asynchroner Funktion
async function getShopProducts() {
        try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const productData: Product[] =  await productResponse.json();
    
        //hier überprüfe ich, ob das fetchengeklappt hat-also die Daten in der Konsole geloggt werden
        console.log(productData);
        return productData;
    } catch(error) {
        console.log(error);
    };    
};

//muss die Funktion in einer Variablen speichern
// dann erhalte ich ein Promise
//wenn ich das await davor packe bekomme ich die Response, also die Daten, die ich möchte
//da shopProductData auch undefined sein kann, muss ich immer kontrollieren, ob es existiert mit if
const shopProductData = await getShopProducts();


if (shopProductData && productSection) {

    //im Loop alle Produkte in die DOM 
    for (let i = 0; i<= shopProductData.length -1; i++) {

        const productContainerAußen = document.createElement("section");
        productSection.appendChild(productContainerAußen);
        productContainerAußen.className = "bg-white border border-yellow-100 rounded-xl p-3 flex flex-col justify-end"

        // Container definieren
        const productContainer = document.createElement("article");
        productContainerAußen.appendChild(productContainer);
        

        //img und Container dazu
        const imgDivElement = document.createElement("div");
        const imgElement = document.createElement("img");
        productContainer.appendChild(imgDivElement);
        imgDivElement.appendChild(imgElement);
        imgElement.src = shopProductData[i].image;
        imgElement.className = "w-1/2"
        imgDivElement.className = "flex justify-center mb-5"

        //Produkttitel und Linie
        const titlePElement = document.createElement("p");
        productContainer.appendChild(titlePElement);
        titlePElement.textContent = shopProductData[i].title;
        titlePElement.className = "text-bold text-left mb-5 w-[90%] mx-auto";
        const lineDiv = document.createElement("div");
        productContainer.appendChild(lineDiv);
        lineDiv.className = "w-[90%] h-[1px] bg-gray-400 mx-auto mb-5";

        //Preis und Button Teil
        const preisContainer = document.createElement("article");
        productContainer.appendChild(preisContainer);
        preisContainer.className = "mb-5 flex justify-between items-center p-2 w-[90%] mx-auto";
        const pricePElement = document.createElement("p");
        preisContainer.appendChild(pricePElement);
        pricePElement.textContent = `$ ${shopProductData[i].price.toString()}`;
        const buttonAddToCart = document.createElement("button");
        preisContainer.appendChild(buttonAddToCart);
        buttonAddToCart.setAttribute("id", shopProductData[i].id.toString());
        buttonAddToCart.className = "bg-yellow-100 p-2 rounded-2xl";
        buttonAddToCart.textContent = "Add to cart";
    }; 
};




