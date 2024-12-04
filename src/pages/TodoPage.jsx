import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];


const TodoPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos);

  function handleChange(e){
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  function handleAddToDoClick(){
    if (inputValue.length === 0){
      return ;
    }
    
    setTodos((prevTodos) => {
    return [
     ...prevTodos,
     {
      title:inputValue,
      isDone:false,
      id:Math.random()*100
     } 
    ]}
  )

    setInputValue('')
  }

  function handleOnKeyDown(){
    if (inputValue.length === 0) {
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          title: inputValue,
          isDone: false,
          id: Math.random() * 100,
        },
      ];
    });

    setInputValue('');
  }

  function handleToggleDone(id){
    setTodos((prevTodos) => {
      return prevTodos.map((item) =>
        item.id === id ? 
        { ...item, 
          isDone: !item.isDone } : 
          item,
      );
     })
  }

  function handleChangeMode({ id, isEdit }){
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          console.log(`Todo with ID ${id} is now editable.`);
          return { ...todo, isEdit };
        }
        return { ...todo, isEdit: false };
      });
    });
  }

  function handleSave({id, title}){
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              title,
              isEdit: false,
            };
          }
          return {
            ...todo,
          };
        })
      })}

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
    />
    <Footer />
  </div>
)
}

export default TodoPage;
