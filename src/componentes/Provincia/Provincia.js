import React,{Fragment,useEffect,useState} from 'react'
import Axios from '../../config/Axios';
import{Link} from 'react-router-dom';
import Card from './Card';
import Loader from './Loader';


function Provincia (){
    const [trabajadores,cargarTrabajadoresP] =  useState(null);
    const[loader,setLoader] = useState(false);
    //consultamos query
    const consultarProvincia = async() =>{
        setLoader(true);
        const trabajadores  = await Axios.get('trabajadores/provincia');
        cargarTrabajadoresP(trabajadores.data);
        setLoader(false);
    }
    useEffect(() => {
        consultarProvincia();
    }, [])

    return(
        <Fragment>
              <div className="container">
                <div className="mini-card">
                {loader && <Loader />}
                {trabajadores &&  trabajadores.map(trabajadores=>(
                        <Card 
                            key={trabajadores._id}
                            trabajadores={trabajadores}
                        />
                    ))}
                </div>
                <Link to={{pathname:"http://api.whatsapp.com/send?phone=51961475546"}} className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></Link>
            </div>
        </Fragment>
    )
} 
export default Provincia;