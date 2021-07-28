import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input
      type="text"
      className="input"
      value={value}
      name="filter"
      onChange={onChange}
    ></input>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(phonebookActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
