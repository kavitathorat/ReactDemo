import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
export default function TabView() {
  return (
      <CustomTab />
  );
}
const Tab = createBottomTabNavigator();
function CustomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="About" component={AboutTab} />
      <Tab.Screen name="Settings" component={SettingTab} />
    </Tab.Navigator>
  );
}
function AboutTab() {
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'yellow',fontSize:20}}>About Tab</Text>
    </View>
  );
}

function SettingTab() {
  return (
    <View style={styles.viewStyle}>
      <Text style={{color:'yellow',fontSize:20}}>Setting Tab</Text>
     </View>
  );
}
const styles = StyleSheet.create({ 
  viewStyle: { flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'lightgray' }
});
