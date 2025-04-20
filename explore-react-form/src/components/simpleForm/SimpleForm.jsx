import React from 'react';

const SimpleForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' name='name' /><br />
                <input type="email" placeholder='Your Email' name='email' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;