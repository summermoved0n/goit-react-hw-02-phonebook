import { nanoid } from 'nanoid';
import css from './ContactListItem.module';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};
