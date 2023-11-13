import css from './RecuperacaoSenha.css';
import Link from 'next/link';
import Image from 'next/image';


export default function RecuperacaoSenha() {
  return (
    <>

    <main className={css.container}>

        <div className={css.head}>
            <Image src="/portoSeguro.png" alt="Logo da porto"/>
            <Link href="/Perfil"> <Image src="/perfil.png" alt="foto perfil"/> </Link>
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
        <Link href="/Login" className={css.link.footer}><Image src="/sair.png" alt="Sair"/>Sair  </Link>
    </footer>
    </>
  )}