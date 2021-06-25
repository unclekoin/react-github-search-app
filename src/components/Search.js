import React, { useContext, useState } from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
  const [value, setValue] = useState('');
  const {show} = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.key !== 'Enter') return;
    if (value.trim()) {
      console.log('Make request with:', value);
    } else {
      show('Enter the user data')
    }
  }

  return (
    <div className="form-group mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="Enter the user's nickname..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}

