import axios, {AxiosResponse} from 'axios';
import {LOTR} from '.';
import {
  mockMovieQuoteResponse,
  mockMovieResponse,
  mockSingleMovieResponse,
} from './mocks/responses';
import {GetMovieQuoteResponse, GetMovieResponse} from './models/api';

jest.mock('axios');

describe('LOTR', () => {
  const baseUrl = 'https://api.example.com';
  const accessToken = 'mock-access-token';
  let lotr: LOTR;

  beforeEach(() => {
    lotr = new LOTR(baseUrl, accessToken);
  });

  describe('getMovies', () => {
    it('returns a list of all movies', async () => {
      const expectedData: GetMovieResponse = mockMovieResponse;
      const axiosGetMoviesSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValue({data: expectedData});

      const response = await lotr.getMovies();

      expect(response).toEqual(expectedData);
      expect(axiosGetMoviesSpy).toHaveBeenCalledWith(
        `${baseUrl}/movie`,
        expect.objectContaining({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      );
    });

    it('throws an error when the access token is invalid', async () => {
      (axios.get as jest.Mock).mockResolvedValue({
        status: 401,
        data: {},
      } as AxiosResponse<GetMovieResponse>);

      await expect(lotr.getMovies()).rejects.toThrow('Unauthorized');
    });
  });

  describe('getSingleMovie', () => {
    it('returns the expected data when the request is successful', async () => {
      const expectedData: GetMovieResponse = mockSingleMovieResponse;

      const axiosGetSingleMovieSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValue({data: expectedData});

      const response = await lotr.getSingleMovie('11111');

      expect(response).toEqual(expectedData);
      expect(axiosGetSingleMovieSpy).toHaveBeenCalledWith(
        `${baseUrl}/movie/11111`,
        expect.objectContaining({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      );
    });

    it('throws an error when the access token is invalid', async () => {
      (axios.get as jest.Mock).mockResolvedValue({
        status: 401,
        data: {},
      } as AxiosResponse<GetMovieResponse>);

      await expect(lotr.getSingleMovie('1')).rejects.toThrow('Unauthorized');
    });

    it('throws an error when the movie ID is invalid', async () => {
      (axios.get as jest.Mock).mockResolvedValue({
        status: 500,
        data: {},
      } as AxiosResponse<GetMovieResponse>);

      await expect(lotr.getSingleMovie('invalid-ID')).rejects.toThrow(
        'Invalid ID'
      );
    });
  });

  describe('getMovieQuotes', () => {
    it('returns the expected data when the request is successful', async () => {
      const expectedData: GetMovieQuoteResponse = mockMovieQuoteResponse;

      const axiosGetMovieQuotesSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValue({data: expectedData});

      const response = await lotr.getMovieQuotes('11111');

      expect(response).toEqual(expectedData);
      expect(axiosGetMovieQuotesSpy).toHaveBeenCalledWith(
        `${baseUrl}/movie/11111/quote`,
        expect.objectContaining({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      );
    });

    it('throws an error when the access token is invalid', async () => {
      (axios.get as jest.Mock).mockResolvedValue({
        status: 401,
        data: {},
      } as AxiosResponse<GetMovieQuoteResponse>);

      await expect(lotr.getMovieQuotes('1')).rejects.toThrow('Unauthorized');
    });

    it('throws an error when the movie ID is invalid', async () => {
      (axios.get as jest.Mock).mockResolvedValue({
        status: 500,
        data: {},
      } as AxiosResponse<GetMovieQuoteResponse>);

      await expect(lotr.getMovieQuotes('1')).rejects.toThrow('Invalid ID');
    });
  });
});
