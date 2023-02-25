//lading page


import Link from "next/link";

export default function InitialPage() {
  return (
    <>
      <div>
        <h1>Bem vindo a nossa página</h1>
        <Link href='/customer'>customer page</Link>
      </div>
      
      <div>
          <button>Sign in</button>
          <button>Login</button>
      </div>
    </>
    
  )
}