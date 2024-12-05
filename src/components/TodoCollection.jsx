import { useContext } from 'react';
import TodoItem from './TodoItem';
import { toDoContext } from 'pages/TodoContext';


/* 
todos 要傳進todo的資料
onSave 儲存事件事件
onDelete 刪除列表事件
onToggleDone 點擊完變成完成事件
onChangeMode 列表可編輯的狀態
*/
const TodoCollection = ({ 
  todos,
  onSave, 
  onDelete, 
  onToggleDone, 
  onChangeMode }) => {

  return (
    <div>
      {todos.map((todo)=>{
        return <TodoItem 
        key={todo.id} 
        todo={todo}
        onToggleDone={(id)=> onToggleDone(id)}
        onChangeMode={({id,isEdit}) => onChangeMode?.({id, isEdit})}
        onSave={(id, title)=> onSave({id, title})}
        onDelete={(id)=> onDelete(id)}/>
      })}
   </div>
  )
};

export default TodoCollection;
