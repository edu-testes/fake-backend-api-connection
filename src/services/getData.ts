import { reqGetUsers }  from "../api/requests";

export async function getUsers() {
  try {
    const res = await reqGetUsers();
    console.log(res);
    return res;
  } catch(err) {
    console.log(err)
  }
}
