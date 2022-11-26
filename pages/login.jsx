import {useSession, signIn, signOut} from 'next-auth/react'

export default function Login(){
    const {data: session} = useSession()

    if (session){
        return (
            <>
            <h1>Welcome, {session.user.email}</h1>
            <img src={session.user.image} alt="" style={{borderRadius: '50px'}}/>
            <button onClick={()=> signOut()}>Sign out</button>
            </>
        )
    }
    
    return (
        <>
        <h1>You are not signed in.</h1>
        <button onClick={()=> signIn()}>Sign in</button>
        </>
    )
}