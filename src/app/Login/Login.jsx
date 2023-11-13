import css from './Login.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Login() {
  return (
    <>
        <main className={css.container}>
            <div className={css.head}>
            <Link href="/Perfil"> <Image src="/perfil.png" alt="foto perfil"/> </Link>
            </div>
        
            <div>
                <form action="#">
                    <div className={css.divInput}>
                        <input type="text"  className={css.input}  name="txtUserName" id="idUserName" placeholder="UserName" />
                    </div>
                    <div className={css.divInput}>
                        <input type="password"  className={css.input}  name="txtpassword" id="idpassword" placeholder="Senha" />
                        </div>
        
                        <div className={css.btn}>
                        <button type="submit" className={css.btnEntrar}>< Link href="/Perfil"  className={css.linkLoginToPerfil}>Entrar</Link></button>
                        </div>
                        
                        <div className={css.pLinks}>
                        <p className={css.primeiroLink}> <Link href="/RecuperacaoSenha">Esqueci minha senha</Link> </p>
                        <p className={css.cadastre}> <Link href="/CadastroPessoa">Cadastre-se</Link> </p>
                        </div>

                </form>
                
            </div>
            
        </main>

        <footer className={css.footer}>

            <Image src="/portoSeguro.png" alt="logo porto seguro"/>
        </footer>

    </>
  )
}