import styles from '../styles/Nav.module.css'
import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import Logout from "../main/Logout";
import Link from "next/link";
// import Logout from "./Logout";
// import Image from 'next/image';
import {useSession, signIn, signOut} from 'next-auth/react'
import { useRouter } from 'next/router';

export default function Nav() {
  const [search, setSearch] = useState("");
  const {data: session} = useSession({required: true})
  const router = useRouter()

  const user = session?.user

  function handleChange(event) {
    event.target.value = event.target.value.toUpperCase();
    // setSearch({ [event.target.name]: event.target.value })
    setSearch(event.target.value);
  }

  return (
    
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark "+styles.navbar}>
        <Link className="navbar-brand" href="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/cadastro">
                Cadastrar
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/listar">
                Listar
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              onChange={handleChange}
              name="search"
              placeholder="Buscar aluno"
            />
            <Link
              className="btn btn-outline-success my-2 my-sm-0"
              href={`/listar/${search}`}
            >
              Buscar
            </Link>
          </form>
          <img
          src={user?.image}
          alt=""
          onClick={() => router.push("/logout")}
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
            marginLeft: "20px",
          }}
        />
        </div>
      </nav>
  );
}

