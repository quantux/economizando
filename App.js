import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import New from "./Pages/New/New";

const AppNavigator = createStackNavigator({

  Edit: Edit,
  Home: Home,
  New: New,

}, { headerMode: 'none' });

export default createAppContainer(AppNavigator);
