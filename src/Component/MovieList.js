import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
function MovieList({ movies,searchRating ,searchTitle}) {
  return (
    <div className="stylediv">
     
      {movies.filter((movie)  => movie.title
              .toLowerCase()
              .includes(searchTitle.toLowerCase().trim())&&
              movie.rate >= searchRating ).map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
}
export default MovieList;
