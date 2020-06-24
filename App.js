import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core'

import Chat from './component/Chat/Chat';
import Join from './component/Join/Join';

import {BrowserRouter as Router, Route} from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(234, 31, 122)'
        },
        secondary: {
            main: 'rgb(251, 173, 60)'
        }
    }
  })

const App = () => (
    <MuiThemeProvider theme={theme} >
    <Router>
        <Route path='/chatapp' exact component={Join} />
        <Route path='/chat' component={Chat} />
    </Router>
    </MuiThemeProvider>
)

export default App;