import React, { useState } from 'react'
import "./FormExample.css"

export default function FormExample() {
    const [formInput, setFormInput] = useState({
        textInput:'',
        numberInput:'',
        passwordInput:'',
        textareaInput:'',
        selectBoxInput:'',
        checkBoxInput:true,
        radioButtonInput :'',
        selectedDate:''
    })


    const onInputChange = (e)=>{
        const {name, value, checked, type} = e.target;
        console.log(name, value, checked, type)
        formInput[name] = type ==="checkbox"?checked : value;
        console.log(formInput);
        setFormInput({...formInput})
    }

    const [selectedFile, setSelectedFile] = useState(null)
    const handleFileChange = (e)=>{
        setSelectedFile(e.target.files[0])

    }

    const [showPassword, setShowPassword] = useState(false)


  return (
    <div >
      <h1>Form Example</h1>
      <div className='formContainer'>
        <label>
            Text Input :
            <input name='textInput' placeholder='Text Input' type='text' value={formInput.textInput} onChange={onInputChange} ></input>

        </label> 
        <label>
            Number Input :
            <input name='numberInput' placeholder='Number Input' type='number' value={formInput.numberInput} onChange={onInputChange} ></input>

        </label> 
        <label>
            Password Input :
            <input name='passwordInput' placeholder='Password Input' type={showPassword?"text":"password"} value={formInput.passwordInput} onChange={onInputChange} ></input>
            {showPassword ? <button onClick={()=>setShowPassword(false)}>Hide</button>: <button onClick={()=>setShowPassword(true)}>Show</button>}
        </label> 
        <label>
            Textarea Input :
            <input name='textareaInput' cols={20} rows={3} placeholder='Discription' type='text' value={formInput.textareaInput} onChange={onInputChange} ></input>

        </label> 
        <label>
            Select Box:
            <select value={formInput.selectBoxInput} name='selectBoxInput' onChange={onInputChange}>
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </label>
        <label>
            CheckBox Input:
            <input name='checkBoxInput' type='checkbox' checked={formInput.checkBoxInput} onChange={onInputChange}></input> I Agree

        </label>

        <label>
            Radio Input: 
            <input checked={formInput.radioButtonInput === "male"} name='radioButtonInput' type='radio' value="male" onChange={onInputChange}/> Male
            <input checked={formInput.radioButtonInput === "female"} name='radioButtonInput' type='radio' value="female" onChange={onInputChange}/> Female
        </label>
        <label>
            Date Input:
            <input type='date' name='selectedDate' value={formInput.selectedDate} onChange={onInputChange}></input>

        </label>

        <label>
            <p>File Input :</p>
            <input type='file' onChange={handleFileChange} multiple accept='.txt, .jpg'></input>
            <p>Selected File : {selectedFile?.name}</p>
        </label>


      </div>

    </div>
  )
}
