import React from "react";

export const ContactPicker = ( { contacts, setContact} ) => {
  console.log('inside ContactPicker.js');
  console.log(contacts);

  return (
    <>
      <label htmlFor="contacts">Contact Name:
        <select name='contacts' id='contacts' onChange={({target}) =>{setContact(target.value)} }>
          <option value="" disabled selected>No Contact Selected</option>
          {
            contacts.map((contact,index) =>{
              return (<option key={index} value={contact.name}>{contact.name}</option>);
            })
          }        
        </select>
      </label>
      
    </>
  );
};
