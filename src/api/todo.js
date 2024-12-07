import axios from "axios";

const base_URL ="http://localhost:3004"
//CRUD串接api設定
export async function getTodos(){
  try { 
    const res = await axios.get(`${base_URL}/todos`)
    return res.data
  }
  catch(error) {
    console.error('[getTodos failed]:',error)
  }
}

export async function postTodos(payloads){
  const { title, isDone } = payloads
  try { 
    const res = await axios.post(`${base_URL}/todos`, {
    title,
    isDone
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

    const res = await axios.patch(`${base_URL}/todos/${id}`,{
      id,
      title,
      isDone
    })
    return res.data
  }
  catch(error){
    console.error('[patchTodo failed]',error)
  }
}

export async function deleteTodos(id){
  try {
    const res = await axios.delete(`${base_URL}/todos/${id}`)
    return res.data
  }
  catch(error){
    console.error('[deleteTodo failed]',error)
  }
}
