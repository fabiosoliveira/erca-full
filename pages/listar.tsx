/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

const LIMIT = 15;

export default function Listar() {
  const [state, setState] = useState({
    lista: [{} as Aluno],
    status: 0,
    pages: [] as number[],
    page: 1,
    totalPage: 0,
    excluir: "",
  });

  // const { query: params } = useRouter();

  const componentDidMount = useCallback(async () => {
    let query =
      "nome=1&data_nascimento=1&cor=1&sexo=1&contato=1&documento_SUS=1&tipo=1&serie=1&ano=1&turma=1";
    query += `&limit=${LIMIT}&page=${state.page}`;

    let url;
    url = `/api/alunos?${query}`;

    try {
      const response = await fetch(url);
      const json: Aluno[] = await response.json();

      const data = json.map((aluno) => {
        const { serie, ano, ...rest } = aluno;
        return {
          ...rest,
          serie: ano ? ano : serie,
        };
      });

      setState((state) => ({ ...state, lista: data }));
    } catch (error) {
      console.log(error);
    }

    url = `/api/alunos/quantidade`;

    const response = await fetch(url);
    const data = await response.json();
    const totalPage = Math.ceil(data.quantidade / LIMIT);

    let pages: number[] = [];

    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    setState((state) => ({ ...state, totalPage, pages }));
  }, [state.page]);

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  function changePage(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    page: number
  ) {
    if (page > state.totalPage || page < 1 || page === state.page) return;
    setState((state) => ({ ...state, page, status: 1 }));
    event.preventDefault();
  }

  function renderPagination() {
    return (
      <nav aria-label="paginação" className="fixed-bottom">
        <ul className="pagination pagination-sm justify-content-center">
          <li
            className={state.page <= 1 ? "page-item disabled" : "page-item"}
            onClick={(e) => changePage(e, state.page - 1)}
          >
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {state.pages.map((element) => (
            <li
              key={element}
              className={
                state.page === element ? "page-item active" : "page-item"
              }
              onClick={(e) => changePage(e, element)}
            >
              <a className="page-link" href="#">
                {element}
              </a>
            </li>
          ))}
          <li
            className={
              state.page >= state.totalPage ? "page-item disabled" : "page-item"
            }
            onClick={(e) => changePage(e, state.page + 1)}
          >
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  function excluir(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    // if (event.target.name === "salvar") {
    const name = (event.target as any).name;
    if (name === "salvar") {
      const param = state.excluir.split("/").pop();
      const URL_TO_FETCH = `/api/alunos/${param}`;

      fetch(URL_TO_FETCH, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((data) => {
          const lista = getUpdateList(data);
          setState((state) => ({ ...state, lista }));
        })
        .catch(function (err) {
          console.error(err);
        });
    }
    setState((state) => ({ ...state, excluir: "" }));
  }

  function getUpdateList(obj: any) {
    return state.lista.filter((u) => u._id !== obj.id);
  }

  function prepararParaExcluir(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const result = confirm("Tem certeza que deseja excluir?");

    if (!result) return;

    const href = (event.target as any).href;

    const param = href.split("/").pop();
    const URL_TO_FETCH = `/api/alunos/${param}`;

    fetch(URL_TO_FETCH, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((data) => {
        const lista = getUpdateList(data);
        setState((state) => ({ ...state, lista }));
      })
      .catch(function (err) {
        console.error(err);
      });
    // setState((state) => ({ ...state, excluir: (event.target as any).href }));
  }

  // if (params.search !== state.status){
  //     setState(state => ({...state, status: params.search}))
  //     // componentDidMount()
  // }

  return (
    <section className="container">
      {/* <ModalExcluir
        id="modalExcluir"
        titulo="Confirmar Exclusão"
        excluir={(e) => excluir(e)}
      >
        Este contato está prestes a ser excluido
      </ModalExcluir> */}

      <table className="table table-hover table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">D. Nasci.</th>
            <th scope="col">Cor</th>
            <th scope="col">Sexo</th>
            <th scope="col">Contato</th>
            <th scope="col">Documento SUS</th>
            <th scope="col">Turma</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {state.lista.map((element, index) => (
            <tr key={index}>
              <td>{element.nome}</td>
              <td>{element.data_nascimento}</td>
              <td>{element.cor}</td>
              <td>{element.sexo}</td>
              <td>{element.contato}</td>
              <td>{element.documento_SUS}</td>
              <td>
                {element.tipo === "EIXO"
                  ? `EIXO ${element.serie} ${element.turma}`
                  : `${element.serie}ª SÉRIE ${element.turma}`}
              </td>
              <td>
                <Link href={`/editar/${element._id}`}>edit.</Link>|
                <a
                  href={`/excluir/${element._id}`}
                  data-toggle="modal"
                  data-target="#modalExcluir"
                  onClick={(e) => prepararParaExcluir(e)}
                >
                  excluir
                </a>
                |<Link href={`/addfoto/${element._id}`}>foto</Link>|
                <Link href={`/imprimir/${element._id}`}>impr.</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPagination()}
    </section>
  );
}

interface Aluno {
  _id: string;
  nome: string;
  data_nascimento: string;
  cor: string;
  sexo: string;
  documento_SUS?: string;
  contato?: string;
  tipo: string;
  serie?: string;
  turma?: string;
  ano?: string;
}
