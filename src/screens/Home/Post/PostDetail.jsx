import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from '@react-navigation/native'
import { Menu } from 'react-native-paper'
import BackButton from '../../../components/BackButton'
import { COLORS, images } from '../../../../constants'
import styles from './postDetail.style'
import ImageGrid from '../../../components/ImageGrid'

const PostDetail = ({route}) => {
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  console.log(route);
  
  const closeMenu = () => setVisible(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton navigation={navigation} />
      </View>

      <ScrollView style={styles.content}>
      <View style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <View style={styles.avtContainer}>
          <Image source={images.hero1} style={styles.avtImg} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoName}>Bui Luong Hieu</Text>
          <View>
            <Text style={styles.text}>16h</Text>
          </View>
        </View>

        <View style={{position: 'absolute', right: 5, top: 5, padding: 5}}>
          <Menu
            visible={visible}
            style={{}}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Entypo
                  name="dots-three-vertical"
                  size={16}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            }>
            <Menu.Item
              leadingIcon="bookmark-outline"
              onPress={() => onSavePost()}
              title="Save"
              titleStyle={{fontSize: 14}}
            />
            <Menu.Item
              leadingIcon="tray-arrow-up"
              onPress={() => {}}
              title="Share via"
              titleStyle={{fontSize: 14}}
            />
            <Menu.Item
              leadingIcon="close-circle"
              onPress={() => {}}
              title={`Unfollow Bui Luong Hieu`}
              titleStyle={{fontSize: 14}}
            />
          </Menu>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('PostDetail', {postData: data.item})
          }>
          <Text
            style={styles.contentText}>
            {data.item.text}
          </Text>
        </TouchableWithoutFeedback>
        {showMoreButton ? (
          <Text style={styles.moreText} onPress={toggleTextShown}>
            {textShown ? ' See less' : ' See more'}
          </Text>
        ) : null}

        <ImageGrid
          data={data.item.imgs}
          postId={data.item.id}
          onPress={handleImgPress}
        />

        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('PostDetail', {postData: data.item})
          }>
          <View style={styles.contentFooter}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <TouchableOpacity
                style={{
                  padding: 2,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: COLORS.background,
                  backgroundColor: COLORS.background
                }}>
                <AntDesign name="like1" size={14} color={COLORS.primary} />
              </TouchableOpacity>
              <Text style={styles.text}>240</Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {data.item.options.comments.length > 0 && (
                  <>
                    <Text style={styles.text}>
                      {data.item.options.comments.length} comments
                    </Text>
                    {data.item.options.shares.length > 0 && (
                      <Text style={styles.text}> • </Text>
                    )}
                  </>
                )}
                <Text style={styles.text}>
                  {data.item.options.shares.length} shares
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.optionTab} onPress={() => handleLike()}>
          <AntDesign
            name={isLike ? 'like1' : 'like2'}
            size={18}
            color={isLike ? COLORS.primary : COLORS.greyDark}
          />
          <Text style={styles.optionText(isLike)}>
            {isLike ? 'Liked' : 'Like'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionTab}>
          <FontAwesome name="comment-o" size={18} color={COLORS.greyDark} />
          <Text style={styles.optionText(false)}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionTab}
          onPress={() => handleShare()}>
          <FontAwesome name="share" size={18} color={COLORS.greyDark} />
          <Text style={styles.optionText(false)}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionTab}>
          <FontAwesome name="send" size={18} color={COLORS.greyDark} />
          <Text style={styles.optionText(false)}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PostDetail
