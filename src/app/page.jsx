import css from '../Styles/global.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Page() {
    return (
        <>
            <header>
            
                <div className = {css.logoPorto}>
                <Image src="/portoSeguro.png" alt="Logo da porto" width={350} height={50}/>
                </div>
            </header>

            <main>
                <section>
                <div className={css.titulo}>
                    <h1>Bem vindo a Porto Seguro bike!</h1>
                </div>

                <div className={css.img}>
                    <Image src="/bicicleta.png" alt="Bicicleta" width={150} height={150}/>
                </div>

                <div className={css.texto}>
                    <p>Uma solução completa que vai além de um simples seguro para bicicleta, proporcionando proteção e uma ampla gama de serviços para que você possa se aventurar sem preocupações.</p>
                </div>

                <div className={css.btn}>
                  <button type="submit" className={css.btnCotacao}> <Link href="/cadastro" className={css.linkCotacao}>Tire as fotos e faça uma cotação</Link> </button>
                </div>

                </section>

            </main>
            
            <footer className={css.footer}>

                <div className={css.link}>
                <p> <Link href="/login">Ja sou cliente</Link> </p>
                </div>
                
            </footer>

        </>
    )
}
