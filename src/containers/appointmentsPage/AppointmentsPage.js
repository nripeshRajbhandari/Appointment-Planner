import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointents}) => {

  /* Define state variables for appointment info */
  const [title,setTitle] = useState('');
  const [contact,setContact] = useState('');
  const [date,setDate] = useState('');
  const [time, setTime] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data */
    // const newAppointment = { 
    //   title: title,
    //   contact: contact,
    //   date: date,
    //   time: time
    // };
    addAppointents({title:title, name:contact, date:date, time:time});
    setTitle('');
    setContact('');
    setDate('');
    setTime('');       
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} title={title} setTitle={setTitle} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arrayObjects={appointments} />
      </section>
    </div>
  );
};