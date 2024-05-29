export type Item = {
    page:         number;
    results:      Result[];
    totalPages:   number;
    totalResults: number;
}

export type Result = {
    adult:            boolean;
    backdrop_path:     string;
    genreIDS:         number[];
    id:               number;
    originalLanguage: string;
    originalTitle:    string;
    overview:         string;
    popularity:       number;
    poster_path:       string;
    releaseDate:      Date;
    title:            string;
    video:            boolean;
    vote_average:      number;
    vote_count:        number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toItem(json: string): Item {
        return JSON.parse(json);
    }

    public static itemToJson(value: Item): string {
        return JSON.stringify(value);
    }
}