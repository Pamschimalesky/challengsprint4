import css from '../../Styles/recuperacaoSenha.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function RecuperacaoSenha() {
  return (
    <>
    <main className={css.container}>

        <div className={css.head}>
            <Image src="/portoSeguro.png" alt="Logo da porto" width={350} height={80}/> 
            <Link href="/perfil"> <Image src="/perfil.png" alt="foto perfil" width={150} height={150}/> </Link>
        </div>

        <div> 
          <h1>Recuperação de Senha</h1> 
            <form action="#">
                <div className={css.divInput}> 
                    <input type="text"  className={css.input}  name="txtRecSenha" id="idRecSenha" placeholder="Recuperação de Senha" />
                </div>
                  <div className={css.btn}> 
                    <button type="submit" className={css.btnReenviar}>Reenviar Senha</button>
                  </div>
            </form>
        </div>

    </main>

    <footer className={css.footer}>
        <Link href="/login" className={css.linkFooter}><Image src="/sair.png" alt="Sair" width={150} height={150}/>Sair  </Link>
    </footer>
    </>
  )}