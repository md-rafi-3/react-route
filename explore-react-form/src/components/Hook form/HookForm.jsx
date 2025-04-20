import React from 'react';
import UseInputField from '../useInputField/UseInputField';

const HookForm = () => {
    const [name,nameOnChange]=UseInputField('')
    const [email,emailOnChange]=UseInputField('')
    const [password,passwordOnChange]=UseInputField('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("submit",name,email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" onChange={nameOnChange} defaultValue={name} id="" />
              <br />
              <input type="email" onChange={emailOnChange}  name="" id="" /><br />
              <input type="password" onChange={passwordOnChange} />
                  <br />
              <input type="submit" value="submit" />
            </form>

            
        </div>
    );
};

export default HookForm;