import React, { useState } from "react";
import ContactFilters from "./ContactFilters";
import ContactTable from "./ContactTable";
import SelectedContact from "./SelectedContact";
import contacts from "./contacts.json"; // Import JSON data



const ContactSearch = () => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (filters) => {
    const results = contacts.filter((contact) => {
      return Object.keys(filters).every((key) =>
        filters[key]
          ? contact[key].toString().toLowerCase().includes(filters[key].toLowerCase())
          : true
      );
    });
    setFilteredContacts(results);
  };

  return (
    <div>
      <h1>Contact Search</h1>
      <ContactFilters onSearch={handleSearch} />
      <ContactTable
        contacts={filteredContacts}
        onSelectContact={setSelectedContact}
      />
      {selectedContact && <SelectedContact contact={selectedContact} />}
    </div>
  );
};

export default ContactSearch;
