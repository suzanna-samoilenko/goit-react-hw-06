import { useState, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import styles from "/src/App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts?.length) {
      return savedContacts;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
