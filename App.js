import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Menu from './components/menu.js';

export default class App extends Component {

  render() {

    return (
      
      <Router>
        <Stack key="root">
          <Scene key="menu" component={Menu} title="Menu" hideNavBar initial/>
        </Stack>
      </Router>
        
    
    );
  }
}


