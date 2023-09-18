import axios from 'axios';

const API_KEY = '18ad1afa22a39e3c497cf86bc3da3983';

export const fetchLatestMovies = async (page, controller) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=${page}`,
    {
      signal: controller.signal,
    }
  );
  const data = response.data;
  return { results: data.results, total_pages: data.total_pages };
};

export const fetchMovieById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchMovieCastById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchMovieReviewsById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchMoviesByQuery = async (query, page, controller) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${page}`,
    {
      signal: controller.signal,
    }
  );
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
