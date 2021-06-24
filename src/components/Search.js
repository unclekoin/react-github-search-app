import React, { useContext } from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
  const {show} = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      show('This is alert!')
    }
  }

  return (
    <div className="form-group mb-3">
      <input
        className="form-control"
        type="text"
        placeholder="Enter the user's nickname..."
        onKeyPress={onSubmit}
      />
    </div>
  )
}

