
import { Form, Button,FormControl,Card } from "react-bootstrap";
import {useParams,useHistory} from 'react-router-dom'





function MovieDesc({movies}) {
  const {idMovie}=useParams()
 const movie=movies.find((movie)=>movie.id== idMovie)
 const history=useHistory()
  return (
    
    <div >
     
     <iframe width="560" height="315"
      src={movie.trailer} 
      title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
      
      <p>{movie.description}</p>
         <Button variant="primary"  onClick={history.goBack}>
        GO Back
          </Button>
      
    </div>
  );
}
export default MovieDesc;
