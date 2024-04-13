import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home/Home'
import PostDetail from '../components/PostDetail'
import {COLORS} from '../../constants'

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false, 
      }}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  )
}
const PostStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Post"
      screenOptions={{headerShown: false}}></Stack.Navigator>
  )
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
    barStyle={{height: 55}} 
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />
      <Tab.Screen
        name="Post"
        component={HomeStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'add-circle' : 'add-circle-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'notifications' : 'notifications-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator
