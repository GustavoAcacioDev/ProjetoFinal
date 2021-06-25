import React, { Component } from 'react';
import { signUpCliente } from '../../actions/postActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Cadastro extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { email, senha, nome, cpf } = steps;

    this.state = { email, senha, nome, cpf };
  }


  componentDidMount() {
    const { signUpCliente } = this.props.signUpCliente
    const user = {
      email: this.state.email.value,
      senha: this.state.senha.value,
      nome: this.state.nome.value,
      cpf: this.state.cpf.value,
    };

    signUpCliente(user);
  }
  render() {
    return (
      <div>Informações salvas com sucesso! :)</div>
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
    signUpCliente: bindActionCreators({ signUpCliente }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);