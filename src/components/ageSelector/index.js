import React, { useState, useEffect } from 'react';
import Select from 'react-select';

let options = new Array(120).fill().map((option,index)=>{
    return {value: index+1 , label: index+1}
});


export default function AgeSelector(props) {
    const [value, setValue] = useState('');

  const changeHandler = value => {
    setValue(value)
}

  useEffect(()=>{
    props.setAge(value);
  },[])

  return (
    <div className="App">
      <Select
        defaultValue={value}
        onChange={changeHandler}
        options={options}
      />
    </div>
  );
}