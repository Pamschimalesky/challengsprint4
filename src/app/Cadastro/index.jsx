import './cadastro.css'
import { Link } from 'react-router-dom'
import imgcamera from '../img/camera.png';
import imgsair from '../img/sair.png';

export default function Cadastro(){


    return (
        <>
            <header>
                <h1>Cadastro da bike</h1>
                
            </header>

            <main>

                <section className="cadastro">
                        <div className="box">
                            <p>Tire uma foto da bicicleta</p>
                            <button className="btnCamera"><img src={imgcamera} alt="" /></button>
                        </div>
                        <div className="box">
                            <p>Tire uma foto do guidão</p>
                            <button className="btnCamera"><img src={imgcamera} alt="" /></button>
                            </div>
                        <div className="box">
                            <p>Tire uma foto do banco</p>
                            <button className="btnCamera"><img src={imgcamera} alt="" /></button>
                            </div>
                        <div className="box">
                            <p>Tire uma foto das rodas</p>
                            <button className="btnCamera"><img src={imgcamera} alt="" /></button>
                        </div>
                        <div className="box">
                        <button type = "submit" className="btnEnviar">Enviar</button>
                        </div>
                </section>
            </main>
            <footer className="footer">
                <img src={imgsair} alt="Sair"/>
                <Link to="/Perfil" className='linkFooter'>Sair </Link>
            </footer>
        </>
        )
    }