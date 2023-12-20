import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const inputFilterId = nanoid();

  return (
    <label htmlFor={inputFilterId}>
      Find contact by name
      <br />
      <input
        type="text"
        name="filter"
        value={value}
        id={inputFilterId}
        onChange={onChange}
      />
    </label>
  );
};
