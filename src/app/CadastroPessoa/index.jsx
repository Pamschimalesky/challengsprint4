import './cadastroPessoa.css';
import { Link } from 'react-router-dom'
import camera from '../img/camera.png'
import perfil from '../img/perfil.png'
import sair from '../img/sair.png'

export default function CadastroPessoa() {
    return (
        <main >
            <header>
                <h1>Cadastro Proprietário</h1>
                    <h2>Cadastre-se</h2>
            </header>

            <main>
                <section className='container'>


                    <div className="divInput" >
                        <input type="text" id="Name" className="input"  placeholder="Digite seu Nome Completo" />
                    </div>

                    <div className="divInput" >
                        <input type="text" id="cpf" className="input"  placeholder="Digite seu CPF" />
                    </div>

                    <div className="divInput" >
                        <input type="text" id="rg" className="input"  placeholder="Digite seu RG" />
                    </div>

                    <div className="divInput" >
                        <input type="text" id="endereco" className="input"  placeholder="Digite seu Endereço" />
                    </div>

                    <div className="divInput" >
                        <input type="email" id="email" className="input"  placeholder="Digite seu Email" />
                    </div>

                    <div className="divInput" >
                        <input type="password" id="senha" className="input"  placeholder="Digite sua Senha" />
                    </div>

                    <div className="divInput" >
                        <input type="email" id="conf_email" className="input"  placeholder="Confirme seu Email" />
                    </div>

                    <div className="divInput" >
                        <input type="password" id="conf_senha" className="input"  placeholder="Confirme sua Senha" />
                    </div>


                    
                    
                </section>
            </main>
            
            <footer className="footer">
                <Link to="/" className='linkFooter'> <img src={sair} alt="Sair"/> Sair</Link>
            </footer>

        </main>
    )
}
