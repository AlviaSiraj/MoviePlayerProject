import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {
  login(username, password) {
    return axios.post(AUTH_API_BASE_URL + "/sign-in", {username, password});
  }

  register(username,email,password,phoneNumber) {
    return axios.post(AUTH_API_BASE_URL + "/sign-up", {username,email,password,phoneNumber});
  }
}
 export default new AuthService();

 
// export async function login(username, password) {
//     return await axios.post(AUTH_API_BASE_URL, {
//         username,
//         password
//     });
// }