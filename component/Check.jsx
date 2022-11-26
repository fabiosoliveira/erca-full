import React from 'react'
import ConvertLabel from '../util/ConvertLabel'

export default function Check(props) {

    return(
        <div className={props.class}>
            {props.value === 'true' ? (
                <input className="form-check-input" type="checkbox" checked name={props.name} 
                    id={`check${props.name}`} onChange={props.setValor} />
            ):(
                <input className="form-check-input" type="checkbox" name={props.name} 
                    id={`check${props.name}`} onChange={props.setValor} />
            )}
            
            <label className="form-check-label" htmlFor={`check${props.name}`}>
                {ConvertLabel(props)+'?'}
            </label>
        </div>
    )

}