import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signupAtendente } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BootstrapFill } from 'react-bootstrap-icons';
import './style.css';
import { Divider } from '@material-ui/core';

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
    // <div className="pai2" >


    //   <div className="container2" >

    //     <Form onSubmit={registerUser}>


    //       <h1 className="titulo2" >Cadastre um Atendente</h1>

    //       <div className="conjunto1" style={{ marginTop: '100px' }}>

    //         <div style={{ marginRight: '20px' }}>

    //           <Form.Group controlId="name">
    //             <input type="text" className="nome" placeholder="Nome" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
    //           </Form.Group>
    //         </div>

    //         <div>

    //           <Form.Group controlId="secondName">
    //             <input type="text" className="email2" placeholder="Sobrenome" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
    //           </Form.Group>
    //         </div>

    //       </div>

    //       <div className="conjunto2">
    //         <div style={{ marginRight: '20px' }}>

    //           <Form.Group controlId="formBasicEmail">
    //             <input type="email" className="email2" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
    //           </Form.Group>
    //         </div>

    //         <div>

    //           <Form.Group controlId="password">
    //             <input type="password" className="senha2" placeholder="Senha" name='senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
    //           </Form.Group>
    //         </div>


    //       </div>

    //       <div className="conjunto3">
    //         <div style={{ marginRight: '20px' }}>

    //           <Form.Group controlId="cpf">
    //             <input className="cpf" type="text" placeholder="CPF" name='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} required />
    //           </Form.Group>
    //         </div>



    //         <div >

    //           <Form.Group controlId="phone">
    //             <input type="tel" className="telefone" placeholder="Telefone" name='telefone' value={telefone} onChange={(e) => setTel(e.target.value)} required />
    //           </Form.Group>
    //         </div>
    //       </div>

    //       <div className="conjunto5" style={{ display: 'flex', justifyContent: 'center', }}>
    //         <div style={{ marginRight: '20px' }}>

    //           <Form.Group controlId="cep">
    //             <input className="cpf" type="text" placeholder="CEP" name='cpf' value={cep} onChange={(e) => setCep(e.target.value)} required />
    //           </Form.Group>
    //         </div>

    //         <Form.Group controlId="especificacao">
    //           <input type="text" className="especificacao" placeholder="Especificação" value={especializacao} onChange={(e) => setEspec(e.target.value)} name='especializacao' required />
    //         </Form.Group>
    //       </div>

    //       <div className="conjunto4">
    //         <div style={{ marginRight: '20px' }}>
    //           <Form.Group controlId="time">
    //             <input className="horaInicio" type="text" placeholder="Informe o horário de início" name='horarioInicio' value={horarioInicio} onChange={(e) => setInicio(e.target.value)} required />
    //           </Form.Group>
    //         </div>
    //         <div>
    //           <Form.Group controlId="cpf">
    //             <input className="horaTermino" type="text" placeholder="Informe o horário de Término" name='horarioTermino' value={horarioTermino} onChange={(e) => setTermino(e.target.value)} required />
    //           </Form.Group>
    //         </div>
    //       </div>



    //       <div className="botao2" >
    //         <button className='botao-cadastrar' type='submit'>Cadastrar</button>
    //       </div>

    //     </Form>
    //   </div>
    // </div>


    <div className="TudoCadastro">


      <div className="FundoCadastro">
        <img src="https://blog.howeb.com.br/wp-content/uploads/2020/01/bra%C3%A7o-de-rob%C3%B4-que-representa-inteligencia-artificial-que-%C3%A9-uma-das-principais-Tend%C3%AAncias-do-marketing-digital-para-2020.jpg" style={{ width: "100%", height: "100%" }}></img>

      </div>

      <div className="paiCadastro">

        <Form onSubmit={registerUser} style={{ marginTop: "-2%" }}>
          <h1 className="tituloCadastro">Cadastro</h1>
          <BootstrapFill className="iconLogin" style={{ display: "flex", margin: "center", marginLeft: "43%" }} className='all' color="black" size={50} />

          <Form.Group controlId="name" className="formNomeCadastro" style={{ display: "flex", alignItems: "center" }}>
            <input type="text" className="nomeCadastro" placeholder="Nome" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="secondName" className="formSegundoCadastro" style={{ display: "flex", alignItems: "center" }}>
            <input type="text" className="nomeCadastro2" placeholder="Sobrenome" name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="formEmailCadastro" style={{ display: "flex", alignItems: "center" }}>
            <input type="email" className="emailCadastro" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="password" className="SenhaCadastro" >
            <input type="password" className="senhaCadastro" placeholder="Senha" name='senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="cpf" className="cpfCadastro">
            <input className="CPFCadastro" type="text" placeholder="CPF" name='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="phone" className="TelefoneCadastro">
            <input type="tel" className="telefoneCadastro" placeholder="Telefone" name='telefone' value={telefone} onChange={(e) => setTel(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="cep" className="CEPCadastro">
            <input className="cepCadastro" type="text" placeholder="CEP" name='cep' value={cep} onChange={(e) => setCep(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="especificacao" className="EspecificacaoCadastro">
            <input type="text" className="especificacaoCadastro" placeholder="Especificação" value={especializacao} onChange={(e) => setEspec(e.target.value)} name='especializacao' required />
          </Form.Group>

          <Form.Group controlId="time" className="HorarioICadastro">
            <input className="horaInicioC" type="text" placeholder="Informe o horário de início" name='horarioInicio' value={horarioInicio} onChange={(e) => setInicio(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="cpf" className="HorarioTCadastro">

            <input className="horaTerminoC" type="text" placeholder="Informe o horário de Término" name='horarioTermino' value={horarioTermino} onChange={(e) => setTermino(e.target.value)} required />
          </Form.Group>


          <div className="botao2" >
       <button className='botao-cadastrar' push="/login" type='submit'>Cadastrar</button>
    </div>


        </Form>


      </div>

    </div>
  )

}

export default RegisterPage