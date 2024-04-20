import UserForm  from "../components/UserForm/UserForm.tsx";
import { authUser } from "../services/authorization.ts"

export default function AuthPage() {
  return (
    <>
      <p>Auth page</p>
      <UserForm reqType={"auth"} sendData={authUser}/>
    </>
  ) 
}
