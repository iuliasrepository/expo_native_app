import React from 'react';
import FirstScreen from "./screens/FirstScreen"
import SecondScreen from "./screens/SecondScreen"
import { UIManager, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

function App () {

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const Tab = createMaterialTopTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: { height: 0 },
                showLabel: false
            }}>
                <Tab.Screen name="Home" component={FirstScreen} />
                <Tab.Screen name="Settings" component={SecondScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App

