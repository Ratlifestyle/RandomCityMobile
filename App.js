import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import DetailSession from './components/DetailSession';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props)=>{
        return (
          <View>
            <Text>gros caca test</Text>
          </View>
        )
      }} useLegacyImplementation initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name='DetailSession' component={DetailSession}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});