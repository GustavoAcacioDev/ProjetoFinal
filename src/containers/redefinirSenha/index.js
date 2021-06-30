import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import { BootstrapFill, Envelope } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmailVerification } from '../../actions/auth.actions';




const RedefinirSenha = () => {
 
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const sendEmail = (e) => {
        e.preventDefault();

        dispatch(sendEmailVerification(email))
    }

    return (


        <div className="TudoRedefinir">

            <div className="FundoRedefinir">
                <img src="https://www.lafscontabilidade.com.br/blog/wp-content/uploads/2020/04/original-d4110c9ce89b1e0b1af8d86bc2e68c09-940x414.jpeg" style={{ width: "100%", height: "100%" }} />
            </div>

            <div className="paiRedefinir">


                <Form onSubmit={sendEmail} style={{ marginTop: "10%" }}>
                    <h1 className="tituloRedefinir">Redefinir Senha</h1>
                    <BootstrapFill className="iconLogin" style={{ display: "flex", marginLeft: "42.5%", marginTop: "9%" }} className='all' color="black" size={50} />

                    <div className="MensagemRedefinir">
                        <p>Para redefinir sua senha, informe o e-mail cadastrado
                            na sua conta e lhe enviaremos um link com as instruções</p>
                    </div>


                    <Form.Group className="formRedefinir" >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Envelope className='all' color="black" size={20} style={{ marginLeft: "1%", marginBottom: "1.5%" }} />
                            <Form.Control className="emailRedefinir" type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}required />
                        </div>

                    </Form.Group>


                    <div className="botaoRedefinir" style={{ display: "flex", }}>
                        <Button className='botao-redefinir' type='submit'>Enviar Email</Button>
                    </div>


                </Form>


            </div>


        </div>

    )
}

export default RedefinirSenha;