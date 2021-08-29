import React,{Fragment} from 'react'
//react-route-dom
import {Link} from 'react-router-dom'; 

function Card({trabajadores}){
    const {_id,nombre,imagen,ocupacion,zona,lugar} = trabajadores;
    
    return(
        <Fragment>
            <div className="card-perfiles">
                <img src={imagen} alt="" />
                <div className="texto-mini">
                            <h1>{nombre}</h1>
                            <h3>{ocupacion} <i className="fas fa-user-tie"></i></h3>
                            <div className="skill">
                                <p className="lugar">{lugar} <i className="fas fa-map-marker-alt"></i></p>
                                <p className="zona">{zona}</p>
                            </div>
                            <Link to={`/trabajadores/departamento/${_id}`}>
                                <p> ver perfil</p>
                                <i className="fas fa-eye"></i>
                            </Link>
                        </div>  
            </div>
            
        </Fragment>
    )
}
export default Card;