import { Component } from "react";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
import shortId from "shortid";
import "./ContactForm.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortId.generate();
  phoneInputId = shortId.generate();

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor={this.nameInputId}>
          <span className="form-label-title">Name</span>
          <input
            className="input"
            type="text"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleNameChange}
            name="name"
          />
        </label>
        <label className="form-label" htmlFor={this.phoneInputId}>
          <span className="form-label-title">Number</span>
          <input
            className="input"
            type="tel"
            id={this.phoneInputId}
            value={this.state.number}
            name="number"
            onChange={this.handlePhoneChange}
          />
          <button className="form-button button" type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(phonebookActions.addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);
