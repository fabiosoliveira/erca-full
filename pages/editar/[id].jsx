import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import FormUser from '../../component/FormUser'

export default function Editar() {
    const router = useRouter();
    const { query: params } = router

    // const { query: params } = useRouter();
    // const navigate = useNavigate();

    const [state, setState] = useState({ 
        aluno: {} ,
        alterado: {} ,
        id: params.id,
    })

    async function handleClick(event) {
        event.preventDefault()
        if (!(state.alterado.nome === undefined)) {
            if (!state.alterado.nome) 
                return alert("Campo nome obrigatório")    
        }
        
        let estaAlterado = false
        let aluno = Object.assign({}, state.alterado)
        let objeto = Object.assign(state.aluno, state.alterado)
        let array = Object.entries(objeto)
        array.forEach(([campo, valor]) => {
            if (valor === state.alterado[campo]) {
                aluno[campo] = valor
                estaAlterado = true
            }
        })

        if (!estaAlterado) return
        delete aluno._id

        // const options = {
        //     method: 'PUT',
        //     body: new URLSearchParams(aluno)
        // }
        const body = new URLSearchParams(aluno)

        const resp = await fetch(`/api/alunos/${state.id}`, {
            body,
            method: 'PUT'
        })
        const alunoReceived = await resp.json()

        console.log(alunoReceived)
        alert("registr alterado com sucesso!")
        // this.props.history.push("/listar")
        router.push("/listar")
    }

    const componentDidMount = useCallback(async() =>{
        if(!state.id) return
        try {
            let url = `/api/alunos/${state.id}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setState(state => ({...state, aluno: data }))
        } catch (error) {
            console.log(error)
        }
    },[state.id])

    useEffect(() => {
        componentDidMount()
    } , [componentDidMount])

    function handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let aluno = {...state.aluno}
        aluno[name] = value
        // setState(aluno)

        let alterado = {...state.alterado}
        alterado[name] = value
        // setState(alterado)

        setState(state => ({...state, aluno, alterado}))
      }

      return (
          <section className='container'>
              <FormUser 
                  handleChange={handleChange} 
                  carregar={componentDidMount} 
                  aluno={state.aluno} 
                  click={handleClick} />
          </section>
          )
}
