import React,{Fragment,useEffect,useState} from 'react'
import Axios from '../../config/Axios';
import{Link} from 'react-router-dom';
import Card from './Card';
import Loader from './Loader';

function Lima(){
    const[trabajadores,Cargartrabajores] = useState(null);
    const[loader,setLoader] = useState(false);
    //query de consulta
    const consultaQuery = async()=>{
        setLoader(true);
        const gerente = await Axios.get('trabajadores/lima');
        Cargartrabajores(gerente.data);
        setLoader(false);
    }
    useEffect(()=>{
        consultaQuery();
    },[]);

    return(
        <Fragment>
            <div className="container">
                <div className="mini-card">
                {loader && <Loader />}
                {trabajadores && trabajadores.map(trabajadores=>(
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
export default Lima;