import React,{Fragment,useEffect,useState} from 'react'
import Axios from '../../config/Axios';
import{Link} from 'react-router-dom';
import Card from './Card';

function Provincia (){
    const [trabajadores,cargarTrabajadoresP] =  useState([]);
    //consultamos query
    const consultarProvincia = async() =>{
        const trabajadores  = await Axios.get('trabajadores/provincia');
        cargarTrabajadoresP(trabajadores.data);
    }
    useEffect(() => {
        consultarProvincia();
    }, [])

    return(
        <Fragment>
              <div className="container">
                <div className="mini-card">
                {trabajadores.map(trabajadores=>(
                        <Card 
                            key={trabajadores._id}
                            trabajadores={trabajadores}
                        />
                    ))}
                </div>
                <Link to={{pathname:"http://api.whatsapp.com/send?phone=51961475546"}} className="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></Link>
            </div>
        </Fragment>
    )
} 
export default Provincia;