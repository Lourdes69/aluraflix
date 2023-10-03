
import styles from "../pages/MovieDatails.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import get from "../Api/Cliente";
import Spinner from "../componentes/Spinner/spinner";



function MovieDetails(){
    const {  movieId } = useParams();
    const [isLoading, setsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() =>{
        setsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setsLoading(false);
            setMovie(data)
        });
    }, [movieId]);
    if (isLoading){
        return <Spinner />;
    }
    if (!movie){
        return null
    }


    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    
    return <div className={styles.detailsContainer}>
    <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
    <div className={ `${styles.col} ${styles.movieDetails}`}>
        <p className={styles.title}> <strong>Titulo: </strong>{movie.title}</p>
        <p>
          <strong>Genero:</strong>   {" "}
            {movie.genres.map(genre => genre.name).join(", ")}
        </p>
        <p><strong>Sinopsis:</strong> {movie.overview}</p>
    </div>
    </div>

}

export default MovieDetails