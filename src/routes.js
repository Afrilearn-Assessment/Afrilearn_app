import { createAppContainer} from 'react-navigation' 
import {createStackNavigator } from 'react-navigation-stack';

import Index from './screens/index';


const Routes = createStackNavigator({
    Index: { screen: Index }
},
{
    headerMode: 'none',
    navigationOptions: { drawerLockMode: 'locked-closed' },
    initialRouteParams: 'Index',
});

export default createAppContainer(Routes);