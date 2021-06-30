import React, { useState, useEffect } from 'react';
import { } from 'react-bootstrap';
import firebase, { auth, firestore } from 'firebase';

import { Link } from 'react-router-dom';
import { MdPerson } from 'react-icons/md'
import './index.css';
import Menu from '../../components/Menu/index';
import { Clock, Chat, Pencil } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';

import { useModalContext } from '../../modal.context';


import { useAuthState } from 'react-firebase-hooks/auth';
import Modal from '../../components/Modal/Modal';
import Modal2 from '../../components/Modal/Modal2';


const PerfilAtendente = (props) => {

    const dispatch = useDispatch();
    const [chatStarted, setChatStarted] = useState(false);
    const [chatUser, setChatUser] = useState('');
    const [cpf, setCpf] = useState('');
    const [message, setMessage] = useState('');
    const [userUid, setUserUid] = useState(null);
    let unsubscribe;

    const auth = () => {
        return (
            firebase.auth()
        )
    }

    const { openModal } = useModalContext();
    const testModal = () => openModal({ message: `Ola ${user.firstName} ${user.lastName}` });


    /*const [user] = useAuthState(auth);*/

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;




    return (

        <div className="ContainerPrincipalAtendente" >

            <Menu />

            <div className="ContainerAtendente">
                <div className="TituloAtendente">
                    <p className='tituloAtendente'>Perfil Atendente</p>
                </div>
                <hr style={{ width: "100%" }}></hr>

                <div className="Container2Atendente">
                    <div className="centroAtendente">

                        {/* div que engloba as infomações do  perfil do atendente */}
                        <div style={{ height: "20vh", width: "80vw", backgroundColor: "white", borderRadius: "22px", marginTop: "50px", display: 'flex', justifyContent: 'center' }}>

                            <div style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', borderBottom: 'solid 1px rgba(0, 0, 0, 0.486)' }} >
                                    <div>
                                        <MdPerson size={50} />
                                    </div>
                                    <div style={{ display: 'flex', marginLeft: '20px' }}>
                                        <Clock size={30} />

                                        <div style={{ marginLeft: '20px', fontSize: '20px', display: 'flex', marginTop: '2px' }}>
                                            <p >| Horario de Inicio: </p> <p style={{ color: 'red' }}> {user.horarioInicio} </p><p style={{ marginLeft: '10px' }} >| Horario de Término: </p><p style={{ color: 'red' }}> {user.horarioTermino} </p>
                                        </div>
                                        <div style={{ display: 'flex', marginLeft: '70px', fontSize: '20px', marginTop: '2px' }}>
                                            <p>Atendimentos em Andamento  </p> <p style={{ marginLeft: '15px' }}>| Atendimentos até o Momento</p>
                                        </div>

                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '90%', marginTop: '25px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <h2 style={{ fontFamily: 'Times New Roman' }}>
                                            Nome:
                                        </h2>
                                        <p style={{ marginLeft: '5px', fontSize: '20px', marginTop: '5px' }}>
                                            {user.firstName} {user.lastName}
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                        <h2 style={{ fontFamily: 'Times New Roman' }}>
                                            Email:
                                        </h2>
                                        <p style={{ marginLeft: '5px', fontSize: '20px' }}>
                                            {user.email}

                                        </p>

                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <button style={{ width: '250px', borderRadius: '6px', fontSize: '20px', border: 'none', boxShadow: '0px 0px 2px 1px #FF8C00', background: 'transparent', backgroundColor: '#FF8C00', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', border: 'none', cursor: 'pointer' }} onClick={testModal} type="primary">
                                            <Modal2 />
                                            Editar Informações
                                            <Pencil style={{ marginLeft: '15px' }} />
                                        </button>

                                        <button style={{ width: '250px', borderRadius: '6px', fontSize: '20px', border: 'none', boxShadow: '0px 0px 2px 1px #FF8C00', background: 'transparent', backgroundColor: '#FF8C00', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', border: 'none', cursor: 'pointer', marginLeft: '20px'}} type="primary">

                                            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/redefinir"}>
                                                Editar Senha
                                            </Link>
                                        </button>
                                        
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>

                            {/*<div className="">
                                {/*<p style={{ marginLeft: "6%" }}>Nome: {user.firstName} {user.lastName}</p>
                            </div>}
                                <p style={{ marginLeft: "6%" }}>Email: { user.email} </p>*/}

                        </div>

                        {/* div que engloba as chamadas realizadas pelo atendente */}


                        <div style={{ height: "48vh", width: "80vw", backgroundColor: "white", borderRadius: "22px", marginTop: '100px', display: 'flex', justifyContent: 'center' }}>

                            <div style={{ width: '80%', height: '100%' }}>
                                <div style={{ width: '100%', height: '25%', display: 'flex', alignItems: 'center' }}>

                                    <Chat style={{ marginTop: "1%" }} className='all' color="black" filter="invert(.4)" size={40} />
                                    <p style={{ fontSize: "20px", marginLeft: "1%", marginTop: '10px' }}>Chamados</p>
                                </div>

                                <div style={{ width: '100%', height: '10%', backgroundColor: '#F4F4F4', display: 'flex', }}>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                        <h3 style={{ marginLeft: '30px' }} >Titulo</h3>
                                    </div>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <h3>Cliente</h3>
                                        <h3 style={{ marginRight: '20px' }}>Data</h3>
                                    </div>
                                </div>


                                <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: '20px' }}>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                        <h3 style={{ marginLeft: '30px' }} >Problemas com conta</h3>
                                    </div>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <p>{user.firstName}</p>
                                        <p>20/01/2021</p>
                                    </div>
                                </div>
                                <hr />

                                <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: '20px' }}>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                        <h3 style={{ marginLeft: '30px' }} >Problemas com conta</h3>
                                    </div>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <p>{user.firstName}</p>
                                        <p>20/01/2021</p>
                                    </div>
                                </div>
                                <hr />

                                <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: '20px' }}>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                        <h3 style={{ marginLeft: '30px' }} >Problemas com conta</h3>
                                    </div>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <p>{user.firstName}</p>
                                        <p>20/01/2021</p>
                                    </div>
                                </div>
                                <hr />

                                <div style={{ width: '100%', height: '10%', display: 'flex', marginTop: '20px' }}>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                        <h3 style={{ marginLeft: '30px' }} >Problemas com conta</h3>
                                    </div>
                                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <p>{user.firstName}</p>
                                        <p>20/01/2021</p>
                                    </div>
                                </div>
                                <hr />
                            </div>











                        </div>



                    </div>
                </div>

            </div>



        </div>


    );
}


export default PerfilAtendente