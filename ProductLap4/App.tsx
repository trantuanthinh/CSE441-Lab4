import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Contact from './src/Contact';
import Favorite from './src/Favorite';
import ProfileContact from './src/ProfileContact';
import Store from './src/Store';

const Stack = createStackNavigator();

function ContactsScreen() {
    return (
        <Stack.Navigator
            initialRouteName="Contact" screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Contact' component={Contact}
                options={{ title: "Contact" }}
            />

            <Stack.Screen name='ProfileContact' component={ProfileContact}
                options={{ title: "Profile Contact" }}
            />
        </Stack.Navigator>
    );
};

function FavoriteScreen() {
    return (
        <Stack.Navigator
            initialRouteName="Favorite" screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Favorite' component={Favorite}
                options={{ title: "Favorite" }}
            />

            <Stack.Screen name='ProfileContact' component={ProfileContact}
                options={{ title: "Profile Contact" }}
            />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='ContactScreen'
            barStyle={{ backgroundColor: 'blue' }}
            labeled={false}
            activeColor={'greyLight'}
            inactiveColor={"greyDark"}>

            <Tab.Screen name="Contact" component={ContactsScreen} options={{ tabBarIcon: 'format-list-bulleted' }} />

            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ tabBarIcon: 'star-check' }} />
        </Tab.Navigator>
    )
}

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </Provider>
    )
}

export default App