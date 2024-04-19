import { registerUser as reqRegisterUser}  from "../api/requests";
import { RegData } from "../types/registration/RegData";
//import { RegResponseData } from "../types/registration/RegResponseData";

export function registerUser(user: RegData) {
  reqRegisterUser(user).then((res) => console.log(res)).catch((err) => console.log(err));
}