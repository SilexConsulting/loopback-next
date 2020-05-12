import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import history from  './redux/history';

import { Provider } from 'react-redux';
import store from './redux/store';

import Container from '@material-ui/core/Container';

import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles/globalStyles';
import theme from './styles/theme';

import Home from './components/views/Home';
import Challenges from './components/views/Challenges';

function App() {
  const classes = styles();

  return (
    <div className={`App ${classes.app}`}>
      <ThemeProvider theme={theme}>
        <Container component="main" className={classes.container}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route path="/challenges" component={Challenges} />
                <Route path="/" component={Home} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
