import css from '../../Styles/Login.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Login() {
  return (
    <>
        <main className={css.container}>
            <div className={css.head}>
            <Link href="/perfil"> <Image src="/perfil.png" alt="foto perfil" width={150} height={150}/> </Link>
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
                        <button type="submit" className={css.btnEntrar}>< Link href="/perfil"  className={css.linkLoginToPerfil}>Entrar</Link></button>
                        </div>
                        
                        <div className={css.pLinks}>
                        <p className={css.primeiroLink}> <Link href="/recuperacaoSenha">Esqueci minha senha</Link> </p>
                        <p className={css.cadastre}> <Link href="/cadastroPessoa">Cadastre-se</Link> </p>
                        </div>

                </form>
                
            </div>
            
        </main>

        <footer className={css.footer}>

            <Image src="/portoSeguro.png" alt="logo porto seguro" width={450} height={150}/>
        </footer>

    </>
  )
}