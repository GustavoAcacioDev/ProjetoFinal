import React from 'react'
import ReactDOM from 'react-dom'

import MessageSender from '../../components/chat/chat5/MessageSender5';
import Messages from '../../components/chat/chat5/Messages5';
import useMessages from '../../hooks/useMessages5';

import './Chat5.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat2">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat