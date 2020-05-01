import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Dev Maps'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no GitHub',
      }
    },

  },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }
    })
);

export default Routes;