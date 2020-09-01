import React from 'react'
import './message.css'

const Message = ({message:{user, text}, name}) => {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()

    if (user===trimmedName){
        isSentByCurrentUser = true
    }
    return (
        isSentByCurrentUser ? (
            <div className="messageContainer flexEnd">
                <p className="mr-10 name">{trimmedName}</p>
                <div className="messageBox currentUser mr-10">
                    <p>{text}</p>
                </div>
            </div>
        ) : (
            <div className="messageContainer">
                
                <div className="messageBox adminUser ml-10">
                    <p>{text}</p>
                </div>
                <p className="ml-10 name">{user}</p>
            </div>
        )
        
    )
}

export default Message
