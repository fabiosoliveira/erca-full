import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'

export default function Logout() {
  const { data: session } = useSession({ required: true });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <pre>{JSON.stringify(session)}</pre>
      <h1>Welcome, {session?.user.email}</h1>
      <div style={{margin: '12px'}}>
        <img src={session?.user.image} alt="" style={{ borderRadius: "50px" }} />
      </div>
      <button onClick={() => signOut({ redirect: true })}>Sair</button>
    </div>
  );
}
