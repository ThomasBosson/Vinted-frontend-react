import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const Range = ({ priceRange, setPriceRange }) => {
  const useStyles = makeStyles({
    root: {
      color: "#2cb1ba",
      width: 300,
    },
  });

  const handleChange = (e, newValue) => {
    setPriceRange(newValue);
  };

  const classes = useStyles();

  return (
    <div className="range-filter">
      <span style={{ marginRight: 10, color: "grey", fontSize: 12 }}>
        Prix entre :
      </span>
      <Slider
        className={classes.root}
        value={priceRange}
        min={0}
        max={500}
        step={10}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default Range;
