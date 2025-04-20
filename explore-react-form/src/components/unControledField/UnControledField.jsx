import React, { useRef } from 'react';

const UnControledField = () => {
    const emailRef=useRef('')
    const passRef=useRef('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const email=emailRef.current.value
        const pass=passRef.current.value
        console.log(email,pass)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="" id="" ref={emailRef} /><br />
                <input type="password" name="" id="" ref={passRef} /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControledField;