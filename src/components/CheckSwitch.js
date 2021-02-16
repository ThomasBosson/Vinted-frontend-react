import { Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";

// Package Material UI

const CheckSwitch = ({ priceSwitch, setPriceSwitch }) => {
  // state declaration for check
  const [checked, setChecked] = useState(false);

  // handleChange initialization
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  // Switch styles template
  const CheckSwitch = withStyles({
    switchBase: {
      color: "#2cb1ba",
      "&$checked": {
        color: "#2cb1ba",
      },
      "&$checked + $track": {
        backgroundColor: "#2cb1ba",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="switch-module">
      <span style={{ marginRight: 10, color: "grey", fontSize: 12 }}>
        Triez par prix :
      </span>
      <CheckSwitch
        checked={checked}
        // if it is equal to price-asc you put price-desc and vice versa after each change
        onChange={() => {
          handleChange();
          setPriceSwitch(
            priceSwitch === "price-desc" ? "price-asc" : "price-desc"
          );
        }}
      ></CheckSwitch>
    </div>
  );
};

export default CheckSwitch;

// MATERIAL UI TEMPLATE

// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
// import Switch from '@material-ui/core/Switch';

// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: purple[300],
//     '&$checked': {
//       color: purple[500],
//     },
//     '&$checked + $track': {
//       backgroundColor: purple[500],
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

// const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

//   return (
//     <FormGroup>
//       <FormControlLabel
//         control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
//         label="Custom color"
//       />
//   );
