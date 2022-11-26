import React, { useState } from "react";
import FormUser from "../component/FormUser";

export default function Cadastro() {
  const [aluno, setAluno] = useState({});

  async function handleClick(event) {
    event.preventDefault();

    if (!aluno.nome) return alert("Campo nome obrigatório");

    // const options = {
    //     method: 'POST',
    //     body: new URLSearchParams(aluno)
    // }

    const body = new URLSearchParams(aluno);

    const resp = await fetch(`/api/alunos`, {
        body,
        method: 'POST'
    });

    const alunoReceived = await resp.json();
    console.log(alunoReceived);
    alert(`Nome: ${alunoReceived.nome}`);

    setAluno({});
  }

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    let newAluno = { ...aluno };
    newAluno[name] = value;
    setAluno(newAluno);
  }

  return (
    <section className="container">
      <FormUser handleChange={handleChange} aluno={aluno} click={handleClick} />
    </section>
  );
}
