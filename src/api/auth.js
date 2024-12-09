import axios from "axios";

const auth_Endpoint = "https://todo-list.alphacamp.io/api/auth";

export async function login({username, password}){
  try {
    const { data } = await axios.post(`${auth_Endpoint}/login`, {
      username,
      password,
    });

    console.log(data);

    const { authToken } = data;
    //有通過server檢查才有authToken,加入success key. 若沒通過, 直接返回所有data
    if (authToken) {
      return {
        success: true,
        ...data,
      }
    }
    return data;
  }
  catch(error){
    console.error(error)
  }
}