import React from 'react'
import xcircle from '../../icons/x-circle.svg'
import './Infobar.css'

const Infobar = ({room}) => {
    return (
        <div className="infobarContainer">
            <div className="leftContainer">
                <div className="icon"></div>
                <h3>{room}</h3>
            </div>
            <div className="rightContainer">
                <a href="/"><img src={xcircle}></img></a>
            </div>
            
        </div>
    )
}

export default Infobar
