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
      <TodoCollection todos={todos} />
      <Footer />
    </div>
  );
};

export default TodoPage;
