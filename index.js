/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import TaskList from './src/screens/TaskList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, ()=>TaskList);
//AppRegistry.registerComponent(appName, () => App);
