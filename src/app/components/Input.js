import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Input = (props) => {
  const { handleChange, delay, labelText, defaultValue} = props;
  const handleChangeWithDelay = debounce((val) => {handleChange(val)}, delay);

  return (
    <FormGroup>
      {
        labelText && 
        <ControlLabel>{labelText}</ControlLabel>
      }
      <FormControl
        type='text'
        placeholder='Enter text'
        defaultValue={defaultValue}
        onChange={(e) => handleChangeWithDelay(e.target.value)}
      />
    </FormGroup>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired, 
  delay: PropTypes.number,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string
}

export default Input;
