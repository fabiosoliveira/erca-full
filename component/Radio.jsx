import React from 'react'
import ConvertLabel from '../util/ConvertLabel'

export default function Radio(props) {

    return(
        <div className={props.class}>
            <label>{ConvertLabel(props)}</label>
            <div>
                {props.opcoes.map((element, indice) => (
                <div key={indice} className="form-check form-check-inline">
                    {props.value === element ? (
                        <input className="form-check-input" type="radio" checked={true} name={props.name} 
                            id={element.toLowerCase()} value={element} onChange={props.setValor} />
                    ) : (
                        <input className="form-check-input" type="radio" checked={false} name={props.name} 
                            id={element.toLowerCase()} value={element} onChange={props.setValor} />    
                    )}
                    <label className="form-check-label" htmlFor={element.toLowerCase()}>{element.toLowerCase()}</label>
                </div>
                ))}
            </div>
        </div>
    )
}