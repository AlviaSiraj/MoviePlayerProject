import axios from "axios";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

const MOVIE_API_BASE_URL = "http://localhost:8080/api/v1/movies";

class MovieService {
  
  getAllMovies(token) {
    return axios.get(MOVIE_API_BASE_URL,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .catch((err) => {
      console.log(  axios.get(MOVIE_API_BASE_URL,{
        headers: {
            Bearer: `${token}`,
        },
    }));
        return <Navigate to="/" />;
    });
  }
 
}
 export default new MovieService();

 
// export async function login(username, password) {
//     return await axios.post(AUTH_API_BASE_URL, {
//         username,
//         password
//     });
// }