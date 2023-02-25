import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div>
        <h1>Página de Cadastro</h1>
        <Link href='/'>Home</Link>
      </div>

      <div>
        <form action="/send-data-here" method="post">
          <label htmlFor="first">Primeiro nome:</label>
          <input type="text" id="first" name="first" />
          <label htmlFor="last">Sobrenome:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">Enviar</button>
        </form>
      </div>

    </>
    
  )
}