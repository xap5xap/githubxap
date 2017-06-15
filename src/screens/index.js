import { Navigation } from 'react-native-navigation';

import Repositories from './Repositories';
import Login from './Login';



export default function () {
    Navigation.registerComponent('githubXAP.Repositories', () => Repositories);
    Navigation.registerComponent('githubXAP.Login', () => Login);

}
