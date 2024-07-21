import React, { Fragment, useState } from 'react'






const InputTodo = () => {

    const [description,setDescription] = useState("");

    const onsubmit = async (event)=>{
        event.preventDefault();

        try {
            const body = {description};
            const response = await fetch("http://localhost:3000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            console.log(response);
            window.location = "/"; // once the input is taken then it will refresh and set the location as 3000/
        } catch (error) {
            console.log(error.message);
            
        }
    }




  return (
    <Fragment>
       <h1 className='text-center mt-5'>PERN Todo List</h1>
       <form className='d-flex mt-5' onSubmit={onsubmit}>
            <input type='text' className='form-control' 
            value={description} 
            onChange={e=>setDescription(e.target.value)}/>
            <button className='btn btn-success'>Add</button>
       </form>
    </Fragment>
  )
}

export default InputTodo;
