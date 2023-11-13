import './Login.css';
import { Link } from 'react-router-dom'
import perfil from '../img/perfil.png'
import portoSeguro from '../img/portoSeguro.png'


export default function Login() {
  return (
    <>
        <main className="container">
            <div className="head">
            <Link to="/Perfil"> <img src={perfil} alt="foto perfil"/> </Link>
            </div>
        
            <div>
                <form action="#">
                    <div className="divInput">
                        <input type="text"  className="input"  name="txtUserName" id="idUserName" placeholder="UserName" />
                    </div>
                    <div className="divInput">
                        <input type="password"  className="input"  name="txtpassword" id="idpassword" placeholder="Senha" />
                        </div>
        
                        <div className="btn">
                        <button type="submit" className="btnEntrar">< Link to = "/Perfil"  className='linkLoginToPerfil'>Entrar</Link></button>
                        </div>
                        
                        <div className="pLinks">
                        <p className="primeiroLink"> <Link to="/RecuperacaoSenha">Esqueci minha senha</Link> </p>
                        <p className="cadastre"> <Link to="/CadastroPessoa">Cadastre-se</Link> </p>
                        </div>

                </form>
                
            </div>
            
        </main>

        <footer className="footer">

            <img src={portoSeguro} alt="logo porto seguro"/>
        </footer>

    </>
  )
}