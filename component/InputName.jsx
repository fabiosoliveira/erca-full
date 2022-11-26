import React from 'react'
import ConvertLabel from '../util/ConvertLabel'

export default function InputName(props) {

    function handleChange(event) {
        event.target.value = event.target.value.toUpperCase()
        props.setValor(event)
    }
   
    return(
        <div className={props.class}>
            <label htmlFor={`input${props.name}`}>{ConvertLabel(props)}</label>
            <input type={props.type} 
                className="form-control" 
                id={`input${props.name}`} 
                value={props.value || ''} 
                name={props.name} 
                onChange={handleChange} />
        </div>
    )
}