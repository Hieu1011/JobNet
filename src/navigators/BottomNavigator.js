import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home/Home'
import Post from '../screens/PostCreate/Post'
import PostDetail from '../screens/Home/Post/PostDetail'
import Archive from '../screens/Home/Archive/Archive'
import Chat from '../screens/Home/Chat/Chat'
import {COLORS} from '../../constants'

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="HomePage" component={Home} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="Archive" component={Archive} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}
const PostCreateStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Post"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  )
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" barStyle={{height: 55}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />

      <Tab.Screen
        name="Post"
        component={PostCreateStack}
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
