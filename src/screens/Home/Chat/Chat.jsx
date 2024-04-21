import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import ActionSheet from 'react-native-actions-sheet'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {filter} from 'lodash'
import styles from './chat.style'
import {COLORS} from '../../../../constants'
import SearchBar from '../../../components/SearchBar'
import ChatItem from './ChatItem'
import NewChat from './NewChat'

const API_ENDPOINT = `https://randomuser.me/api/?results=30`
const Chat = ({navigation}) => {
  const actionSheetRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetchData(API_ENDPOINT)
  }, [])

  const handleSearch = query => {
    const formattedQuery = query.toLowerCase()
    const filteredData = filter(fullData, user => {
      return contains(user, formattedQuery)
    })
    setData(filteredData)
  }

  const contains = ({name}, query) => {
    const {first, last} = name

    if (
      first.toLowerCase()?.includes(query) ||
      last.toLowerCase()?.includes(query)
    ) {
      return true
    }

    return false
  }

  const fetchData = async url => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      setData(json.results)

      console.log(json.results)
      setFullData(json.results)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      </View>
    )
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Error in fetching data ... Please check your internet connection!{' '}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <SearchBar
          placeholder={'Search messages'}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onChangeText={query => handleSearch(query)}
          style={{width: '65%'}}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'space-around'
          }}>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="checkcircleo" size={22} color={COLORS.black} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => actionSheetRef.current?.show()}>
            <AntDesign name="form" size={22} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={data}
          style={styles.chatFlatlist}
          keyExtractor={item => item.login.username}
          renderItem={item => (
            <ChatItem data={item} type={'chat'} onPress={() => {}} />
          )}
        />
      </View>

      <ActionSheet ref={actionSheetRef}>
        <NewChat
          type={'newChat'}
          onClose={() => actionSheetRef.current?.hide()}
        />
      </ActionSheet>
    </SafeAreaView>
  )
}

export default Chat
