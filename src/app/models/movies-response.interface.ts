export interface MoviesResponse {
    dates: any,
    page: number,
    results: {
        id: string,
        title: string,
        poster_path: string,
        overview: string,
    },
    total_pages: number,
    total_results: number,
    type: string,
}