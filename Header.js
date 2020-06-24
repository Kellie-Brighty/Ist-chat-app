import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'rgba(251, 171, 60, 0.575)',
        borderRadius: '20px',
        margin: ' auto',
        width: '78%',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        maxWidth: '40px',
        maxHeight: '40px'
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
    },
    brandtext: {
        color: 'white',
        fontFamily: 'Trebuchet MS'
    },
    cancel: {
        color: 'white'
    }
})

const Header = ({ room }) => {
    const classes = useStyles();

    return(
        <div className={classes.header} >
            <div className={classes.brand} >
                <div>
                 <img className={classes.logo} src='logo.png' alt='logo' />
                </div>
                <div>
                <Typography variant='h6' className={classes.brandtext} >{room} Group</Typography>
                </div>
            </div>
            <div>
                <a href='/chatapp' >
                <CancelIcon className={classes.cancel} />
                </a>
            </div>
        </div>
    )
}

export default Header;