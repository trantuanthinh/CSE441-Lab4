import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContactThumbnail from './ContactThumbnail';

const keyExtractor = ({phone}) => phone;

const Favorite = () => {
  const {contacts} = useSelector(state => state);
  const renderFavoriteThumbnail = ({item}) => {
    const {avatar} = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigation.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  const favorite = contacts.filter(contact => contact.favorite);
  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={renderFavoriteThumbnail}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', backgroundColor: 'white'},

  list: {alignItems: 'center'},
});
