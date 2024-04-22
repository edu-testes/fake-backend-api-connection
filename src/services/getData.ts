import { reqGetUsers }  from "../api/requests";

export async function getUsers() {
  try {
    return await reqGetUsers();
  } catch(err) {
    console.log(err)
  }
}
