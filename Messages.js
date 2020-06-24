import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message'

const useStyles = makeStyles({
    messagebox: {
        margin: '10px auto',
        width: '80%',
        height: '400px',
        backgroundColor: 'white',
        marginBottom: '0px',
        overflow: 'auto',
        padding: '10px 0',
        flex: 'auto',
    },
})

const Messages = ({messages, name }) => {
    const classes = useStyles();

    return(
        <ScrollToBottom className={classes.messagebox}>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
        </ScrollToBottom>
    )
}

export default Messages