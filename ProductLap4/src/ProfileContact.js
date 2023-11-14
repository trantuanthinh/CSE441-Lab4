import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Divider, IconButton, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailListItem = ({title, description, icon}) => {
  return (
    <View>
      <List.Item
        style={{padding: 16}}
        title={title}
        titleStyle={{color: 'black', fontSize: 20}}
        description={description}
        descriptionStyle={{color: 'black', fontSize: 16}}
        left={props => <Icon name={icon} size={30} color="#900" />}
      />
      <Divider />
    </View>
  );
};

const ProfileContact = () => {
  const {contact} = route.params;
  const {id, avatar, name, email, phone, cell, favorite} = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailSection}>
        <DetailListItem title={'Email'} description={email} icon={'mail'} />
        <DetailListItem title={'Work'} description={phone} icon={'phone'} />
        <DetailListItem
          title={'Personal'}
          description={cell}
          icon={'smartphone'}
        />
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

export default ProfileContact;
