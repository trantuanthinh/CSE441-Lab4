import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ContactListItem from './ContactListItem';
import ContactThumbnail from './ContactThumbnail';

const ProfileContact = () => {
  const {contact} = route.params;
  const {id, avatar, name, email, phone, cell, favorite} = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailSection}>
        <ContactListItem icon="mail" title="Email" subtitle={email} />
        <ContactListItem icon="phone" title="Work" subtitle={phone} />
        <ContactListItem icon="smartphone" title="Personal" subtitle={cell} />
        <View style={{alignItems: 'center'}}>
          <IconButton
            icon={favorite == true ? 'star-check' : 'star-check-outline'}
            iconColor="#663399"
            size={20}
            onPress={() => {
              //update
            }}
          />
        </View>
      </View>
      <Text>ProfileContact</Text>
    </View>
  );
};

export default ProfileContact;

const styles = StyleSheet.create({
  container: {flex: 1},

  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },

  detailSection: {flex: 1, backgroundColor: 'white'},
});
