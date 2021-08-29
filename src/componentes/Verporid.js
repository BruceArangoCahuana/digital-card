import React,{Fragment,useEffect,useState} from 'react'

import Axios from '../config/Axios';
import {Link} from 'react-router-dom';
function Verporid(props){
    const{idPersonal}=props.match.params;
    const [trabajadoresId,cargartrabajadoresId] =  useState([]);

    
    useEffect(() => {
        const traerporId = async()=>{
            const trabajadores = await Axios.get(`/trabajadores/departamento/${idPersonal}`);
                cargartrabajadoresId(trabajadores.data);
        }
        traerporId();
    }, [idPersonal])

    return(
        <Fragment>
           <div className="container">
                <div className="card">
                    <div className="card-header">
                        <img src={trabajadoresId.imagen} alt="" />
                    </div>
                    
                    
                    <div className="card-body-dos">
                        <ul className="red-social">
                            <li>
                                <Link to={{pathname:`https://wa.me/51${trabajadoresId.celular}?text=Hola%20${trabajadoresId.nombre}%20me%20gustaría%20saber%20màs%20sobre%20el%20producto%20`}} 
                                target="_blank">
                                    <div className="whatsapps">
                                        <i className="fab fa-whatsapp icon"></i><p> Escribreme por Whatsapp</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname:"https://www.facebook.com/BarsandPeru/"}} target="_blank">
                                    <div className="facebook">
                                        <i className="fab fa-facebook-f icon"></i><p> Escribreme por Facebook</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname:"https://www.instagram.com/barsand.peru/"}} target="_blank">
                                    <div className="instagram">
                                        <i className="fab fa-instagram icon"></i><p> Mira nuestro productos</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname:"https://barsand.com.pe/"}} target="_blank">
                                    <div className="ubicacion">
                                     <i className="fas fa-map-marker-alt icon"></i><p> Visita nuestra web</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="card-footer">
                        <div className="card-footer-contenido">
                            <div className="texto">
                                <h2>BARSAND</h2>
                                <p>innovando <span>nutricion</span>,mejorando <span>vidas.</span></p>
                            </div>
                            <div className="QR">
                                <img src="https://i.imgur.com/UPWg7Ln.png"alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={{pathname:"http://api.whatsapp.com/send?phone=51961475546"}} className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></Link>
        </div>
        </Fragment>
    )
}
export default Verporid;