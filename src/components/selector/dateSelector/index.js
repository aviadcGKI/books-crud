import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DateSelector(){
  const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (e)=>{
        console.log(e);
    }

  return (
    <DatePicker selected={startDate} onChange={handleDateChange} />
  );
};