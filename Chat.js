import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {makeStyles} from '@material-ui/core/styles';

import Header from './Header';
import Input from './Input';
import Messages from './Messages';
import Usercontainer from './Usercontainer'
import './chat.css'

const useStyle = makeStyles({
    chatBody: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to left, #DA2956, #FBB03B )',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    chatbox: {
        // margin: '0px auto',
        width: '50%',
        marginBottom: '50px'
    },
    userbox: {
        // margin: '0px auto',
        width: '50%',
        marginBottom: '50px',
        // overflow: 'auto'
    },
    
    
})

let socket;

const Chat = ({location}) => {
    const classes = useStyle();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // const ENDPOINT = 'localhost:2000';
    const ENDPOINT = 'https://kellys-chat-app.herokuapp.com/'

   useEffect(() => {
       const {name, room} = queryString.parse(location.search)

       socket = io(ENDPOINT);

       setName(name);
       setRoom(room);

       socket.emit('join', {name, room}, () => {

       });

       return () => {
           socket.emit('disconnect');
           socket.off();
       }
   }, [ENDPOINT, location.search]);

   useEffect(() => {
       socket.on('message', (message) => {
        setMessages([...messages, message])
       });

       socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
   }, [messages]);

   const sendMessage = (e) => {
    e.preventDefault();

    if(message){
        socket.emit('sendMessage', message, () => setMessage(''));
    }
   }


    return(
        <>
        <div className={classes.chatBody} id='chatbody' >
            <div className={classes.chatbox} id='chatbox' >
            <Header room={room} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
        
        
        </>
    )
}

export default Chat;