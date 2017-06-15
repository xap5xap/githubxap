import { Navigation } from 'react-native-navigation';

import Repositories from './Repositories';


export default function () {
    Navigation.registerComponent('githubXAP.Repositories', () => Repositories);

}
