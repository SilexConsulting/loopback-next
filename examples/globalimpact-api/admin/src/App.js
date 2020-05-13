import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

import { Provider, ReactReduxContext } from 'react-redux';
import store from './redux/store';

import Container from '@material-ui/core/Container';

import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles/globalStyles';
import theme from './styles/theme';

import Home from './components/views/Home';
import Challenges from './components/views/Challenges';
import Challenge from './components/views/Challenge';

function App({ history, context }) {
  const classes = styles();

  return (
    <div className={`App ${classes.app}`}>
      <ThemeProvider theme={theme}>
        <Container component="main" className={classes.container}>
          <Provider store={store} context={context}>
            <ConnectedRouter history={history} context={context}>
              <Switch>
                <Route exact path="/challenges/:id" component={Challenge} />
                <Route exact path="/challenges" component={Challenges} />
                <Route exact path="/" component={Home} />
              </Switch>
            </ConnectedRouter>
          </Provider>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
