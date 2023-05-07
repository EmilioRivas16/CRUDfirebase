import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Constants from 'expo-constants';

import PantallaInicio from './screens/inicio';
import PantallaEditar from './screens/editar';
import PantallaUsuarios from './screens/usuarios';
import PantallaInsertar from './screens/insertar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderBackButton } from '@react-navigation/stack';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tabs.Navigator

        initialRouteName={PantallaInicio}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;
            let rn = route.name;

            if (rn === "Inicio") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Usuarios") {
              iconName = focused ? 'people' : 'people-outline';

            } else if (rn === "Insertar") {
              iconName = focused ? 'pencil' : 'pencil-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

      >
        <Tabs.Screen
          name="Inicio"
          component={PantallaInicio}
          options={{title: "Inicio"}}
        />
        <Tabs.Screen
          name="Usuarios"
          component={PantallaUsuarios}
          options={{title: "Usuarios"}}
        />
        <Tabs.Screen
          name="Insertar"
          component={PantallaInsertar}
          options={{title: "Insertar"}}
        />
        <Tabs.Screen
          name="Editar"
          component={PantallaEditar}
          options={{title: "Editar",
          tabBarButton: () => null}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
