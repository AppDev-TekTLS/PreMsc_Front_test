import { useEffect, useState } from 'react'
import {socket} from "./utils/socket.js";
import './App.css'

function App() {
  const [messages, setMessages] = useState(["test msg"])

  const MessageItem = (value) => (
    <div className='message-container'>
      {value}
    </div>
  )

  // TODO: implémenter une fonction pour récupérer les messages envoyer par le serveur
  // PS: regarder le fichier back/index.js pour comprendre le comportement du serveur

  useEffect(() => {
    if (!socket) return

    return () => {};
  }, [socket])


  // TODO: terminer la fonction pour envoyer un message
  // PS: le message envoyer est une string hardcode
  const sendMessage = () => {
    const messageValue = "Hello World!"
    return;
  }

  return (
    <div className='container'>
      <div className='container-chat-box'>
        {messages.map(msg => MessageItem(msg)) }
      </div>
      <button onClick={sendMessage}> send message</button>
    </div>
  )
}

export default App
