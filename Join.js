import React, {useState} from 'react';
import './join.css';

import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    body: {
        backgroundImage: 'linear-gradient(to left, #DA2956, #FBB03B )',
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        fontFamily: 'Trebuchet MS'
    },
    formWrap: {
        marginTop: '100px',
        backgroundColor: 'rgba(255, 255, 255, 0.726)',
        height: '320px',
        padding: '60px 80px',
        textAlign: 'center',
        borderRadius: '20px'
    },
    mainText: {
        color: 'rgb(234, 31, 122)',
        fontWeight: 'bold',
        fontFamily: 'Trebuchet MS',
    },
    joinText: {
        textDecoration: 'underline',
        fontFamily: 'Trebuchet MS'
    },
    TextField: {
        width: '100%',
        marginTop: '30px',
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        width: '100%',
        marginTop: '30px',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white',
        fontFamily: 'Trebuchet MS',
        backgroundImage: 'linear-gradient(to right, #9D4985, #EA1F7A )'
    },
})

const Join = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return(
    <div id='body' className={classes.body} >
        <div id='formWrap' className={classes.formWrap} >
            <Typography variant='h4' id='mainText' className={classes.mainText} >Kelly's ChatApp</Typography>
            <form>
            <TextField className={classes.TextField} label="Username" variant="outlined" onChange={(e) => setName(e.target.value)} />
            <TextField className={classes.TextField} label="Room" variant="outlined" onChange={(e) => setRoom(e.target.value)} />
            <Link className={classes.link} onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`} >
            <Button type='submit' className={classes.button} fullWidth>Join</Button>
            </Link>
            </form>
        </div>
    </div> 
)
}

export default Join;