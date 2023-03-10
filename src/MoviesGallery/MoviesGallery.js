import MovieCard from "../MovieCard/MovieCard";
import { movies } from "../movies_data";
import './MoviesGallery.css'

// export default function MoviesGallery() {

//     const moviesItems = movies.map(
//         (movie) => <MovieCard key={movie.id} movie={movie}/>)

//     return (
//     <>
//         {moviesItems}
//     </>
//     )
// }


export default function MoviesGallery() {

    const moviesItems = movies.map(
        (movie) => <MovieCard 
            key={movie.id} movieData={movie}
            a={2} bla="yuy"/>)

    return (
    <div className="movies-gallery">
        {moviesItems}
    </div>
    )
}