import React from 'react'
import ReactDOM from 'react-dom'

import MessageSender from '../../components/chat/chat3/MessageSender3';
import Messages from '../../components/chat/chat3/Messages3';
import useMessages from '../../hooks/useMessages3';

import './Chat3.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat2">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat