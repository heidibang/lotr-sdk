const mockMovies = [
  {
    _id: '11111',
    name: 'Mock Movie 1',
    runtimeInMinutes: 558,
    budgetInMillions: 281,
    boxOfficeRevenueInMillions: 2917,
    academyAwardNominations: 30,
    academyAwardWins: 17,
    rottenTomatoesScore: 94,
  },
  {
    _id: '22222',
    name: 'Mock Movie 2',
    runtimeInMinutes: 558,
    budgetInMillions: 281,
    boxOfficeRevenueInMillions: 2917,
    academyAwardNominations: 30,
    academyAwardWins: 17,
    rottenTomatoesScore: 94,
  },
];

export const mockMovieResponse = {
  docs: mockMovies,
  total: 8,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1,
};

export const mockSingleMovieResponse = {
  ...mockMovieResponse,
  docs: [mockMovies[0]],
  total: 1,
};

const mockMovieQuote = {
  _id: '1',
  dialog: 'Quote 1',
  movie: '11111',
  character: '11111',
  id: '11111',
};

export const mockMovieQuoteResponse = {
  docs: [mockMovieQuote],
  total: 1,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1,
};
