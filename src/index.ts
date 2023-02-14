import axios, {AxiosResponse} from 'axios';
import {GetMovieResponse, GetMovieQuoteResponse} from './models/api';

export class LOTR {
  private baseUrl: string;
  private accessToken: string;

  constructor(baseUrl: string, accessToken: string) {
    this.baseUrl = baseUrl;
    this.accessToken = accessToken;
  }

  /**
   * Get all movies
   * @returns {Promise<GetMovieResponse>}
   */
  async getMovies(): Promise<GetMovieResponse> {
    const url = `${this.baseUrl}/movie`;

    try {
      const response: AxiosResponse<GetMovieResponse> = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get a single movie by id
   * @param {string} id
   * @returns {Promise<GetMovieResponse>}
   */
  async getSingleMovie(id: string): Promise<GetMovieResponse> {
    const url = `${this.baseUrl}/movie/${id}`;

    try {
      const response: AxiosResponse<GetMovieResponse> = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      if (response.status === 500) {
        throw new Error('Invalid ID');
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Get all quotes from a single movie by id
   * @param {string} id
   * @returns {Promise<GetMovieQuoteResponse>}
   */
  async getMovieQuotes(id: string): Promise<GetMovieQuoteResponse> {
    const url = `${this.baseUrl}/movie/${id}/quote`;

    try {
      const response: AxiosResponse<GetMovieQuoteResponse> = await axios.get(
        url,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      if (response.status === 500) {
        throw new Error('Invalid ID');
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
