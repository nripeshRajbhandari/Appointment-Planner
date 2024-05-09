import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="txtName">
        Name:
        <input type="text" id='txtName' name='txtName' value={name} onChange= {({target}) => setName(target.value)} />
      </label>
      <label htmlFor="txtPhone">
        Phone:
        <input type="tel" id='txtPhone' name='txtPhone' value={phone} onChange= {({target}) => setPhone(target.value)} />
      </label>
      <label htmlFor="txtName">
        Email:
        <input type="email" id='txtName' name='txtName' value={email} onChange= {({target}) => setEmail(target.value)} />
      </label>
      <input type="submit"/>

    </form>
  );
};

