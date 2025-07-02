import axios from "axios"
 const api_key= import.meta.env.VITE_TMDB_API_KEY
 const api_endpoint= import.meta.env.VITE_TMDB_API_ENDPOINT
 const originalImag= import.meta.env.VITE_TMDB_ORIGINAL_IMAGE


const tmdb = axios.create({
  baseURL: api_endpoint,
  headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY3}`,
  },
});



 export default tmdb




