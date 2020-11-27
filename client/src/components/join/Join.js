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
                <div className="divider"></div>
                <div className="inputContainer"><input placeholder="Name" className="inputField" type="text" onChange={(e)=> setName(e.target.value)}></input></div>
                <div className="select">
                    <select name="room" id="room" onChange={(e)=>setRoom(e.target.value)}>
                        <option selected disabled>Select a room</option>
                        <option value="python">Python</option>
                        <option value="javascript">Javascript</option>
                        <option value="java">Java</option>
                        <option value="html/css">HTML/CSS</option>
                    </select>
                </div>
                
                <Link className="link" onClick={(e)=>(!name || !room)? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Signin</button>
                </Link>
            </div>
        </div>
    )
}

export default Join