import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
  const firstExample = {
    size: 30,
    value: movie.rate,
    edit: true
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={movie.posterUrl}
        width="100%"
        height="400px"
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text><ReactStars {...firstExample} /></Card.Text>
      </Card.Body>
    </Card>
  );
}
export default MovieCard;
