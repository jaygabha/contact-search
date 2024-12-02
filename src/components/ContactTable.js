import React, { useState } from "react";
import ReactPaginate from "react-paginate";



const ContactTable = ({ contacts, onSelectContact }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const contactsPerPage = 5;

  const offset = currentPage * contactsPerPage;
  const pageCount = Math.ceil(contacts.length / contactsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(offset, offset + contactsPerPage).map((contact) => (
            <tr key={contact.id}>
              <td>
                <input type="checkbox" class="contact-checkbox" onChange={() => onSelectContact(contact)} />
              </td>
              <td>{contact.firstName + " " + contact.lastName}</td>
              <td>{contact.dob}</td>
              <td>{contact.address}</td>
              <td>{contact.city}</td>
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageRangeDisplayed={1}          
      />
    </div>
  );
};

export default ContactTable;
