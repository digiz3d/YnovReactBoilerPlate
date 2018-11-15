import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import ChoixpeauScreen from '../screens/ChoixpeauScreen';
import CompteurScreen from '../screens/CompteurScreen';
import PersonnagesScreen from '../screens/PersonnagesScreen';
import PersonnageDetailsScreen from '../screens/PersonnageDetailsScreen';
/*
export default createStackNavigator(
  {
    Compteur: { screen: CompteurScreen },
    Classement: { screen: ClassementScreen }
  },
  {
    initialRouteName: 'Compteur',
    navigationOptions: {
      header: () => null
    }
  }
);
*/
const PersonnagesStack = createStackNavigator(
  {
    Personnages: { screen: PersonnagesScreen },
    PersonnageDetails: { screen: PersonnageDetailsScreen }
  },
  {
    navigationOptions: {
      header: () => null
    }
  }
);

const routes = createBottomTabNavigator(
  {
    Compteur: { screen: CompteurScreen },
    PersonnagesStack: {
      screen: PersonnagesStack,
      navigationOptions: {
        title: 'Personnages'
      }
    },
    Choixpeau: { screen: ChoixpeauScreen }
  },
  {
    initialRouteName: 'Compteur',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' }
  }
);

export default routes;
