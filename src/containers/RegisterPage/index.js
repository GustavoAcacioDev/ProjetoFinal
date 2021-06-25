import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signupAtendente } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [especializacao, setEspec] = useState('');
  const [telefone, setTel] = useState('');
  const [horarioInicio, setInicio] = useState('');
  const [horarioTermino, setTermino] = useState('');
  const [cep, setCep] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {

    e.preventDefault();

    const user = {
      firstName, lastName, email, cpf, cep, especializacao, telefone, horarioInicio, horarioTermino, password
    }

    dispatch(signupAtendente(user))
  }


  if (auth.authenticated) {
    return <Redirect to={`/`} />
  }

  return (
    <div className="paiCadastro" >


      <div className="containerCadastro" >

        <Form onSubmit={registerUser}>


          <h1 className="tituloCadastro" >Cadastre um Atendente</h1>

          <div className="conjuntoCadastro" style={{ marginTop: '100px' }}>

            <div style={{ marginRight: '20px' }}>

              <Form.Group controlId="name">
                <input type="text" className="nomeCadastro" placeholder="Nome" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </Form.Group>
            </div>

            <div>

              <Form.Group controlId="secondName">
                <input type="text" className="emailCadastro" placeholder="Sobrenome" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </Form.Group>
            </div>

          </div>

          <div className="conjuntoCadastro">
            <div style={{ marginRight: '20px' }}>

              <Form.Group controlId="formBasicEmail">
                <input type="email" className="emailCadastro" placeholder="Email" name='email' x required />
              </Form.Group>
            </div>

            <div>

              <Form.Group controlId="password">
                <input type="password" className="senhaCadastro" placeholder="Senha" name='senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
            </div>


          </div>

          <div className="conjuntoCadastro">
            <div style={{ marginRight: '20px' }}>

              <Form.Group controlId="cpf">
                <input className="cpfCadastro" type="text" placeholder="CPF" name='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} required />
              </Form.Group>
            </div>



            <div >

              <Form.Group controlId="phone">
                <input type="tel" className="telefoneCadastro" placeholder="Telefone" name='telefone' value={telefone} onChange={(e) => setTel(e.target.value)} required />
              </Form.Group>
            </div>
          </div>

          <div className="conjuntoCadastro" style={{ display: 'flex', justifyContent: 'center', }}>
            <div style={{ marginRight: '20px' }}>

              <Form.Group controlId="cep">
                <input className="cpfCadastro" type="text" placeholder="CEP" name='cpf' value={cep} onChange={(e) => setCep(e.target.value)} required />
              </Form.Group>
            </div>

            <Form.Group controlId="especificacao">
              <input type="text" className="especificacaoCadastro" placeholder="Especificação" value={especializacao} onChange={(e) => setEspec(e.target.value)} name='especializacao' required />
            </Form.Group>
          </div>

          <div className="conjuntoCadastro">
            <div style={{ marginRight: '20px' }}>
              <Form.Group controlId="time">
                <input className="horaInicioCadastro" type="text" placeholder="Informe o horário de início" name='horarioInicio' value={horarioInicio} onChange={(e) => setInicio(e.target.value)} required />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="cpf">
                <input className="horaTerminoCadastro" type="text" placeholder="Informe o horário de Término" name='horarioTermino' value={horarioTermino} onChange={(e) => setTermino(e.target.value)} required />
              </Form.Group>
            </div>
          </div>



          <div className="botaoCadastro" >
            <button className='botao-cadastrarCadastro' type='submit'>Cadastrar</button>
          </div>

        </Form>
      </div>
    </div>
  )

}

export default RegisterPage