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

  const [newValue, setNewValue] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(newValue.toLowerCase())
  );

  const handleFilter = (e) => setNewValue(e.target.value);

  const addContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox newValue={newValue} onChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
