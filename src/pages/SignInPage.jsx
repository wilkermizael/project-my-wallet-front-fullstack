import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"
import { TokenContext } from "../Contex/TokenContext"
import { useContext } from "react"

export default function SignInPage() {
  
  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')
  const {token,setToken} = useContext(TokenContext)
  const navigate = useNavigate()
 function login(event){
    event.preventDefault()
    const dadosLogin ={
      email:emailLogin,
      senha:senhaLogin
    }
      
      axios.post("http://localhost:5000/sign-in", dadosLogin)
      .then((resposta) => {
        setToken(resposta.data.token)
        setUsuario(resposta.data.nome)
        //navigate('/home')
      }) 
      .catch((error) => alert(error.response.data))
    
   

}
  
  
  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" value={emailLogin} onChange={e =>setEmailLogin(e.target.value)}/>
        <input placeholder="Senha" required type="password" autoComplete="new-password" value={senhaLogin} onChange={e => setSenhaLogin(e.target.value)}/>
        <button>Entrar</button>
      </form>

      <Link to={'/cadastro'}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
