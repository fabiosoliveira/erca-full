import React from 'react'
import ConvertLabel from '../util/ConvertLabel'

export default function Select(props) {

    return(
        <div className={props.class}>
            <label htmlFor={`input${props.name}`}>{ConvertLabel(props)}</label>
            <select className="form-control" id={`select${props.name}`} value={props.value} 
                name={props.name} onChange={props.setValor}>
                {props.opcoes.map((element, indice) => (
                    props.value === element ? (
                        <option key={indice} selected value={element}>{element}</option>
                    ):(
                        <option key={indice} value={element}>{element}</option>
                    )
                ))}
            </select>
        </div>
    )
}