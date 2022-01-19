import { useState, useEffect } from "react"
import { api } from "../api";
import { MoviesType } from "../types/MoviesType";
import { useParams } from "react-router-dom";
import { MovieContent } from "../components/MovieContent";
import { AnimatedPage } from "../AnimatedPage";

export const MoviesList = () =>{

    const [movies, useMovies] = useState<MoviesType[]>([])

    const params = useParams().id!

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
                <div className='content'>
                    {movies.map((item, index)=>(
                        !params ?
                            <MovieContent title={item.title} poster={item.poster_path} id={item.id} key={index}/>
                        : item.genre_ids.indexOf(parseInt(params)) != -1 &&
                            <MovieContent title={item.title} poster={item.poster_path} id={item.id} key={index}/>
                    ))}
                </div>
            </div>

        </AnimatedPage>
        
    )
}