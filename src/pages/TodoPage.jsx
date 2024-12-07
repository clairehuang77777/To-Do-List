import { Footer, Header, TodoCollection, TodoInput } from '../components';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteTodos, getTodos,patchTodos,postTodos } from '../api/todo';

// eslint-disable-next-line no-unused-vars

// const dummyTodos = [
//   {
//     title: 'Learn react-router',
//     isDone: true,
//     id: 1,
//   },
//   {
//     title: 'Learn to create custom hooks',
//     isDone: false,
//     id: 2,
//   },
//   {
//     title: 'Learn to use context',
//     isDone: true,
//     id: 3,
//   },
//   {
//     title: 'Learn to implement auth',
//     isDone: false,
//     id: 4,
//   },
// ];


const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  async function handleAddToDoClick() {
  if (inputValue.length === 0) {
      return;
  }
  
  try{
    const data = await postTodos({
      title:inputValue,
      isDone:false
    })
    console.log("second async/await function to give a promise result")
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          title: data.title,
          isDone: data.isDone,
          id: data.id,
        },
      ];
    });
    console.log("new data into todos state")
    console.log("later trigger react native re-render for item with todos");

    setInputValue("")
  }
    catch(error){
      console.error(error)
    }
  }

  async function handleOnKeyDown() {
    if (inputValue.length === 0) {
      return;
    }

    try {
      const data = await postTodos({
      title:inputValue, 
      isDone:false})
    
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          title: data.title,
          isDone: data.isDone,
          id: data.id,
        },
      ];
    })

    setInputValue("")
    }
    catch(error){
      console.error(error)
    }
  }

  async function handleToggleDone(id) {
    const currentTodo = todos.find((todo)=>todo.id === id)
    try {
      const data = await patchTodos(
        {
          id,
          isDone:!currentTodo.isDone
        }
      )
        setTodos((prevTodos) => {
         return prevTodos.map((item) =>
           item.id === id ? 
         { ...item, id:data.id, isDone:data.isDone } : item
           );
         });
    }
    catch(error){
      console.error(error)
    }
  }

  function handleChangeMode({ id, isEdit }) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          console.log(`Todo with ID ${id} is now editable.`);
          return { ...todo, isEdit };
        }
        return { ...todo, isEdit: false };
      });
    });
  }

  async function handleSave({ id, title }) {
    console.log("saving todo",id, title)
    try {
      const data = await patchTodos({
        id,
        title
      });
      
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title,
              isEdit:false
            };
          }
          return {
            ...todo,
          };
        });
      });
    console.log(todos)
    } 
    catch(error){
      console.error(error)
    }
  }

  async function handleDelete(id) {
    //套用 deleteTodos()使用axios打delete request
    try{
      const data = await deleteTodos(id)
    
      setTodos((prevtodos) => {
        return prevtodos.filter((item) => {
          if (item.id !== data.id) {
            return {
              ...item,
            };
          }
        });
      });
    } catch(error){
      console.error(error)
    }
  }

  //使用此hook讓react讓外部系統連接
  useEffect(() => {
    async function getTodosAsync() {
      try {
        const todos = await getTodos();
        setTodos(
          todos.map((todo) => ({
            ...todo,
            isEdit: false,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    }
    getTodosAsync();
  }, []);

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddToDoClick}
        onKeyDown={handleOnKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode} // 确保正确传入函数
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer todos={todos} />
    </div>
  );
}

export default TodoPage;
