import React, { useEffect, useState } from 'react';
import './../HomePage/index.css';
import Menu from '../../components/Menu/index';
import { useDispatch, useSelector } from 'react-redux';
import { ChatSquareDots, PersonBoundingBox, PersonCircle, Cursor } from 'react-bootstrap-icons';
import { getRealtimeUsers, updateMessage, getRealtimeConversations, getRealtimeChamados, deleteUser } from '../../actions';

const User = (props) => {



  const { user, onClick } = props;
  return (
    <div onClick={() => onClick(user)} className="displayName">
      <div className="displayPic">
        <PersonCircle className="pic1" size={40} />
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px' }}>
        <span style={{ fontWeight: 500 }}>{user.nome} </span>
        <span className={user.isOnline ? `onlineStatus` : `onlineStatus off`}></span>
      </div>
    </div>

  );
}

const HomePage = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);

  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState('');
  const [cpf, setCpf] = useState('');

  const [problema, setProblema] = useState('');
  const [problemaUid, setProblemaUid] = useState(null);

  const [message, setMessage] = useState('');
  const [userUid, setUserUid] = useState(null);
  let unsubscribe;
  let unsubscribe2;

  useEffect(() => {

    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
      .then(unsubscribe => {
        return unsubscribe;
      })
      .catch(error => {
        console.log(error);
      })

  }, []);



  //console.log(user);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then(f => f()).catch(error => console.log(error));

    }
  }, []);


  const initChat = (user) => {
    setChatStarted(true)
    setChatUser(`${user.nome}`)
    setCpf(`${user.cpf}`)
    setProblema(`${user.problema}`)
    setUserUid(user.uid);

    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
  }




  const submitMessage = (e) => {

    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message
    }


    if (message !== "") {
      dispatch(updateMessage(msgObj))
        .then(() => {
          setMessage('')
        });
    }

    //console.log(msgObj);

  }



  return (

    <div className="ContainerPrincipal" >

      <Menu />

      <div className="Container1">
        <div className="Titulo">
          <p className='titulo'>Atendimento </p>
          <button ></button>
        </div>
        <hr />
        <div className="Container2">
          <div className="Historico">
            <div className="blockHistory">
              <ChatSquareDots className='all' color="black" size={25} />
              <p className="edition">Histórico</p>
            </div>
            <div>
              {
                user.users.length > 0 ?
                  user.users.map(user => {
                    return (

                      <User
                        onClick={initChat}
                        key={user.uid}
                        user={user}

                      />


                    );
                  }) : null
              }
            </div>
          </div>

          <div className="ChatCentral">
            {
              chatStarted ? <div className="chatHeader">
                <p>
                  {
                    chatStarted ? chatUser : ''
                  }
                </p>
              </div> : null
            }
            <div className="chatArea">


              



              {
                <div className="chat-area-conversation">
                  {

                    chatStarted ?
                      user.conversations.map(con =>
                        <div style={{ textAlign: con.user_uid_1 === auth.uid ? 'right' : 'left' }}>
                          <p className="messageStyle" >{con.message}</p>
                        </div>) : null
                  }
                </div>
              }

            </div>
            <div className="Chat-area-controls">
              {
                chatStarted ?
                  <div className="chatControls" >
                    <input style={{ width: '80%', fontSize: '30px', border: 'none', outline: 'none', backgroundColor: '#f5f6f8', border: '1px solid rgba(0, 0, 0, 0.486)', borderRadius: '10px' }} value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder=" Escreva sua mensagem..."
                      type="text"
                    />
                    
                    <button onClick={submitMessage} style={{ border: 'none', backgroundColor: '#f5f6f8', cursor: 'pointer', border: '1px solid rgba(0, 0, 0, 0.486)', borderRadius: '10px'  }}><Cursor className="enviar" color="#FF8C00" size={38} /></button>
                  </div> : null
              }
            </div>
          </div>

          <div className="Container3">
            <div className="BlockInformacao">
              {
                chatStarted ? <PersonBoundingBox className='mm2' size={100} /> : null
              }

              {
                chatStarted ? <div className="info2"> Dados Pessoais: </div> : null
              }
              {
                chatStarted ? <div className="info"> Nome: {chatUser}</div> : null
              }
              {
                chatStarted ? <div className="info"> CPF: {cpf} </div> : null
              }
              {
                chatStarted ? <div className="info"> Problema: {problema} </div> : null
              }

              {
                chatStarted ? <div className="info"> <button style={{ width: '250px', borderRadius: '6px', fontSize: '20px', border: 'none', boxShadow: '0px 0px 2px 1px #FF8C00', background: 'transparent', backgroundColor: '#FF8C00', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', border: 'none', cursor: 'pointer', marginLeft: '10px' }} onClick={() => { dispatch(deleteUser(userUid)) }} > Finalizar Chamado </button></div> : null
              }
            </div>
          </div>
        </div>
      </div>

    </div >

  );
}

export default HomePage;