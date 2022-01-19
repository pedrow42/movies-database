import { Link } from "react-router-dom"

type Props = {
    title: string,
    poster: string,
    id: number
}

export const MovieContent = (props:Props) =>{

    return(
        <>
            <Link className="link--element" to={`/movies/${props.id}`}>
                <div className="movie--content">
                    <p>{props.title}</p>
                    <img src={`https://image.tmdb.org/t/p/w300${props.poster}`}/>
                </div>
            </Link>
        </>

        
        
    )    
}