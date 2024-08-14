import React, { useState } from 'react'

export default function AddTodo({addItem}) {
    const [todoItem, setTodoItem] = useState({
        title: '',
    }); // 사용자 입력을 저장할 객체 (id, title, done에 대한 정보를 저장해야하므로 객체)

    const onButtonClick = () => {
        addItem(todoItem); // add 함수 사용.
        setTodoItem({
            title: '', // 상태 초기화.
        })
    }

    // 과제 1) add enter키로 실행.
    const enterhandle = (e) => {
        if(e.key === 'Enter'){
            addItem(todoItem);
            setTodoItem({
                title: '', // 상태 초기화.
            })
        }
    }

  return (
    <div className='AddTodo'>
        <input 
            type="text" 
            placeholder='Add your new Todo'
            value={todoItem.title}
            onChange={(e) => setTodoItem({title: e.target.value})}
            onKeyDown={enterhandle}
        />
        <button onClick={onButtonClick}>Add</button>
    </div>
  )
}
