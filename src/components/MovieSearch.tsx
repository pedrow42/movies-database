import { useState, useEffect } from "react"
import { api } from "../api";
import { MoviesType } from "../types/MoviesType";
import { useParams } from "react-router-dom";
import { MovieContent } from "./MovieContent";
import { AnimatedPage } from "../AnimatedPage";

export const MovieSearch = () =>{

    const [movies, useMovies] = useState<MoviesType[]>([])

    const idParams = useParams().id!
    const idGenre = useParams().genre!

    useEffect(()=>{
        loadMovies();
    }, []);

    const loadMovies = async ()=>{
        let json = await api.getAllMovies()
        useMovies(json)
    }

    return(
        <AnimatedPage>
            <div className="movieListContainer">
                <h3 className="mb-5">{idGenre.toUpperCase()}</h3>
                <div className='content'>
                    {movies.map((item, index)=>(
                        item.genre_ids.indexOf(parseInt(idParams)) != -1 &&
                            <MovieContent title={item.title} poster={item.poster_path} id={item.id} key={index}/>
                    ))}
                </div>
            </div>
        </AnimatedPage>
        
    )
}