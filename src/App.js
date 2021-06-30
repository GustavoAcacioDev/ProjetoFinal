import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';

//paginas
import Home from './containers/home';
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import RegisterClientePage from './containers/RegisterClientePage'
import PrivateRoute from './components/PrivateRoute';
import PerfilAtendente from './containers/PaginaAtendente';
import RedefinirSenha from './containers/redefinirSenha';
import NovaSenha from './NovaSenha';

import {ModalProvider} from './modal.context';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, []);


  return (
    <ModalProvider>

      <div className="App">
        <Router>
          {/* only logged in user can access this home route */}
          <PrivateRoute path="/" exact component={HomePage} />
          <PrivateRoute path='/atendente' component={PerfilAtendente} />
          <Route path='/home' component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signupCliente" component={RegisterClientePage} />
          <PrivateRoute path="/signup" component={RegisterPage} />
          <Route path="/redefinir" component={RedefinirSenha} />
          <Route path="/novaSenha" component={NovaSenha} />
        </Router>
      </div>
    </ModalProvider>
  );
}

export default App;
