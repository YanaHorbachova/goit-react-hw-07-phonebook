import React, { Component } from 'react';
import { connect } from "react-redux";
import { phonebookOperations } from "../../redux/phonebook/";
import { getFilteredContacts, getIsLoading, getError} from "../../redux/phonebook/phonebook-selectors";
import Loader from '../Loader';
import ContactListItem from "./ContactListItem";
import "./ContactList.css";
import PropTypes from "prop-types";


class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact, isLoadingContacts, error } = this.props;
    return (
      <>
      {isLoadingContacts && <Loader />}
      {error && <h2>404 Not Found</h2>}

  <ul className="contact-list">
    {contacts.map((contact) => (
      <ContactListItem
        id={contact.id}
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />))}
   </ul>
   </>
);}
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  isLoadingContacts: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(phonebookOperations.deleteContact(contactId)),
    fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
