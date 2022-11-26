/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import React from "react";
// import { GoogleLogout, useGoogleLogout } from "react-google-login";
import {useSession, signIn, signOut} from 'next-auth/react'
// import { useAuth } from "../contexts/auth";

export default function Logout() {
  // const { signOut, user } = useAuth();
  const {data: session} = useSession()

  const user = session?.user

  // const { signOut: signOutGoogle } = useGoogleLogout({
  //   clientId:
  //     "776176420-nfdb1qg5bv1d3tpo0ikhqqt87bqbmejl.apps.googleusercontent.com",
  // });

  // function logOut() {
  //   signOutGoogle();
  //   // signOut();
  // }

  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle"
        href="#"
        // role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={user?.image}
          alt=""
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            marginRight: "10px",
            marginLeft: "20px",
          }}
        />
      </a>

      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuLink"
      >
        <img
          className="dropdown-item rounded-circle"
          src={user?.image}
          alt=""
        />
        <h1 className="dropdown-header" style={{ fontWeight: "bold" }}>
          {user?.name}
        </h1>
        <h6 className="dropdown-header">{user?.email}</h6>
        <div className="dropdown-divider"></div>
        <div className="dropdown-item" style={{display: 'flex',justifyContent: 'center'}}>
              <a href="#" onClick={() => signOut()}>
              Sair
              </a>
            </div>
        {/* <GoogleLogout
          className="dropdown-item"
          clientId="776176420-nfdb1qg5bv1d3tpo0ikhqqt87bqbmejl.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={() => signOut()}
        ></GoogleLogout> */}
      </div>
    </div>
  );
}

//   function Logout() {
//   return (
//     <GoogleLogout
//       clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//       buttonText="Logout"
//       //   onLogoutSuccess={() => window.location.reload()}
//       onLogoutSuccess={() => console.log("logout")}
//     ></GoogleLogout>
//   );
// }
