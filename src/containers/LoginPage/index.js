import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { signin, isLoggedInUser, signinUser } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../LoginPage/login.css';
import { BootstrapFill, Envelope } from 'react-bootstrap-icons';

/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);




  const userLogin = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));

  }


  if (auth.authenticated) {
    return <Redirect to={`/`} />
  }



  return (
    //     <div className="TudoLogin" style={{}} >

    //     <div className="pai" style={{width:"30vw", height:"20vh", marginTop:"9vh", }}>
    //       <Form className="formulario" onSubmit={userLogin} >
    //         <h1 className="tituloLogin" style={{marginLeft:"35%"}}>Login</h1>

    //         <div className="caixa">
    //           <div classname="boxCampo" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
    //             <h2 className="emailH2">Email</h2>
    //             <input className="email" type="email" placeholder="Informe seu email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
    //           </div>

    //           <div classname="boxCampo" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
    //             <h2 className="senhaH2">Senha</h2>
    //             <input className="senha" type="password" placeholder="Informe sua senha" name='senha' value={password}
    //               onChange={(e) => setPassword(e.target.value)} required />
    //           </div>

    //             <button className='botao-logar' type='submit'>Logar</button>
    //         </div>
    //       </Form>
    //     </div>





    //  </div>

    <div className="TudoLogin" style={{}} >


      <div className="FundoLogin" style={{}}>
        <img src="https://www.ibm.com/blogs/systems/br-pt/wp-content/uploads/sites/11/2020/04/Como-sustentar-negocios-digitais-com-flexibilidade-seguranca-e-privacidade-de-dados.png" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="paiLogin" style={{}}>


        <Form onSubmit={userLogin} style={{ marginTop: "10%" }}>
          <h1 className="tituloLogin">Login</h1>

          <BootstrapFill className="iconLogin" style={{ display: "flex", marginLeft: "43%", }} className='all' color="black" size={50} />
          <div className="caixa" style={{ marginTop: "45%" }}>
            <div classname="boxCampo" style={{}}>
              <h2 className="emailH2">Email</h2>
              <input className="emailLogin" type="email" placeholder="Informe seu email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required style={{ background: "transparent", boxShadow: "0 0 0 0", outline: "0", marginBottom: "6%", border: "white", borderBottom: "black 0.2px solid", }} />
            </div>

            <div classname="boxCampo" style={{}}>
              <h2 className="senhaH2">Senha</h2>
              <input className="senhaLogin" type="password" placeholder="Informe sua senha" name='senha' value={password}
                onChange={(e) => setPassword(e.target.value)} required style={{ border: "white", background: "transparent", boxShadow: "0 0 0 0", outline: "0", bmarginBottom: "6%", border: "white", borderBottom: "black 0.2px solid", marginBottom: '4%' }} />
            </div>
          </div>

          <Link to="/redefinir" style={{ color: "orange", marginLeft: "63%", }}><a>Esqueci minha senha</a></Link>
          <div classname="Botaologin" style={{ display: "flex", }}>

            <button className='botaologar' type='submit'>Logar</button>
          </div>
        </Form>

      </div>



    </div>




  )

}

export default LoginPage