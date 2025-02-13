export default class Customer {
    private _name: string;
    private _email: string;
    private _address: string;
    private _postalCode: string;
    private _city: string

    constructor(name: string, email: string, address: string, postalCode: string, city: string){
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city
    }

    //..Implementiere Get- und Set-Methoden für jede Eigenschaft.
    //..vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

    get name(): string {
        return this._name
    };

    set name(name: string) {
        if (name.length > 60) {
            throw new Error("Dieser Name überschreitet die zugelassene Gesamtmenge an Zeichen")
        } else {
            this._name = name
        }
    }

    //..vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

    get email(): string {
        return this._email
    };

    set email(email: string) {
        if (email.includes("@") === false || email.includes(".") === false){
            throw new Error("Dies ist keine gültige Email Adresse")
        } else {
            this._email = email
        }
    }

    

    get address(): string {
        return this._address
    };

    set address(address: string) {
        this._address = address
    }

    //..vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

    get postalCode(): string {
        return this._postalCode
    };

    set postalCode(postalCode: string) {
        if (postalCode.length === 5 && !isNaN(Number(postalCode)) && (Number(postalCode))>=0 && !postalCode.includes("-") && Number.isInteger(Number(postalCode))) {
            this._postalCode = postalCode
        } else {
            throw new Error("Dies ist kein gültiger Postalcode")
        }
    }

    get city(): string {
        return this._city
    };

    set city(city: string) {
        this._city = city
    }
}