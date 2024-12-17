import axios from "axios";

const base_URL = "https://todo-list.alphacamp.io/api";
//CRUD串接api設定

const axiosInstance = axios.create({
  baseURL : base_URL,

})

//設定Interceptor攔截器
axiosInstance.interceptors.request.use(
   (config) => {
     // Do something before request is sent(先拿token, 在存入config header)
     const token = localStorage.getItem("authToken");
     if (token) {
       config.headers["Authorization"] = `Bearer ${token}`;
       console.log(config)
     }
     return config;
   },
  function (error) {
    // Do something with request error
    console.error(error);
  }
);



export async function getTodos(){
  try { 
    const res = await axiosInstance.get(`${base_URL}/todos`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getTodos failed]:',error)
  }
}

export async function postTodos(payloads){
  const { title, isDone } = payloads
  try { 
    const res = await axiosInstance.post(`${base_URL}/todos`, {
      title,
      isDone,
    });
    console.log("use axios post data to local server")
    return res.data
  }
  catch(error) {
    console.error('[postTodos failed]',error)
  }
}


export async function patchTodos(payloads){
  try {
    console.log("Payloads:", payloads);
    const id = payloads.id?.id || payloads.id;
    const title = payloads.title || payloads.id?.title;
    const isDone = payloads.isDone || payloads.id?.isDone;

    const res = await axiosInstance.patch(`${base_URL}/todos/${id}`, {
      id,
      title,
      isDone,
    });
    return res.data
  }
  catch(error){
    console.error('[patchTodo failed]',error)
  }
}

export async function deleteTodos(id){
  try {
    const res = await axiosInstance.delete(`${base_URL}/todos/${id}`);
    return res.data
  }
  catch(error){
    console.error('[deleteTodo failed]',error)
  }
}
