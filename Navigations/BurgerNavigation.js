import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { View } from 'react-native';
import ScreenCarte from '../Screens/ScreenCarte';
import ScreenRestaurants from '../Screens/ScreenRestaurants';
import ScreenFavoris from '../Screens/ScreenFavoris';
import ScreenMaReservation from '../Screens/ScreenMaReservation';
import ScreenMonCompte from '../Screens/ScreenMonCompte';


function CustomDrawerContent(props, { navigation }) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: 'whitesmoke' }}>
            <View style={{ flex: 1, height: '100%', }}>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function StackCarte() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ScreenCarte" component={ScreenCarte} />
        </Stack.Navigator>
    );
}
function StackRestaurants() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ScreenRestaurants" component={ScreenRestaurants} />
        </Stack.Navigator>
    );
}
function StackFavoris() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ScreenFavoris" component={ScreenFavoris} />
        </Stack.Navigator>
    );
}

function StackMaReservation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ScreenReservation" component={ScreenMaReservation }/>
        </Stack.Navigator>
    );
}
function StackMonCompte() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ScreenMonCompte" component={ScreenMonCompte} />
        </Stack.Navigator>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator 
        drawerContentOptions={{
            activeTintColor: 'chartreuse',
            labelStyle: { color: 'seagreen', fontSize: 20, fontWeight: 'bold' },
        }} drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Carte" component={StackCarte} initialRouteName/>
            <Drawer.Screen name="Restaurants" component={StackRestaurants} />
            <Drawer.Screen name="Favoris" component={StackFavoris} />
            <Drawer.Screen name="Ma Réservation" component={StackMaReservation} />
            <Drawer.Screen name="Mon Compte" component={StackMonCompte} />
        </Drawer.Navigator>
    );
}

export default function BurgerNavigation() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}