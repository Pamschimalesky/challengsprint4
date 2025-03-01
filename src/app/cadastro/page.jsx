import css from '../../Styles/cadastro.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Cadastro(){


    return (
        <>
            <header className={css.header}>
                <h1>Cadastro da bike</h1>
            </header>

            <main>

                <section className={css.cadastro}>
                        <div className={css.box}>
                            <p>Tire uma foto da bicicleta</p>
                            <button className={css.btnCamera}><Image src="/camera.png" alt="" width={150} height={150}/></button>
                        </div>
                        <div className={css.box}>
                            <p>Tire uma foto do guidão</p>
                            <button className={css.btnCamera}><Image src="/camera.png" alt="" width={150} height={150}/></button>
                            </div>
                        <div className={css.box}>
                            <p>Tire uma foto do banco</p>
                            <button className={css.btnCamera}><Image src="/camera.png" alt="" width={150} height={150}/></button>
                            </div>
                        <div className={css.box}>
                            <p>Tire uma foto das rodas</p>
                            <button className={css.btnCamera}><Image src="/camera.png" alt="" width={150} height={150}/></button>
                        </div>
                        <div className={css.box}>
                        <button type = "submit" className={css.btnEnviar}>Enviar</button>
                        </div>
                </section>
            </main>
            <footer className={css.footer}>
                <Image src="/sair.png" alt="Sair" width={150} height={150}/>
                <Link href="/" className={css.linkFooter}>Sair </Link>
            </footer>
        </>
        )
    }