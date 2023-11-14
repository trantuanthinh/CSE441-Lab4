import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const keyExtractor = ({phone}) => phone;

const ContactThumbnail = ({avatar, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image
        source={{uri: avatar}}
        style={{
          width: 90,
          height: 90,
          margin: 10,
          borderRadius: 45,
          borderColor: 'white',
          borderWidth: 2,
        }}
      />
    </TouchableOpacity>
  );
};

const Favorite = ({navigation}) => {
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

  const favorites = contacts.filter(contact => contact.favorite);

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    alignItems: 'center',
  },
});
