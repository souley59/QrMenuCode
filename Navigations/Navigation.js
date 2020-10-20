import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import ScreenHome from '../Screens/ScreenHome';
import ScreenCarte from '../Screens/ScreenCarte';
import BurgerNavigation from '../Navigations/BurgerNavigation'
import ScreenConnexion from '../Screens/ScreenConnexion';

const Navigation = createStackNavigator({
  ScreenHome: {
    screen: ScreenHome,
  },
  ScreenCarte: {
    screen: ScreenConnexion,
  },
  BurgerNavigation: {
    screen: BurgerNavigation,
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

export default createAppContainer(Navigation)