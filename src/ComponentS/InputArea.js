import React, { useState } from 'react'

const InputArea = ({todoArray, setTodoArray, setGetInput , getInput, btnEdit, setBtnEdit, afterEdit,editedId}) => {


    
    let uId = "id" + Math.random().toString(16).slice(2)

    const addInputToTodoArray = () => {
        setTodoArray([...todoArray, {task : getInput, id : uId, checked: false}]);
        setGetInput('');
    }
    const useEnter = (e) =>{
      if(e.key=='Enter'){
        addInputToTodoArray()
      }
    }

  return (
    <div className='InputArea'>
        <input 
        className='input' 
        placeholder='write your task'
        onChange={(e)=>{setGetInput(e.target.value)}}
        value={getInput} onKeyDown={useEnter}/>

        {btnEdit ? <button className="editButton" onClick={()=>afterEdit(getInput)}>+</button> :
        <button className="button" onClick={addInputToTodoArray}>+</button>
        }
    </div>
  )
}

export default InputArea
