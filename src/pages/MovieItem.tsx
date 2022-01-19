import { useParams } from "react-router-dom"
import { MoviesType } from "../types/MoviesType"
import { useState, useEffect } from "react"
import { api } from "../api"
import { ReturnPages } from "../components/ReturnPages"
import { AnimatedPage } from "../AnimatedPage"

export const MovieItem = () =>{

    const params = useParams().id!

    const [movie, useMovie] = useState<MoviesType[]>([])

    useEffect(()=>{
        loadMovie();
    }, [])

    const loadMovie = async ()=>{
        let json = await api.getAllMovies()
        useMovie(json)
    }

    return(
        <AnimatedPage>
            <div className="container movie-container">
                <ReturnPages/>
                {movie.map((item, index)=>(
                    item.id == parseInt(params) &&
                    <div className="movie--information" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}/>
                        <ul className="movie-descrption">
                            <li><b>Title:</b> {item.title}</li>
                            <li><b>Resume:</b> {item.overview}</li>
                            <li><b>Release date:</b> {item.release_date}</li>
                            <li><b>Vote average</b>: {item.vote_average} of {item.vote_count} votes</li>
                        </ul>
                    </div>
                    
                ))}
            </div>
        </AnimatedPage>
        
    )
}