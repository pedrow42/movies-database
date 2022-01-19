import axios from "axios";

const key = 'api_key=8f21d4621d3aab323c8603e47a7ce86d'
const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const api = {
    getAllMovies: async () =>{
        try{
            let response = await http(`/movie/popular?${key}`);
            return response.data.results;
        }catch(error){
            console.error(error);
        }
    },
    getAllGenres: async () =>{
        try{
            let response = await http(`/genre/movie/list?${key}`)
            return response.data.genres
        }catch(error){
            console.error(error)
        }
    }
}