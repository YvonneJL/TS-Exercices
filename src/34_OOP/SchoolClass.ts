import Person from "./Person";

export default class SchoolClass {
    id: number;
    name: string;
    endDate?: string;
    private classMates: Person[]

    constructor (id: number, name: string, classMates: Person[] = []) {
        this.id = id;
        this.name = name;
        this.classMates = classMates
    }

    addClassMate (student: Person) {
        this.classMates.push(student)
    }
}