import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import { BootstrapFill, Envelope } from 'react-bootstrap-icons';

const NovaSenha = () => {


    return (


        <div className="TudoNovaSenha">

            <div className="FundoNovaSenha">
                <img src="https://www.lafscontabilidade.com.br/blog/wp-content/uploads/2020/04/original-d4110c9ce89b1e0b1af8d86bc2e68c09-940x414.jpeg" style={{ width: "100%", height: "100%" }} />

            </div>

            <div className="paiNovaSenha">

                <Form style={{ marginTop: "10%" }}>
                    <h1 className="tituloSenha" style={{ fontSize: "2.1em", fontFamily: "Libre Baskerville', serif, bold" }}>Nova Senha</h1>
                    <BootstrapFill className="iconLogin"style={{ display:"flex", marginLeft:"42.5%", marginTop:"9%"}} className='all' color="black" size={50} />
                    <div className="MensagemRedefinir">
            <p>Nos campos abaixo insira uma nova senha.</p>

            </div>

                </Form>

                <Form.Group  className="formNovaSenha" >
                         <div style={{ display: "flex", alignItems: "center" }}>
                           <Envelope className='all' color="black" size={20}  style={{marginLeft:"1%", marginBottom:"1.5%"}}/>
                           <Form.Control type="password" placeholder="Nova senha" name='password' className="formNovaSenha3" style={{}} />

                       </div>

              </Form.Group>
                <Form.Group  className="formNovaSenha" style={{marginTop:"-10px"}} >
                         <div style={{ display: "flex", alignItems: "center" }}>
                           <Envelope className='all' color="black" size={20}  style={{marginLeft:"1%", marginBottom:"1.5%"}}/>
                           <Form.Control type="password" placeholder="Confirme a nova senha" name='password' className="formNovaSenha3" style={{}} />

                       </div>

              </Form.Group>

               <div >
                       <Button className='botao-enviar' type='submit'>Alterar Senha</Button>
             </div>




            </div>



        </div>

    )
}

export default NovaSenha;