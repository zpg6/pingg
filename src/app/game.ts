export class Game {

    constructor() { }

    id: number = 0;
    name: string = "";
    ageRatings: string[] = [];
    description: string = "";
    coverURL: string = "";
    firstReleaseDate: number = 0;
    franchise: string = "";
    genres: string[] = [];
    platforms: string[] = [];
    similarGames: number[] = [];
    rating: number = 0.0;
    ratingCount: number = 0;
    screenshots: string[] = [];
    searchableIndex = {};
    videos: string[] = [];
}
