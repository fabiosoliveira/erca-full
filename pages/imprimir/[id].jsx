import styles from "../../styles/Imprimir.module.css";
import React, { useCallback, useEffect, useState } from "react";

import jorje from "../../img/jorje_amado.png";
import pmj from "../../img/erca_header.jpg";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Lista() {
  const [aluno, setAluno] = useState({});

  const { query: params } = useRouter();

  const componentDidMount = useCallback(async () => {
    let url = `/api/alunos/${params.id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setAluno(data);
    } catch (error) {
      console.log(error);
    }
  }, [params.id]);

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  function calculaIdade(data_nascimento) {
    let nascimento = new Date(data_nascimento);
    let hoje = new Date();
    return Math.floor(
      Math.ceil(
        Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24)
      ) / 365.25
    );
  }

  function header() {
    return (
      <div>
        <div className="text-center">
          <Image
            className="opacity-50"
            src={pmj}
            alt=""
            height={200}
            width={800}
            style={{ opacity: 0.6 }}
          />
          <h5 style={{ fontStyle: "italic" }}>
            ESCOLA MUNICIPAL REUNIDAS CASTRO ALVES
          </h5>
          <h6 style={{ fontStyle: "italic" }}>
            e-mail: erca2018@outlook.pt - Contato: 75 988040742
          </h6>
        </div>
        <h1 className={"text-center mt-5 " + styles.h1}>
          FICHA DE MATRICULA - {new Date().getFullYear()}
        </h1>
      </div>
    );
  }

  // function footer(){
  //     return(
  //         <div className='assinatura text-center'>
  //             <p>{aluno.nome}</p>
  //         </div>
  //     )
  // }

  function tabelaSerie() {
    let ano = new Date().getFullYear();

    return (
      // <table className="tbSerie">
      <table className={styles.tbSerie}>
        <thead>
          <tr>
            <th className={styles.tbSerie_th_td}>ANO</th>
            <th className={styles.tbSerie_th_td}>TURMA</th>
            <th className={styles.tbSerie_th_td}>TURNO</th>
            <th className={styles.tbSerie_th_td}>ASSINATURA DO RESPONSÁVEL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
          <tr>
            <td className={styles.tbSerie_th_td}>{ano++}</td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
            <td className={styles.tbSerie_th_td}></td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <div className="container">
      {header()}
      {/* <div className="media imprimir"> */}
      <div className={"media " + styles.imprimir}>
        {/* <img
          className="align-self-start mr-3"
          src={`/fotos/${params.id}.jpg`}
          //height="144" width="176"
          alt="Foto"
        /> */}
        {/* <Image
          className="align-self-start mr-3"
          src={`/fotos/${params.id}.jpg`}
          //height="144" width="176"
          alt="Foto"
        /> */}
        <div className="media-body">
          <h3 className={"mt-0 " + styles.h3}>Dados do aluno</h3>
          <div className="container">
            <div className={styles.row}>
              <div className="col-md-6">
                <b>NOME:</b> {aluno.nome}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>D. NASCIMENTO:</b> {aluno.data_nascimento}
              </div>
              <div className="col-md">
                <b>IDADE:</b> {calculaIdade(aluno.data_nascimento)}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>SEXO:</b> {aluno.sexo}
              </div>
              <div className="col-md">
                <b>COR:</b> {aluno.cor}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>ENDEREÇO:</b> {aluno.endereço}
              </div>
              <div className="col-md">
                <b>BAIRRO:</b> {aluno.bairro}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>CEP:</b> {aluno.CEP}
              </div>
              <div className="col-md">
                <b>MUNICÍPIO:</b> {aluno.cidade}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>CPF:</b> {aluno.número_CPF}
              </div>
              <div className="col-md">
                <b>RG:</b> {aluno.número_RG}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>D. EXPEDIÇÃO:</b> {aluno.data_de_expedição}
              </div>
              <div className="col-md">
                <b>ÓRGÃO EMISSOR:</b> {aluno.órgão_emissor}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>CONTATO:</b> {aluno.contato}
              </div>
              <div className="col-md">
                <b>CARTÃO SUS:</b> {aluno.documento_SUS}
              </div>
            </div>
            {/* <div className={styles.row}>
                            <div className="col-md">
                                <b>CERTIDÃO NASCIMENTO:</b> {aluno.número_certidão_de_nascimento}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className="col-md">
                                <b>TERMO:</b> {aluno.termo}
                            </div>
                            <div className="col-md">
                                <b>FOLHA:</b> {aluno.folha}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className="col-md">
                                <b>LIVRO:</b> {aluno.livro}
                            </div>
                            <div className="col-md">
                                <b>D. EMISSÃO:</b> {aluno.data_de_emissão}
                            </div>
                        </div> */}
            <div className={styles.row}>
              <div className="col-md">
                <b>PAI:</b> {aluno.nome_do_pai}
              </div>
              <div className="col-md">
                <b>RG/CPF:</b> {aluno.RG_CPF_do_pai}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>MÃE:</b> {aluno.nome_da_mãe}
              </div>
              <div className="col-md">
                <b>RG/CPF:</b> {aluno.RG_CPF_da_mãe}
              </div>
            </div>
            {/* <div className={styles.row}>
                            <div className="col-md">
                                <b>TURNO:</b> {aluno.turno}
                            </div>
                            <div className="col-md">
                                <b>TURMA:</b> {aluno.tipo === 'EIXO'? 
                                                `EIXO ${aluno.serie} ${aluno.turma}`:
                                                `${aluno.serie}ª SÉRIE ${aluno.turma}`}
                            </div>
                        </div> */}

            <div className={styles.row}>
              <div className="col-md">
                <b>UTILIZA TRANSPORTE ESCOLAR:</b>
                {aluno.transporte_escolar ? "SIM" : "NÃO"}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>ALGUMA NECESSIDADE ESPECIAL?:</b>
                {aluno.necessidade_especial
                  ? aluno.necessidade_especial
                  : "NÃO"}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>FAZ TRATAMENTO ESPECIALIZADO?:</b>
                {aluno.tratamento_especializado
                  ? aluno.tratamento_especializado
                  : "NÃO"}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>TEM ALGUM TIPO DE ALERGIA?:</b>
                {aluno.tem_algum_tipo_de_alergia
                  ? aluno.tem_algum_tipo_de_alergia
                  : "NÃO"}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>UTILIZA ALGUM REMÉDIO CONTÍNUO?:</b>
                {aluno.utiliza_algum_remedio_continuo
                  ? aluno.utiliza_algum_remedio_continuo
                  : "NÃO"}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">
                <b>
                  EM CASO DE PASSAR MAL NA ESCOLA, QUAL PROCEDIMENTO A SER
                  TOMADO?:
                </b>
                <br /> {aluno.procedimento_escolar}
              </div>
            </div>
            <div className={styles.row}>
              <div className="col-md">{tabelaSerie()}</div>
            </div>
          </div>
        </div>
      </div>
      {/* {this.footer()} */}
    </div>
  );
}

// export interface Aluno {
//   _id: string;
//   nome: string;
//   data_nascimento: string;
//   cor: string;
//   sexo: string;
//   endereço: string;
//   número: string;
//   bairro: string;
//   CEP: string;
//   cidade: string;
//   contato: string;
//   documento_SUS: string;
//   número_CPF: string;
//   número_RG: string;
//   data_de_expedição: string;
//   órgão_emissor: string;
//   nome_do_pai: string;
//   nome_da_mãe: string;
//   RG_CPF_da_mãe: string;
//   RG_CPF_do_pai: string;
//   transporte_escolar: string;
//   tratamento_especializado: string;
//   tem_algum_tipo_de_alergia: string;
//   turno: string;
//   necessidade_especial?: string;
//   utiliza_algum_remedio_continuo: string;
//   tipo: string;
//   ano: string;
//   procedimento_escolar: string;
// }
