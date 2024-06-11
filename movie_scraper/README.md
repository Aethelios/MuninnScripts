# TheMovieDB.org Scraper

This is a JavaScript-based web scraper that fetches movie data from TheMovieDB.org API and saves it to a JSON file.

## Features

The scraper fetches the following information for movies released between 2020 and 2023:

- Movie title
- Release date
- Movie length (in minutes)
- Movie genres (list)
- Director name
- Original language
- Budget
- Revenue
- TMDB rating
- Link to the movie page on TheMovieDB.org

## Prerequisites

To use this scraper, you'll need the following:

1. Node.js (version 12 or higher) installed on your system.
2. A TheMovieDB.org API key. You can obtain one by creating an account on the [TheMovieDB.org website](https://www.themoviedb.org/signup).

## Installation

1. Clone the repository
2. Navigate to the `movie_scraper` directory
3. Install the required dependencies: npm install

## Usage

1. Open the `tmdb_scraper.js` file and replace `'YOUR_API_KEY_HERE'` with your actual TheMovieDB.org API key.
2. Make the necessary changes to match your needs
2. Run the scraper script: npm start

This will fetch the movie data and save it to a jason file.

## Customization

If you want to customize the script, you can modify the following:

- **API Endpoint**: You can change the API endpoint to fetch movies based on different criteria, such as top-rated or upcoming movies.
- **Release Date Range**: You can adjust the `primary_release_date_gte` and `primary_release_date_lte` parameters to fetch movies from a different time period.
- **Output File Name**: You can change the output file name by modifying the `fs.writeFileSync()` call in the `fetchMovieData()` function.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.