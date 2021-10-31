import { Form, Button,FormControl } from "react-bootstrap";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

import MovieCard from "./MovieCard";
function Filter({ searchMovie ,getRating }) {
  const [title, setTitle ]= useState(" ");

  const ratingChanged = (newRating) => {
    getRating(newRating);
  }; 
  return (
    <div>
       <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => searchMovie(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
    
    </div>
  );
}
export default Filter;
