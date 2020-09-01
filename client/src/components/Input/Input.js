import React from 'react'
import './Input.css'

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className="form">
            <input 
                placeholder="Type a message"
                className="inputBar"
                value={message}
                onChange = {(e)=>setMessage(e.target.value)}
                onKeyPress={e=>e.key === 'Enter'? sendMessage(e):null}
            />
            <button onClick={(e)=>sendMessage(e)} className="sendButton">Submit</button>
        </form>
    )
}

export default Input
