import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import HomeScreen from "./screens/HomeScreen";

const HomeStack = createStackNavigator();

function MyStack(){
    return(
        <HomeStack.Navigator
        initialRouteName="LoginScreen">
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </HomeStack.Navigator>
    )
}


