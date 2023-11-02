import React, { useState, useEffect } from 'react'

const Completed = ({todoArray, check}) => {
    let todoLength = todoArray.length;

    const [completedCount, setCompletedCount] = useState(0);
    useEffect(() => {
        // setCompletedCount(0)
        const checkFiltered = todoArray.filter(todo => todo.checked === true);
        setCompletedCount(checkFiltered.length)
            // let onTrue = (0);
            // let onFasle = (0);
            // if(element.checked == true){
            //     setCompletedCount += 1;
            // } else if (element.checked == false){
            //     setCompletedCount -= 1;
            // }
            // console.log((completedCount))
            // if (element.checked == false) {
                // completedCount += 1;
                // setCompletedCount(completedCount + 1)

            // );
            console.log(checkFiltered)
    
    }, [todoArray])

   


  return (
        <div className='completed'>
        <p>Todo Done</p>
        <div>{`${completedCount}/${todoLength}`}</div>
        </div>
  )
}

export default Completed
