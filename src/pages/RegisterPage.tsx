import UserForm  from "../components/UserForm/UserForm.tsx";
import { registerUser } from "../services/authorization.ts"

export default function RegisterPage() {
  return (
    <>
      <p>Register page</p>
      <UserForm reqType={"register"} sendData={registerUser}/>
    </>
  ) 
}