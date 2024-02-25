import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './splash.style';
import splash from '../../../assets/images/favicon.png'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=> {
            navigation.replace('SignIn')
        }, 2000)
    },[]);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <Image source={splash}/>
    </SafeAreaView>
  )
}

export default Splash