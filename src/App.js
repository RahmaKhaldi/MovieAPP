import "./App.css";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import NavBar from "./Component/NavBar";
import AddMovie from "./Component/AddMovie";
import MovieList from "./Component/MovieList";
import { useState } from "react";
import MovieDesc from "./Component/MovieDesc";



export default function App() {
  const [movies, setMovies] = useState([
    {
      id:1,
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 5,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:2,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      rate: 5,
      trailer:"https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
      id:3,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      rate: 4,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:4,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest .",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rate: 3,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:5,
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      rate: 4,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:6,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 4,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:7,
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales.",
      posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
      rate: 3,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:8,
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
      rate: 4,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:9,
      title: "The Good, the Bad and the Ugly",
      description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried.",
      posterUrl:
        "https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg",
      rate: 4,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    },
    {
      id:10,
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something.",
      posterUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
      rate: 2,
      trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ"
    }
  ]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const getSearch = (title) => {
    setSearchTitle(title);
  };
  const getRating = (rate) => {
    setSearchRating(rate);
  };
  return (
    <BrowserRouter >
    <div className="App">
      <NavBar  getSearch={ getSearch} getRating={getRating}/>
      <br />
      <AddMovie movies={movies} setMovies={setMovies} />
      <br />
      <Route exact path="/">
      <MovieList searchRating={searchRating} searchTitle={searchTitle} movies={movies} />
      </Route>
      <Route path="/des/:idMovie">
            <MovieDesc  movies={movies}/>
          </Route>
         
    </div>
    </BrowserRouter >
  );
}
