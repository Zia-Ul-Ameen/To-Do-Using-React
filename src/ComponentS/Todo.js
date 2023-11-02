import React,{useState} from 'react'

const Todo = ({todo , todoArray, setTodoArray, onEdit, onChecked, setCheck, check}) => {

   

        const deleted = (el) => {
            const afterDelete = todoArray.filter(todo => {
                return (todo.id !== el)
            })
            setTodoArray(afterDelete);
        }

            const onCheck =(e)=>{
                // setCheck(!check);
                // onChecked(check, todo.id)
                setCheck(e.target.checked);
                onChecked(e.target.checked, todo.id)
            }

  return (
    // <div className='marginTop'>
    <div className='newTodoWrapper'>
        <div className='wrapCheckInput'>
        <input type='checkbox' className='checkBox' onChange={onCheck} checked={todo.checked}></input>
        
        <p className={`${todo.checked ? 'lineThrough' : ''} `}>{todo.task}</p>
        </div>

        <div>
        <button className='editBtn' onClick={(e)=>{onEdit(todo.id)}}><i class="fa-solid fa-pencil"></i></button>

        <button className='deleteBtn' onClick={(e)=>{deleted(todo.id)}}><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    // </div>
  )
}

export default Todo
