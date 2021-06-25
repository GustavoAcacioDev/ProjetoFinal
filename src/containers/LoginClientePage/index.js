import React, { useState,} from 'react';
import { Form} from 'react-bootstrap';
import { signin} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../LoginClientePage/login.css';

/**
* @author
* @function LoginPage
**/

const LoginClientePage = (props) => {

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

    <div className="pai">
      <Form className="formulario" onSubmit={userLogin}>
        <h1 className="titulo2">Login</h1>

        <div className="caixa">
          <div classname="boxCampo" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 className="emailH2">Email</h2>
            <input className="email" type="email" placeholder="Informe seu email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
          </div>

          <div classname="boxCampo" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
            <h2 className="senhaH2">Senha</h2>
            <input className="senha" type="password" placeholder="Informe sua senha" name='senha' value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>

            <button className='botao-logar' type='submit'>Logar</button>
        </div>
      </Form>
    </div>

  )

}

export default LoginClientePage