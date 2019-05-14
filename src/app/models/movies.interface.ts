import { MovieResults } from './movie-results.interface';

export interface Movies {
    dates: any;
    page: number;
    results: MovieResults[];
    total_pages: number;
    total_results: number;
    type: string;
}
