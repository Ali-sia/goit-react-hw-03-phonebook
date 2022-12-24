import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Title } from './App.styled';

import ContactList from './ContactList';
import Filter from './Filter';
import CreateContact from './CreateContact';

export class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== index),
    }));
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.find(
        findContact => findContact.name === newContact.name
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.toLowerCase().includes(normalizeFilter)
      );
    });
    return (
      <Box pr={4} pl={4} color="text" width="400px">
        <Title>Add contact</Title>
        <CreateContact onSubmit={this.addContact} />

        <Title>Contacts</Title>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />

        <GlobalStyle />
      </Box>
    );
  }
}
