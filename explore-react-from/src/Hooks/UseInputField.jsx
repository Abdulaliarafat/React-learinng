import { useState } from "react"

const useInputField=(defaultValue)=>{
    const [fieldValue,setFieldValue]=useState(defaultValue);
    const handleFieldOnChange=(e)=>{
        console.log(e.target.value)
        setFieldValue(e.target.value)
    }
    return [fieldValue,handleFieldOnChange]
}
export  default useInputField;  