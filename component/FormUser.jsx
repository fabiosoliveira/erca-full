import styles from '../styles/FormUser.module.css'
import React from 'react'
import InputName from '../component/InputName'
import Select from '../component/Select'
import Radio from '../component/Radio'
import Check from '../component/Check'

export default function FormUser(props) {

    function GerarInputName (type, classe, nome) {
        return <InputName type={type} class={`form-group ${classe}`} name={nome} 
            setValor={props.handleChange} value={props.aluno[nome]} />
    }

    return (
        <form id="myform" onLoad={props.componentDidMount}>
            <div className="form-row">
                {GerarInputName('text', 'col-md-4', "nome")}
                {GerarInputName('date', 'col-md-2', "data_nascimento")}
                
                <Select class='form-group col-md-3' name='cor' setValor={props.handleChange} 
                        value={props.aluno['cor']} opcoes={['', 'BRANCO', 'NEGRO', 'PARDO']} />
                
                <Radio class='form-group col-md-3' name='sexo' setValor={props.handleChange} 
                        value={props.aluno['sexo']} opcoes={['MASCULINO', 'FEMININO']} />
            </div>


            <div className="form-row">
                {GerarInputName('text', 'col-md-6', "endereço")}
                {GerarInputName('number', 'col-md-3', "número")}
                {GerarInputName('text', 'col-md-3', "bairro")}
            </div>

            <div className="form-row">
                {GerarInputName('text', 'col-md-3', "CEP")}
                {GerarInputName('text', 'col-md-3', "cidade")}
                {GerarInputName('tel', 'col-md-3', "contato")}
                {GerarInputName('text', 'col-md-3', "documento_SUS")}
            </div>

            <div className="form-row">
                {GerarInputName('text', 'col-md-3', "número_CPF")}
                {GerarInputName('text', 'col-md-3', "número_RG")}
                {GerarInputName('date', 'col-md-3', "data_de_expedição")}
                {GerarInputName('text', 'col-md-3', "órgão_emissor")}
            </div>

            {/* <div className="form-row">
                {GerarInputName('text', 'col-md-3', "número_certidão_de_nascimento")}
                {GerarInputName('text', 'col-md-3', "termo")}
                {GerarInputName('text', 'col-md-2', "folha")}
                {GerarInputName('text', 'col-md-2', "livro")}
                {GerarInputName('date', 'col-md-2', "data_de_emissão")}
            </div> */}

            <div className="form-row">
                {GerarInputName('text', 'col-md-3', "nome_do_pai")}
                {GerarInputName('text', 'col-md-3', "RG_CPF_do_pai")}
                {GerarInputName('text', 'col-md-3', "nome_da_mãe")}
                {GerarInputName('text', 'col-md-3', "RG_CPF_da_mãe")}
            </div>

            <div className="form-row">
                <Check class="form-check form-check-inline col" name="transporte_escolar" 
                    setValor={props.handleChange} value={props.aluno['transporte_escolar']} />
            </div>
            <div className="form-row">
                {GerarInputName('text', 'col-md-3', "necessidade_especial")}
                {GerarInputName('text', 'col-md-3', "tratamento_especializado")}
                {GerarInputName('text', 'col-md-3', "tem_algum_tipo_de_alergia")}
                {GerarInputName('text', 'col-md-3', "utiliza_algum_remedio_continuo")}
            </div>
            <div className="form-row">
                <Select class='form-group col-md-3' name='turno' setValor={props.handleChange} 
                        value={props.aluno['turno']} opcoes={['', 'MATUTINO', 'VERPERTINO', 'NOTURNO']} />
                <Select class='form-group col-md-3' name='tipo' setValor={props.handleChange} 
                        value={props.aluno['tipo']} opcoes={['', 'EIXO', 'ANO']} />
                {GerarInputName('number', 'col-md-3', "ano")}
                <Select class='form-group col-md-3' name='turma' setValor={props.handleChange} 
                        value={props.aluno['turma']} opcoes={['', 'A', 'B', 'C', 'D']} />
            </div>

            <Radio name='procedimento_escolar' setValor={props.handleChange} 
                value={props.aluno['procedimento_escolar']} 
                opcoes={['Ligar para o responsável e aguardar na unidade escolar', 
                        'Levar ao hospital e solicitar acompanhamento do responsável']} />
            
            <button type="submit" onClick={props.click} className={"btn btn-primary "+ styles.btn_form}>Enviar</button>
        </form>
        )
}
