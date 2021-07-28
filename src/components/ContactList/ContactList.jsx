import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

import ContactListItem from "./ContactListItem";

import "./ContactList.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contact-list">
    {contacts.map((contact) => (
      <ContactListItem
        id={contact.id}
        key={contact.id}
        name={contact.name}
        number={contact.number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(phonebookActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
