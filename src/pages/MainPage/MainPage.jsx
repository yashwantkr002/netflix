import React,{ useState,useEffect} from 'react'
import {Container, Heropage, TrandingSction, } from "../../components/index";
import tmdb from '../../conf/conf';
function MainPage() {
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [randomTranding, setRandomTranding] = useState([]);

    async function getGenresMovies() {
        try {
          const response = await tmdb.get('/genre/movie/list');
          const genres = response.data.genres;
    
          const genreMoviesPromises = genres.map(genre =>
            fetchMoviesByGenreid(genre.id, genre.name)
          );
          const genreMovies = await Promise.all(genreMoviesPromises);
          const result = genreMovies.map((movies, index) => (
            {
              genreName:genres[index].name,
              movies:movies
            }    
          ))
          // console.log(result)
          setMoviesByGenre((prev) => [...prev, ...result]);
        } catch (error) {
          console.error("Error fetching genres and movies:", error);
        }
      }
    
      async function fetchMoviesByGenreid(id, genreName) {
        try {
          const response = await tmdb.get('/discover/movie', {
            params: {
              with_genres: id,
            },
          });
          return response.data.results; 
        } catch (error) {
          console.error(`Error fetching movies for genre "${genreName}":`, error);
          return []; 
        }
      }
      async function TrandingMovies() {
        try {
          const response = await tmdb.get('/trending/all/week');
          const results = response.data.results;
          const TrandingResult={
            genreName:"Tranding",
            movies:results
          }
          setMoviesByGenre((prev) => [...prev, TrandingResult]);
          const rendomNumber=Math.floor(Math.random()*results.length)
          setRandomTranding(results[rendomNumber])    
        } catch (error) {
          console.error(`Error fetching movies for genre :`, error);
          return []; 
        }
      }
    
      useEffect(() => {
        TrandingMovies();
        getGenresMovies(); 
      }, []);
  return (
    <Container>
      <Heropage trandingImg={randomTranding} />
        {moviesByGenre.map((movie, index) => (
          <TrandingSction 
            key={index}
            moviesByGenre={movie.movies} 
            categories={movie.genreName} 
          />
        ))}
      </Container>
  )
}

export default MainPage