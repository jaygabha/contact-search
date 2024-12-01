import React from "react";

const SelectedContact = ({ contact }) => (
  <div>
    <h2>Selected Contact</h2>
    <p>Name: {contact.firstName + " " + contact.lastName}</p>
    <p>Email: {contact.email}</p>
    <p>Phone: {contact.phone}</p>
    <p>Address: {contact.address}</p>
  </div>
);

export default SelectedContact;
