import React from 'react';

import Maintext from './Maintext'
import './message.css'

import ReactEmoji from 'react-emoji'

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true
    }

    return(
        isSentByCurrentUser ? (
            <div className='messageContainer justifyEnd' >
                <div classname='messageBox backgroundBlue' style={{marginLeft: '100px'}} >
                <p className='messageText colorWhite' >{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='sentText pr-10' >{trimmedName}</p>
            </div>
        ) 
        : 
        (
            <Maintext user={user} text={text} />
        )
    )
}

export default Message