import { useRoutes } from "react-router-dom"
import { MovieItem } from "../pages/MovieItem"
import { MoviesList } from "../pages/MoviesList"
import {MovieSearch} from "../components/MovieSearch"

export const RoutesList = ()=>{
    return useRoutes([
        {path: "/", element: <MoviesList/>},
        {path: "/movies/:genre/:id", element: <MovieSearch/>},
        {path: "/movies/:id", element: <MovieItem />}
    ])
}