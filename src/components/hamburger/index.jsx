import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import '../hamburger/index.css';
import {Nav} from 'react-bootstrap';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='botaomenu1'>
      <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <img className='botaomenu' src="https://image.flaticon.com/icons/png/512/248/248917.png" alt="icone do menu"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          
         <Nav.Link  style={{textDecoration: '#192026'}} href="#home">Home</Nav.Link>
        <Nav.Link  style={{textDecoration: '#192026'}} href="#Quemsomos">Quem somos</Nav.Link>
        <Nav.Link  style={{textDecoration: '#192026'}} href="#Servicos">Serviços</Nav.Link>
        <Nav.Link  style={{textDecoration: '#192026'}} href="#Integrantes">Integrantes</Nav.Link>
      </Menu>
    </div>
  );
}