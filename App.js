/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './screens/home';
import Navigator from './routes/homeStack';
import DrawerNavigator from './routes/drawerStack';
import NavigationStack from './routes/NavigationStack';

const App: () => React$Node = () => {
  return (
    // <NavigationStack/>
      <Navigator/>
  );
};



export default App;
