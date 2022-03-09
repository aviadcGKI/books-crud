import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export const CountrySelector = React.forwardRef((props, ref) => {

  const options = useMemo(() => countryList().getData(), []);

  const changeHandle = value => {
    props.onChange({ name: 'country', value: value.label });
  }
  return <Select options={options} onChange={changeHandle} ref={ref} />
})

