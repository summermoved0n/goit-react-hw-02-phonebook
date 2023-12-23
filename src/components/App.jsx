import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;

    const getName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (getName) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
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
      <div className={css.app_conteiner}>
        <h1 className={css.app_title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.app_subtitle}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        {contacts.length === 0 ? (
          <p className={css.app_text}>Your contacts list is empty.</p>
        ) : (
          <ContactList
            contacts={showFilter}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
