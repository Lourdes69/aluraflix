import React from "react";
import MovieCard from "./MovieCard";
import styles from "../Movie/MovieGrid.module.css";
import { useEffect, useState } from "react";
import get from "../../Api/Cliente";
import Spinner from "../Spinner/spinner";
import useQuery from "../Hook/useQuery";


function MovieGrid() {
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const query = useQuery();
const search  = query.get("search");
console.log(search);

useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search :"/discover/movie";
    get(searchUrl).then((data) => {
     setMovies(data.results);
     setIsLoading(false)
    
    });
}, [search]);
if (isLoading){
    return <Spinner />
}




    return <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>;
}

export default MovieGrid