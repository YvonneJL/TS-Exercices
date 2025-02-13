export enum Gender {
    Female,
    Male,
    Divers
}

export class Person {
    _name: string;
    _birthday: Date;
    _gender: Gender;

    constructor(birthday: Date, name: string, gender: Gender){
        this._name = name;
        this._birthday = birthday;
        this._gender = gender
    }


    set name (name: string) {
        this._name = name
    }

    get name (): string {
        return this._name
    }

    get birthday (): Date {
        return this._birthday
    }

    set gender (gender: Gender) {
        this._gender = gender
    }

    get gender (): Gender {
        return this._gender
    }


}
