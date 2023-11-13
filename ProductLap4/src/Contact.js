import { FlatList, StyleSheet } from 'react';
import React from 'react-native';

const {mapContacts, fetchContactsSuccess} = require('./Store');
const keyExtractor = ({phone}) => phone;

const fetchContacts = async () => {
  const data = await fetch('https://randomuser.me/api/?results=50');
  const ContactData = await data.json();
  return ContactData.results.map(mapContacts);
};

const Contacts = ({navigation}) => {
  const {contacts} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts()
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(e => {});
  }, []);

  const renderContacts = ({item}) => {
    const {name, avatar, phone} = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigaton.navigate('ProfileContact', {contact: item})}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Contacts;
