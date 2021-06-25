import React, { Component } from 'react';
import { signInCliente } from '../../actions/authActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { emailLogin, senhaLogin } = steps;

    this.state = { emailLogin, senhaLogin };
  }

  componentDidMount() {
    const { signInCliente } = this.props.signInCliente
    const userLogin = {
      emailLogin: this.state.emailLogin.value,
      senhaLogin: this.state.senhaLogin.value,
    };

    signInCliente(userLogin);
  }
  render() {
    return (
      <div>Logado com sucesso! :)</div>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signInCliente: bindActionCreators({ signInCliente }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);