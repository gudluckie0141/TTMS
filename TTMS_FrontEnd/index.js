import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { ttms as TTMS } from './app.json';

import App from './App';
import { AppRegistry } from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent('main', ()=> App);
//registerRootComponent(App);
