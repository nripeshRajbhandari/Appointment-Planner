import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName] = useState('');
  const [ phone, setPhone] = useState('');
  const [ email, setEmail] = useState(''); 
  const [ isDuplicate, setIsDuplicate] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    
    if(!isDuplicate){
      const newContact = {
        name : name,
        phone : phone,
        email : email
      };
      addContacts(newContact);
      setName('');
      setEmail('');
      setPhone('');
    } else {
      console.log('Duplicate Name: Entry Already Exists');
      alert('Duplicate Entry: Name Already Exists!!');
    }
  };

  useEffect(()=>{
    const duplicateCheck = contacts.some( contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() )
    
    setIsDuplicate(duplicateCheck);
    return ()=>{console.log('clearEffect function called...nothing to clear')};
  },[name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} setName={setName} phone= {phone} setPhone={setPhone} email= {email} setEmail={setEmail} handleSubmit={handleSubmit} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrayObjects= {contacts}/>
      </section>
    </div>
  );
};
