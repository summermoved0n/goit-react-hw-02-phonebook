import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetSubmit();
  };

  resetSubmit = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const inputNameId = nanoid();
    const inputNumberId = nanoid();

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={inputNameId}>
          Name <br />
          <input
            type="text"
            name="name"
            value={name}
            id={inputNameId}
            required
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <label htmlFor={inputNumberId}>
          Number <br />
          <input
            type="tel"
            name="number"
            value={number}
            id={inputNumberId}
            required
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
