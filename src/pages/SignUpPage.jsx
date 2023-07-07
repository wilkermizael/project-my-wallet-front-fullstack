import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {
  
  const [nome,setNome] = useState('')
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  const navigate = useNavigate()
  function enviarCadastro(event){
    event.preventDefault();
   
      let dadosCadastro = {
        nome:nome,
        senha:senha,
        email:email
      }
      if(senha === confirmSenha){
        
        axios.post("http://localhost:5000/sign-up", dadosCadastro)
        .then(() => navigate('/')) 
        .catch((error) => alert(error.response.data))

      }else{
        alert('As senhas nao sao iguais') 
      }
  }



  return (
    <SingUpContainer>
      <form onSubmit={enviarCadastro}>
        
        <MyWalletLogo />
        <input placeholder="Nome" type="text" value={nome} onChange={e =>setNome( e.target.value)}/>
        <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input placeholder="Senha" type="password" autocomplete="new-password" value={senha} onChange={e => setSenha(e.target.value)}/>
        <input placeholder="Confirme a senha" type="password" autocomplete="new-password" value={confirmSenha} onChange={e => setConfirmSenha(e.target.value)}/>
        <button>Cadastrar</button>
  
      </form>

      <Link to={'/'}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
