import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector(props) {
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = value => {
    setValue(value)
    }

    useEffect(()=>{
        //send the country to create author component
        props.setCountry(value);
    },[value])

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector