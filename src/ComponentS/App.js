import React, { useState } from 'react'
import '../App.css'
import Completed from './Completed'
import InputArea from './InputArea'
import Todo from './Todo'

const App = () => {

  const [todoArray, setTodoArray] = useState([]);
  const [getInput, setGetInput] = useState('');
  const [btnEdit, getBtnEdit] = useState(false);
  const [editedId, setEditedId] = useState('');
  const [check, setCheck] = useState(false);

  const onEdit = (id) => {
    getBtnEdit(true);
    const showInput = todoArray.find(todo => todo.id === id);
    setGetInput(showInput.task);
    setEditedId(showInput.id);
  }


    const onChecked = (checkedValue, id) => {
  
      const updatedValue = todoArray.map((item) =>{
        if(item.id === id){
          return ({...item, checked: checkedValue});
        }
        return item;
      })
      setTodoArray(updatedValue);
    }

  const afterEdit = (getInput) =>{
    getBtnEdit(false);
    const updatedTodo = todoArray.map((item)=>{
      if(item.id === editedId){
        return ({...item, task: getInput});
      }
      return item;
    })
    setTodoArray(updatedTodo);
    setGetInput('');
  }


  return (
    <div className='container'>
        <div className='todoContainer'>
            <div className='todoWrapper'>
                <Completed todoArray={todoArray}  check={check}/>

                <InputArea todoArray={todoArray} setTodoArray={setTodoArray} setGetInput={setGetInput}
                getInput={getInput}
                btnEdit={btnEdit}
                getBtnEdit={getBtnEdit}
                afterEdit={afterEdit}
                editedId={editedId}
                />

                {todoArray.map(todo => (
                 <Todo 
                 onEdit={onEdit}
                 todo={todo} 
                 todoArray={todoArray}
                 setTodoArray={setTodoArray}
                 onChecked={onChecked}
                 check={check}
                 setCheck={setCheck}
                />))}
            </div>
        </div>

    </div>
  )
}

export default App
