import React from 'react';
import './menu.css';

//images for website
import brqLogo from '../../img/logo.png';

const menu = () => {

  return (


    <div className="containerMenu">

      <div className="menuItens">

        <a href="#home"><img className="BRQLogo" src={brqLogo} /></a>

        <div className="itens">
          <a href="#home">Home</a>
          <a href="#quemSomos">Quem Somos</a>
          <a href="#servicos">Serviços</a>
          <a href="#integrantes">Integrantes</a>
        </div>

      </div>


    </div>
  )


}

export default menu;