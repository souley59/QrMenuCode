import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ScreenConnexion from '../Screens/ScreenConnexion';
import ScreenHome from '../Screens/ScreenHome';
import ScreenInscription from '../Screens/ScreenInscription';


const scenes = Actions.create(
         <Scene key='root'>
        <Scene key="ScreenConnexion" component={ScreenHome} initial />
      <Scene key="ScreenConnexion" component={ScreenConnexion}  />
      <Scene key="ScreenInscription" component={ScreenInscription}   />
      </Scene>
  );

export default  class RouterComponent extends Component {
    render() {
      return <Router scenes={scenes}/>
    }
  }


/* import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ScreenConnexion from './Screens/ScreenConnexion';
import ScreenHome from './Screens/ScreenHome';
import ScreenInscription from './Screens/ScreenInscription';


const scenes = Actions.create(
         <Scene key='root'>
        <Scene key="ScreenHome" component={ScreenHome} initial />
      <Scene key="ScreenConnexion" component={ScreenConnexion}  />
      <Scene key="ScreenInscription" component={ScreenInscription}   />
      </Scene>
  );

export default  class App extends Component {
    render() {
      return <Router scenes={scenes}/>
    }
  } */