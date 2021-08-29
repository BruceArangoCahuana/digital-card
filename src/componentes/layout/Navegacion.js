import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
function  Navegacion(){
    return(
        <Fragment>
            <ul>
                    <li>
                        <Link  to={'/trabajadores/lima'}>
                            <p>Lima</p> 
                            <i className="fas fa-user-tie icon"></i>
                        </Link>
                    </li>
                    
                    <li>
                        <Link  to={'/trabajadores/provincia'}>
                                <p>Provincia</p>
                                <i className="fas fa-user-tag icon"></i>
                        </Link>
                    </li>
                    
                </ul>
                <div className="footer">
                    <ul>
                        <li className="icon-w">
                            <Link to={{pathname:"http://api.whatsapp.com/send?phone=51961475546"}} target="_blank">
                                <i className="fab fa-whatsapp"></i>
                            </Link> 
                        </li>
                        <li className="icon-f">
                            <Link to={{pathname:"https://www.facebook.com/BarsandPeru/"}} target="_blank">
                                <i className="fab fa-facebook-f icon-f"></i>
                            </Link>
                        </li>
                        <li className="icon-i">
                            <Link to={{pathname:"https://www.instagram.com/barsand.peru/"}} target="_blank">
                                <i className="fab fa-instagram"></i> 
                            </Link> 
                        </li>
                    </ul>
                </div>
        </Fragment>
    )
}
export default Navegacion;