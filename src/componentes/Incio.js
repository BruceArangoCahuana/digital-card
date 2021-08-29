import React,{Fragment} from 'react'
import logo from '../asset/img-static/Barsand-Logo.png';
import Navegacion from '../componentes/layout/Navegacion';
function Inicio(){
    return(
        <Fragment>
             <div className="container">
                <div className="card-inicio">
                    <div className="card-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="enlaces">
                       <Navegacion />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Inicio;