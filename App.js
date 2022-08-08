import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ServiceScreen from './Screens/ServiceScreen';
import ContactScreen from './Screens/ContactScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
// console.log(Stack);

// function HomeScreen() {
//   return (
//     <View>
//       <Text style={{fontSize: 24}}>Home Screen</Text>
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View>
//       <Text style={{fontSize: 24}}>About Screen</Text>
//     </View>
//   );
// }

//Aakhu StackNavigator demo che..//

export default function App() {
  return (
    //Basic Navigation//
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="About" component={AboutScreen} />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //Navigator Props//
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{headerStyle: {backgroundColor: 'red'}}}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //Screen Props//
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{
    //         title: 'Geekyshow App',
    //         headerStyle: {backgroundColor: 'blue'},
    //         headerTintColor: 'white',
    //         headerTitleStyle: {FontWeight: 'bold'},
    //         headerTitleAlign: 'center',
    //         headerShown: true,
    //         headerLeft: props => (
    //           <MaterialCommunityIcons
    //             name="home-circle"
    //             size={34}
    //             color="white"
    //             onPress={() => console.log('Home clicked')}
    //           />
    //         ),
    //         headerRight: props => (
    //           <MaterialCommunityIcons
    //             name="bell-circle"
    //             size={34}
    //             color="white"
    //             style={{padding: 10}}
    //             onPress={() => console.log('bell clicked')}
    //           />
    //         ),
    //       }}
    //     />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //  Group
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Group screenOptions={{headerStyle: {backgroundColor: 'red'}}}>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen name="About" component={AboutScreen} />
    //     </Stack.Group>
    //     <Stack.Screen name="Contact" component={ContactScreen} />
    //     <Stack.Screen name="Service" component={ServiceScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //route and navigation Props and Hooks
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{id: 11}}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
