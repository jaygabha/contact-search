import React, { useState } from "react";
import contacts from "./contacts.json";

const uniqueStates = [...new Set(contacts.map(contact => contact.state))];
console.log(uniqueStates)

const ContactFilters = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    streeAddress: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={filters.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={filters.lastName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dob"
        value={filters.dob}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={filters.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={filters.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="streeAddress"
        placeholder="Street address"
        value={filters.streeAddress}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={filters.city}
        onChange={handleChange}
      />
      <label for="state">State</label>
      <select
        type="select"
        id="state"
        name="state"
        placeholder="State"
        value={filters.state}
        onChange={handleChange}
        defaultValue="None"
      >
        <option key="None" value="">None</option>
        {uniqueStates.map((state) => <option key={state} value={state}>{state}</option>)}
      </select>

      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={filters.zipCode}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ContactFilters;
