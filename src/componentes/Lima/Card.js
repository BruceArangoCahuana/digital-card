import React,{Fragment} from 'react'
//react-route-dom
import {Link} from 'react-router-dom'; 

import Swal from 'sweetalert2'
import './Modal.css'

function Card({trabajadores}){
  
     const {_id,nombre,imagen,ocupacion,zona,lugar,sitiouno,sitiodos,sitiotres,sitiocuatro,sitiocinco,
        sitioseis,sitiosiete,sitioocho} = trabajadores;
        function alerta(){
            new Swal({
              title: `<h3 class="zona__alerta">${zona} <i class="fas fa-globe-americas"></i></h3>`,
              html:`<ul class="modal__swalert">
                        <li>
                            <p>${sitiouno}</p>
                            <p>${sitiodos}</p>
                            <p>${sitiotres}</p>
                            <p>${sitiocuatro}</p>
                            <p>${sitiocinco}</p>
                            <p>${sitioseis}</p>
                            <p>${sitiosiete}</p>
                            <p>${sitioocho}</p>
                        </li>
                    <ul>`,
              imageWidth: 260,
              imageHeight: 250,
              padding: 6,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'cerrar',
              animation: true,
            });
          }

    return(
        <Fragment>
            <div className="card-perfiles">
                <img src={imagen} alt="" />
                <div className="texto-mini">
                            <h1>{nombre}</h1>
                            <h3>{ocupacion} <i className="fas fa-user-tie"></i></h3>
                            <div className="skill">
                                <p className="lugar">{lugar} <i className="fas fa-map-marker-alt"></i></p>
                                <p className="zona" onClick={alerta}>Ver zona</p>
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