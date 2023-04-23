import React from 'react'
import './style.css'

function FormInput(props) {
    return (
    <div className='form__input'>
        <label htmlFor={props.name}>{props.name}</label>
        <input type="text" name={props.name} placeholder={props.name} onChange={props.handleChange} />
    </div>
  )
}

export default FormInput