import * as React from 'react';

import { AboutTabParamList, BottomTabParamList, MainTabParamList } from '../types';

import AboutTabScreen from '../screens/AboutTabScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import MainTabScreen from '../screens/MainTabScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import useColorScheme from '../hooks/useColorScheme';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MainTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          title: 'Dermatologist AI'
        }}
      />
      <BottomTab.Screen
        name="AboutTab"
        component={AboutTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          title: 'About'
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MainTabStack = createStackNavigator<MainTabParamList>();

function MainTabNavigator() {
  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen
        name="MainTabScreen"
        component={MainTabScreen}
        options={{ headerTitle: 'Dermatologist AI', title: 'Dermatologist AI' }}
      />
    </MainTabStack.Navigator>
  );
}

const AboutTabStack = createStackNavigator<AboutTabParamList>();

function AboutTabNavigator() {
  return (
    <AboutTabStack.Navigator>
      <AboutTabStack.Screen
        name="AboutTabScreen"
        component={AboutTabScreen}
        options={{ headerTitle: 'About Dermatologist AI', title: 'About Dermatologist AI' }}
      />
    </AboutTabStack.Navigator>
  );
}
