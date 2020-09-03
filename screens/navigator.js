import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../src/components/input'
import Result from '../src/components/result'

const screens= {
   
  
    Home: {
        screen: Home
    },
    Result: {
        screen: Result
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

