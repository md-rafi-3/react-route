import React, { useState } from 'react';

const ControledField = () => {
   const [password,setPassword]=useState('secrate')
   const [error,setError]=useState('')
    const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted")

    }
    const handlePaswordOnChange=(e)=>{
     console.log(e.target.value)
        setPassword(e.target.value)


     if(password.length<6){
        setError("password must be 6 caracters or longer")
     }
     else{
        setError('')
     }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" required defaultValue={password} id="" onChange={handlePaswordOnChange} /><br />
                <input type="password" name="password" required id=""  onChange={handlePaswordOnChange} defaultValue={password}/> <br />
                <input type="submit" value="Submit"  />
            </form>
            <p style={{color:"red"}}><small>{error}</small></p>
        </div>
    );
};

export default ControledField;