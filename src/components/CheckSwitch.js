import { Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";

const CheckSwitch = ({ priceSwitch, setPriceSwitch }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

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

// // const PurpleSwitch = withStyles({
// //   switchBase: {
// //     color: purple[300],
// //     "&$checked": {
// //       color: purple[500],
// //     },
// //     "&$checked + $track": {
// //       backgroundColor: purple[500],
// //     },
// //   },
// //   checked: {},
// //   track: {},
// // })(Switch);

//   return (
//     <Switch
//       focusVisibleClassName={classes.focusVisible}
//       disableRipple
//       classes={{
//         root: classes.root,
//         switchBase: classes.switchBase,
//         thumb: classes.thumb,
//         track: classes.track,
//         checked: classes.checked,
//       }}
//       {...props}
//     />
//   );
