import React from 'react';
import Select from 'react-select';



function NumberSelector(props,ref) {

  let options = new Array(props.size).fill().map((option,index)=>{
      return {value: index+1 , label: index+1} 
  });

  const changeHandler = value => {
    props.setNumber(value.label);
    // console.log(ref.current,"ref value");
}

  return (
    <div className="App">
      <Select
        defaultValue={null}
        onChange={changeHandler}
        options={options}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(NumberSelector);