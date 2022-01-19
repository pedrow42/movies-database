import { useRoutes } from "react-router-dom"
import { MovieItem } from "../pages/MovieItem"
import { MoviesList } from "../pages/MoviesList"

export const RoutesList = ()=>{
    return useRoutes([
        {path: "/", element: <MoviesList/>},
        {path: "/movies/:genre/:id", element: <MoviesList/>},
        {path: "/movies/:id", element: <MovieItem />}
    ])
}