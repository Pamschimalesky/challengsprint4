import './RecuperacaoSenha.css';
import { Link } from 'react-router-dom'
import perfil from '../../assets/img/perfil.png'
import sair from '../img/sair.png'
import logo from '../img/portoSeguro.png'


export default function RecuperacaoSenha() {
  return (
    <>

    <main className="container">

        <div className="head">
            <img src={logo} alt="Logo da porto"/>
            <Link to="/Perfil"> <img src={perfil} alt="foto perfil"/> </Link>
        </div>

        <div>
          <h1>Recuperação de Senha</h1>
            <form action="#">
                <div className="divInput">
                    <input type="text"  className="input"  name="txtRecSenha" id="idRecSenha" placeholder="Recuperação de Senha" />
                </div>
                  <div className="btn">
                    <button type="submit" className="btnReenviar">Reenviar Senha</button>
                  </div>
            </form>
        </div>

    </main>

    <footer className="footer">
        <Link to="/Login" className='linkFooter'><img src={sair} alt="Sair"/>Sair  </Link>
    </footer>
    </>
  )}