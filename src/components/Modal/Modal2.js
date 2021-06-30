import React, { useState } from 'react';
import { Modal as ModalComponent } from 'antd';
import { useModalContext } from '../../modal.context';
import { EditarEmail, EditarNome } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

import './modal.css'

const Modal2 = () => {
  const {
    modalState: { message, visible },
    closeModal,
  } = useModalContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);



  const AlterarNome = (e) => {
    e.preventDefault();



    const user = { firstName, lastName }

    dispatch(EditarNome(user));

  }

  const AlterarEmail = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }



    dispatch(EditarEmail(email));

  }

  return (
    <ModalComponent
      onCancel={closeModal}
      onOk={closeModal}
      visible={visible}
    >
      <h2>{message}</h2>
      <div className="ContainerModal1">
        <Form className="FormModal1" onSubmit={AlterarNome}>
          <div className="divModal1" >
            <h2 >Digite seu nome: </h2>
            <Form.Group controlId="formBasicEmail">
              <input className="inputModal" className="emailCadastro" type="text" placeholder="Nome" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </Form.Group>
            <h2>Digite seu sobrenome: </h2>
            <Form.Group controlId="formBasicEmail">
              <input className="inputModal" className="emailCadastro" type="text" placeholder="Sobrenome" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </Form.Group>
            <div className="BotaoModalForm" style={{marginTop: '-10px'}} >
              <button onClick={closeModal} type='submit'>Alterar</button>
            </div>
          </div>
        </Form>

        <Form className="FormModal2" onSubmit={AlterarEmail}>
          <div className="divModal1" >
            <h2 >Digite seu novo email: </h2>

            <Form.Group controlId="formBasicEmail">
              <input className="emailCadastro" type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <div className="BotaoModalForm">
              <button type='submit' onClick={closeModal} >Alterar</button>
            </div>
          </div>
        </Form>
      </div>
    </ModalComponent>
  );
};

export default Modal2;