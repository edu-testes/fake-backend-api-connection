import { reqGetUsers }  from "../api/requests";

export async function getUsers() {
  try {
    const res = await reqGetUsers();
    return res;
  } catch(err) {
    console.log(err)
  }
}
