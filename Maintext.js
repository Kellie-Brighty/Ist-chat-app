import React from 'react';

import './message.css';
import ReactEmoji from 'react-emoji'

const Maintext = ({ user, text }) => {
    return(
        <div className='messageContainer justifyStart' >
            <p className='sentText pl-10' >{user}</p>
            <div className='messageBox backgroundLight' >
            <p className='messageText colorDark' >{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    )
}

export default Maintext;