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
        return (
            (!filters.firstName || contact.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
            (!filters.lastName || contact.lastName.toLowerCase().includes(filters.lastName.toLowerCase())) &&
            (!filters.dob || contact.dob === filters.dob) &&
            (!filters.address || contact.address.toLowerCase().includes(filters.address.toLowerCase())) &&
            (!filters.city || contact.city.toLowerCase().includes(filters.city.toLowerCase())) &&
            (!filters.state || contact.state.toLowerCase() === filters.state.toLowerCase()) &&
            (!filters.zip || contact.zip.includes(filters.zip)) &&
            (!filters.email || contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
            (!filters.phone || contact.phone.includes(filters.phone))
          );
    });
    setFilteredContacts(results);
  };

  return (
    <div>
      <h2 class="searchHeader">Search for a Contact</h2>
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
