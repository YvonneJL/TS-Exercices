import Episode from "./Eisode";

export default class TVShow {
    title: string;
    description?: string;
    startYear: number;
    endYear: number;
    episodes: Episode[]

    constructor( title: string, description: string, startYear: number, endYear: number, episodes: Episode[]){
        this.title = title;
        this.description = description;
        this.startYear = startYear;
        this.endYear = endYear;
        this.episodes = episodes
    }
}