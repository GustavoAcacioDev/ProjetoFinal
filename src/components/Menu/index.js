import React, { } from 'react';
import { } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import { ArrowBarLeft, ChatRight, Person } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions';
import { BsPerson} from "react-icons/bs";
import { BiMessageDetail, BiLogOut } from "react-icons/bi";

const Menu = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();


    return (


        <div className="container-atendente">
            <aside>
                <div className="container-brq">
                    <h1>B</h1>
                    <h1>R</h1>
                    <h1>Q</h1>
                </div>
                <div className="container-icons">
                    <a href="/atendente"><BsPerson className="person-icon" /></a>
                    <a href="/"><BiMessageDetail className="conversation-icon" /> </a>
                </div>
                <div className="container-logout">



                    {
                        auth.authenticated ?

                            <Link class="tooltip" to={'#'} onClick={() => {
                                dispatch(logout(auth.uid))
                            }}><ArrowBarLeft color=" #000" size={35} fill="currentColor" /></Link>
                            : null
                    }


                </div>
            </aside>

        </div>


    )


}


export default Menu;







