export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    place_name_es: string;
    text:          string;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
    bbox?:         number[];
}

export interface Context {
    id:           string;
    wikidata?:    string;
    text_es:      string;
    language_es?: Language;
    text:         string;
    language?:    Language;
    short_code?:  string;
}

export enum Language {
    Es = "es",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    foursquare?: string;
    landmark?:   boolean;
    category?:   string;
    accuracy?:   string;
}
