import './Perfil.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Perfil() {
    return (
        <>
            <header className={css.header}>
                <div className={css.conteudo}> 
                    <h1>Olá Alexandre!</h1>

                    <div className={css.labelStatus}>
                    <p>Status do seguro</p>
                    </div>

                    <div className={css.status}><h7 >Ativo</h7>  </div>
                </div>

                <div className={css.perfil}>
                    <Link href="/Perfil"> <Image src="/perfil.png" alt="foto perfil"/> </Link>
                </div>
            </header>

            <main>

                <section className={css.secao}>

                    <div className={css.titulo}>
                        <h1>Ajuda?</h1>
                    </div>

                    <div className={css.opcoes}>
                        <p>Dados Pessoais</p>
                    </div>
                    <div className={css.opcoes}>
                        <p>Detalhes do seguro</p>
                    </div>
                    <div className={css.opcoes}>
                        <p>Contrato</p>
                    </div>
                    <div className={css.opcaoFinal}>
                        <p>Termos de uso</p>
                    </div>

                </section>

            </main>

            <footer className={css.footer}>
                <Image src="/sair.png" alt="Sair"/>
                <Link href="/" className={css.linkFooter}>Sair </Link>
            </footer>
        </>
    )
}
  