import React, { useState } from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="txtTitle">Title:
        <input type="text" id="txtTitle" name="title" value={title} onChange={({target})=>setTitle(target.value)} />      
      </label>
      <ContactPicker contacts={contacts} setContact={setContact} />
      <label htmlFor="txtDate">Date:
        <input type="date" id="txtDate" name="Date" value={date} onChange={({target})=>setDate(target.value)}/>      
      </label>
      <label htmlFor="txtTime">Date:
        <input type="time" id="txtTime" name="Time" value={time} onChange={({target})=>setTime(target.value)}/>      
      </label>
      
      <input type="submit"/>
    </form>    
  );
};
