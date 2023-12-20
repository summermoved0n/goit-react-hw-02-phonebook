import { ContactListItem } from 'components/ContactListItems/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
