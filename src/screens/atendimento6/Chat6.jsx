import React from 'react'
import ReactDOM from 'react-dom'

import MessageSender from '../../components/chat/chat6/MessageSender6';
import Messages from '../../components/chat/chat6/Messages6';
import useMessages from '../../hooks/useMessages6';

import './Chat6.scss'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat2">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat