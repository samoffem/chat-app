import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import Infobar from '../Infobar/Infobar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import './chat.css'


let socket
const Chat = ({location}) => {
    const ENDPOINT = "localhost:5000"
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const {name, room} = queryString.parse(location.search)
        setName(name)
        setRoom(room)

        socket = io(ENDPOINT)
        
        socket.emit('join', {name, room}, ()=>{

        })

        return ()=>{
            socket.emit('disconnect')
            socket.off()
        }

    },[ENDPOINT, location.search])

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages([...messages, message])


        })
        
    },[messages])

    const sendMessage = (e)=>{
        e.preventDefault()
        if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''))
        }
    }
    //console.log(message, messages)
    

    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <Infobar room={room} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                
            </div>
        </div>
    )
}

export default Chat
