import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  Keyboard,
  FlatList,
  ScrollView
} from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../../components/SearchBar'
import PostItem from '../../components/PostItem'
import styles from './home.style'
import PostData from '../../../assets/data/postData'

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.header}>
            <SearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
            />
          </View>
        </TouchableWithoutFeedback>

        {/* <View style={{flex: 1}}> */}
          <FlatList
            data={PostData}
            style={styles.postFlatlist}
            renderItem={item => <PostItem data={item} />}
          />
        {/* </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Home
