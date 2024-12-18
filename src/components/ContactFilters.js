import React, { useState } from "react";
import contacts from "./contacts.json";

const uniqueStates = [...new Set(contacts.map(contact => contact.state))];

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
    <div class="filter-container" onKeyDown={(event) => {
        if(event.code==="Enter"){
        onSearch(filters)
    }}} >
    <div class="firstLine">
        <div class="firstName">
        <label>First Name</label>
        <input
            type="text"
            name="firstName"
            value={filters.firstName}
            onChange={handleChange}
        />
        </div>
        <div class="lastName">
        <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            value={filters.lastName}
            onChange={handleChange}
        />
        </div>
        <div class="dob">
        <label>Date of birth</label>
        <input
            type="date"
            name="dob"
            value={filters.dob}
            onChange={handleChange}
        />
        </div>
        <div class="streetAddress">
        <label>Street address</label>
        <input
            type="text"
            name="streeAddress"
            value={filters.streeAddress}
            onChange={handleChange}
        />
        </div>
    </div>
    <div class="secondLine">
        <div class="email">
        <label>Email address</label>
        <input
            type="email"
            name="email"
            value={filters.email}
            onChange={handleChange}
        /> 
        </div>
        <div class="phone">
        <label>Phone number</label>
        <input
            type="text"
            name="phone"
            value={filters.phone}
            onChange={handleChange}
        />
        </div>
        
        <div class="city">
        <label>City</label>
        <input
            type="text"
            name="city"
            value={filters.city}
            onChange={handleChange}
        />
        </div>
        <div class="state">
        <label>State</label>
        <select
            type="select"
            id="state"
            name="state"
            value={filters.state}
            onChange={handleChange}
            defaultValue="None"
        >
            <option key="None" value=""></option>
            {uniqueStates.map((state) => <option key={state} value={state}>{state}</option>)}
        </select>
        </div>
        <div class="zipCode">
        <label>Zip code</label>
        <input
            type="text"
            name="zipCode"
            value={filters.zipCode}
            onChange={handleChange}
        />
        </div>
    </div>
    <div class="submit">
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default ContactFilters;
