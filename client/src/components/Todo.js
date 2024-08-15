import React, { useState } from 'react';
import '../styles/Todo.scss';

export default function Todo({item, deleteItem}) {
    console.log('item >> ', item); // {id: 1, title: 'my todo1', done: false}

    const [todoItem, setTodoItem] = useState(item);
    const [readOnly, setReadOnly] = useState(true);

    const onDeleteButtonClick = () => {
        deleteItem(todoItem);
    }

    // title 클릭 시 실행될 함수 : readOnly를 false로 변경
    const offReadOnlyMode = () => {
        setReadOnly(false);
    }

    // readOnly true : enter 키 누르면 readOnly를 true로 변경
    const enterKeyEventHandler = (e) => {
        if(e.key === 'Enter'){
            setReadOnly(true);
        }
    }

    // 커서가 깜빡인다고 수정 가능한 것은 아님.
    // 사용자가 키보드 입력할 때마다 item 새 값으로 변경.
    const editEventHandler = (e) => {
        // rest: id, done 정보
        // {title, ...rest} : title 이외 나머지
        const {title, ...rest} = todoItem;
        setTodoItem({
            title: e.target.value,
            ...rest,
        });
    }

    // checkbox 업데이트
    const checkboxEventHandler = (e) => {
        const {done, ...rest} = todoItem;
        setTodoItem({
            done: e.target.checked,
            ...rest,
        });
        console.log('e.target.checked >> ', e.target.checked);
    }

    console.log('todoItem >> ', todoItem);

  return (
    <div className='Todo'>
        <input 
            type="checkbox" 
            id={`todo${todoItem.id}`} 
            name={`todo${todoItem.id}`} 
            value={`todo${todoItem.id}`} 
            defaultChecked={todoItem.done} // true: o, false: x
            onChange={checkboxEventHandler}
        />
        <input 
            type="text" 
            value={todoItem.title}
            readOnly={readOnly}
            onClick={offReadOnlyMode}
            onChange={editEventHandler}
            onKeyDown={enterKeyEventHandler}
        />
        {/* <label htmlFor="todo0">{item.title}</label> */}
        <button onClick={onDeleteButtonClick}>Delete</button>
    </div>
  )
}
