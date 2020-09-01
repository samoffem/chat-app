import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './join.css'

const Join = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    return (
        <div className="containerOuter">
            <div className="container">
                <h1>Join</h1>
                <div className="inputContainer"><input placeholder="Name" className="inputField" type="text" onChange={(e)=> setName(e.target.value)}></input></div>
                <div className="inputContainer"><input placeholder="Room" className="inputField" type="text" onChange={(e)=> setRoom(e.target.value)}></input></div>
                <Link className="link" onClick={(e)=>(!name || !room)? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Signin</button>
                </Link>
            </div>
        </div>
    )
}

export default Join