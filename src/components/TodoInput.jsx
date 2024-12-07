import styled from 'styled-components';
import clsx from 'clsx';

const StyledAddTodoContainer = styled.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  position: relative;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 12px;
  box-shadow: 0 17px 0 -16px #e5e5e5;
  flex-wrap: wrap;

  &.active {
    box-shadow: 0 17px 0 -16px var(--major);
  }
`;

const StyledLabelIcon = styled.label`
  display: inline-flex;
  font-size: 30px;
  transition: color 0.2s ease-out;
  font-weight: 300;

  &:after {
    content: '+';
  }
`;

const StyledInputContainer = styled.div`
  min-height: 52px;
  display: flex;
  align-items: center;
  flex: 1;
  user-select: none;

  input {
    flex: 1;
    padding: 8px 12px;
    border: 0;
    outline: 0;
    font-size: 1rem;

    &::placeholder {
      color: var(--major);
      font-size: 13px;
    }
  }
  $.active {
    input::placeholder {
      color: var(--gray);
    }
  }
`;

const StyledAddTodoActionContainer = styled.div`
  button {
    font-size: 13px;
    color: var(--major);
    padding-right: 5px;
    display: none;
  }

  &.active {
    button {
      display: block;
    }
  }
`;
/*inputValue 使用者在TodoInput內輸入的值
onChange 當使用者的輸入產生變化>> 就要更新inputValue
onKeyPress 當使用者按下enter >> 建立一個新的TodoItem()
[疑問] 這兩個動作不會很重複嗎?
onAddToDo 當使用者按下"+"號, >> 建立一個新的TodoItem
*/
const TodoInput = ({ 
  inputValue, 
  onChange, 
  onKeyDown, 
  onAddTodo }) => {

  
  return (
    <StyledAddTodoContainer>
      <StyledLabelIcon className="icon" htmlFor="add-todo-input" />
      <StyledInputContainer className={clsx("", {active:inputValue.length>0})} >
        <input
          id="add-todo-input"
          type="text"
          placeholder="新增工作"
          value={inputValue}
          onChange={onChange} //更新inputValue值
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              {onKeyDown()}
            }
          }
        />
      </StyledInputContainer>
      <StyledAddTodoActionContainer className={clsx("",{active:inputValue.length > 0})}>
        <button 
          className="btn-reset"
          onClick={onAddTodo}>新增</button>
      </StyledAddTodoActionContainer>
    </StyledAddTodoContainer>
  );
};

export default TodoInput;
