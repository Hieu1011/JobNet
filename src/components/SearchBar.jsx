import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import {COLORS} from '../../constants'

const SearchBar = ({searchPhrase, setSearchPhrase}) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="black" />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
      </View>
      {searchPhrase !== '' && (
        <Entypo
          name="cross"
          size={20}
          color="black"
          onPress={() => {
            setSearchPhrase('')
          }}
        />
      )}
    </View>
  )
}

export default SearchBar

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '70%',
    backgroundColor: COLORS.background,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  searchBar: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center'
  },
  input: {
    fontSize: 16,
    height: 40,
    width: '100%',
    alignContent: 'center'
  }
})
