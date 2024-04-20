import { registerUser as reqRegisterUser}  from "../api/requests";
import { authenticateUser as reqAuthenticateUser}  from "../api/requests";
import { RegData } from "../types/registration/RegData";
//import { RegResponseData } from "../types/registration/RegResponseData";

export function registerUser(user: RegData) {
  reqRegisterUser(user).then((res) => {
    localStorage.setItem('accessToken', res.accessToken);
  }).catch((err) => console.log(err));
}

export function authUser(user: RegData) {
  reqAuthenticateUser(user).then((res) => {
    localStorage.setItem('accessToken', res.accessToken);
  }).catch((err) => console.log(err));
}

export function logout() {
  localStorage.removeItem('accessToken');
  window.location.href = '/';
  //window.location.reload();
}
