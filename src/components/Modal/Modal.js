import React, { useState } from 'react';
import { Modal as ModalComponent } from 'antd';
import { useModalContext } from '../../modal.context';
import { EditarEmail } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const Modal = () => {
  const {
    modalState: { message, visible },
    closeModal,
  } = useModalContext();

  const [email, setEmail] = useState('');
  const dispatch = useDispatch();



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
      <div>
        <h2>Digite seu novo email: </h2>
        <Form style={{display: 'flex'}} onSubmit={AlterarEmail}>

          <Form.Group controlId="formBasicEmail">
            <input type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <div >
            <button type='submit'>Alterar</button>
          </div>
        </Form>
      </div>
    </ModalComponent>
  );
};

export default Modal;