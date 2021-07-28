import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import "./styles.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="phonebook">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;