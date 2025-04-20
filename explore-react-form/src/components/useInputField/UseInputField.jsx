import React, { useState } from 'react';

const UseInputField = (defaultValue) => {
   const [fieldValue,setFieldValue]=useState(defaultValue)
  const handleFieldOnChange=(e)=>{
    setFieldValue(e.target.value)
  }
   return [fieldValue,handleFieldOnChange];
};

export default UseInputField;