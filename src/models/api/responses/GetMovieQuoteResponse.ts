export interface MovieQuote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface GetMovieQuoteResponse {
  docs: MovieQuote[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
