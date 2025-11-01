export interface Book {
    id: number;
    periodo: string;
    nome: string;
    abrev: string;
    capitulos: number;
}

export interface Chapter {
    verses: string[];
    hasNext: boolean;
    hasPrevious: boolean;
}
