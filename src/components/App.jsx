import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;

    const getName = contacts.find(contact => contact.name === name);

    if (getName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  handleFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const showFilter = this.showFilteredContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        {contacts.length === 0 ? (
          <p>Your contacts list is empty.</p>
        ) : (
          <ContactList contacts={showFilter} />
        )}
      </div>
    );
  }
}
