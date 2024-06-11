const axios = require('axios');
const fs = require('fs');

// TheMovieDB.org API endpoint and API key
const API_ENDPOINT = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = 'YOUR_API_KEY_HERE';

// Parameters for the API request
const params = {
  api_key: API_KEY,
  language: 'en-US',
  page: 1,
  //primary_release_date_gte: '2023-12-01',
  //primary_release_date_lte: '2023-12-31',
  sort_by: 'vote_average.desc',
};

// Function to fetch movie data
async function fetchMovieData() {
  try {
    const movieData = [];
    let totalPages = 1;
    

    while (params.page <= totalPages) {
      const response = await axios.get(API_ENDPOINT, { params });
      const movies = response.data.results;
      totalPages = response.data.total_pages;

      // Limit the number of movies
      //if (movieData.length >= 10) break;

      for (const movie of movies) {
        const movieDetails = await fetchMovieDetails(movie.id);
        console.log(movie.title);
        movieData.push({
          title: movie.title,
          releaseDate: movie.release_date,
          length: movieDetails.runtime,
          genres: movieDetails.genres.map((genre) => genre.name),
          originalLanguage: movieDetails.original_language,
          budget: movieDetails.budget,
          revenue: movieDetails.revenue,
          rating: movieDetails.vote_average,
          link: `https://www.themoviedb.org/movie/${movie.id}`,
        });
      }

      params.page++;
    }

    // Save the movie data to a JSON file
    fs.writeFileSync('movies.json', JSON.stringify(movieData, null, 2));
    console.log('Movie data saved to movies.json');
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

// Function to fetch additional movie details
async function fetchMovieDetails(movieId) {
  const detailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return detailsResponse.data;
}

fetchMovieData();