import { ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./Nav";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const { status } = useSession({ required: true });

  return (
    <>
      <div className="app" style={{ height: "80vh" }}>
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
}
