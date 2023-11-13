import './cadastroPessoa.css';
import Link from 'next/link';
import Image from 'next/image';

export default function CadastroPessoa() {
    return (
        <main >
            <header>
                <h1>Cadastro Proprietário</h1>
                    <h2>Cadastre-se</h2>
            </header>

            <main>
                <section className={css.container}>


                    <div className={css.divInput} >
                        <input type="text" id="Name" className={css.input}  placeholder="Digite seu Nome Completo" />
                    </div>

                    <div className={css.divInput} >
                        <input type="text" id="cpf" className={css.input}  placeholder="Digite seu CPF" />
                    </div>

                    <div className={css.divInput} >
                        <input type="text" id="rg" className={css.input}  placeholder="Digite seu RG" />
                    </div>

                    <div className={css.divInput} >
                        <input type="text" id="endereco" className={css.input}  placeholder="Digite seu Endereço" />
                    </div>

                    <div className={css.divInput} >
                        <input type="email" id="email" className={css.input}  placeholder="Digite seu Email" />
                    </div>

                    <div className={css.divInput} >
                        <input type="password" id="senha" className={css.input}  placeholder="Digite sua Senha" />
                    </div>

                    <div className={css.divInput} >
                        <input type="email" id="conf_email" className={css.input}  placeholder="Confirme seu Email" />
                    </div>

                    <div className={css.divInput} >
                        <input type="password" id="conf_senha" className={css.input}  placeholder="Confirme sua Senha" />
                    </div>


                    
                    
                </section>
            </main>
            
            <footer className={css.footer}>
                <Link href="/" className={css.linkFooter}> <Image src="/sair.png" alt="Sair"/> Sair</Link>
            </footer>

        </main>
    )
}
