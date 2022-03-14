import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector({onChange}){
  const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date)=>{
      setStartDate(date);
       onChange(date);
    }

  return (
    <DatePicker selected={startDate} onChange={handleDateChange} />
  );
};