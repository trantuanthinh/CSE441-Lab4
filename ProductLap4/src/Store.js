import {configureStore, createSlice} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4} from 'uuid';

export const mapContacts = contact => {
  const {name, picture, phone, cell, email} = contact;
  return {
    id: v4(),
    name: name.first + ' ' + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contact: []},
  reducers: {
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const {fetchContactsSuccess} = contactsSlice.actions;

const Store = configureStore({reducer: contactsSlice.reducer});

export default Store;
