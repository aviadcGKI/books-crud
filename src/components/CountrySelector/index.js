import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector(props,ref) {
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = value => {
        setValue(value)
    }

    useEffect(()=>{
        //send the country to create author component
        props.setCountry(value.label);
    },[value,props])

  return <Select options={options} value={value} onChange={changeHandler} ref={ref} />
}

export default React.forwardRef(CountrySelector);