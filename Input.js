import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    sendbox: {
        margin: '10px auto',
        width: '80%',
    },
    sendinput: {
        margin: '0px auto',
        width: '83.5%',
        padding: '10px',
        outline: 'none',
    },
    btn: {
        border: 'none',
        padding: '11px',
        margin: 'auto',
        width: '65px',
        outline: 'none',
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS'
    }
})

const Input = ({ message, setMessage, sendMessage }) => {
    const classes = useStyles();
    return(
        <div className={classes.sendbox} >
            <input className={classes.sendinput} id='sendinput' type='text' placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}/>
            <input type='button' value='Send' className={classes.btn} onClick={(e) => sendMessage(e)} color='secondary'/>
        </div>
    )
} 

export default Input;