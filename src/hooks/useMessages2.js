import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../index';

function useMessages () {
  const [messages, setMessages] = useState([])
  const [messagesCollection, loadingMessages, error] = useCollection(
    db.collection('chat2')
      .orderBy('created', 'desc')
      .limit(500)
  )

  useEffect(() => {
    const newMessages = messagesCollection?.docs
      .map(doc => ({
        ...doc.data(),
        key: doc.id
      })).reverse() || []

    setMessages(newMessages)
  }, [messagesCollection])

  return {
    messages,
    loadingMessages,
    error
  }
}

export default useMessages