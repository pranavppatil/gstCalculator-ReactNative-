import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from './src/components/input';
import Navigator from './screens/navigator'

import {createStore} from 'redux'
import {Provider} from 'react-redux';
import rootReducer from './src/reducers/rootReducer'

const store=createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Navigator/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});