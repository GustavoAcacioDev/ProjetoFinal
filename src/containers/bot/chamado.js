import React, { Component } from 'react';
import { Chamados } from '../../actions/chamadosActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Chamado extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { problemObject } = steps;

    this.state = { problemObject };
  }

  componentDidMount() {

    const { Chamados } = this.props.Chamados
    
    const userChamado = {
      problemObject: this.state.problemObject.value,
    };

    Chamados(userChamado);
  }
  render() {
    return (
      <div>:)</div>
    );
  }
};


const mapStateToProps = state => {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    Chamados: bindActionCreators({ Chamados }, dispatch)

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Chamado);