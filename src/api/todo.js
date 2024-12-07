import axios from "axios";

const base_URL ="http://localhost:3004"

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


export function patchTodos(){


}

export function deleteTodos(){

}
