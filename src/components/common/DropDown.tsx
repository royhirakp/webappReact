import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../app/hooks";
export default function DropDown(props) {
  const [catagoryOptionArr, setcatagoryOptionArr] = React.useState([]);
  const data = useAppSelector((s) => s.productfilterData.Filter);

  React.useEffect(() => {
    function findoptionForDropdown() {
      let set = new Set();
      let arr = [];

      for (let i in data) {
        set.add(data[i].data);
      }
      for (let i of set) {
        arr.push(i);
      }
      setcatagoryOptionArr(arr);
      // console.log(catagoryOptionArr);
    }
    findoptionForDropdown();
  }, [data]);

  const handleChange = (event: SelectChangeEvent) => {
    // console.log(event.target);
    // console.log(props);
    props.setOption(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 10, maxWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          select product Catagory
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.option}
          label="select product Catagory"
          onChange={handleChange}
        >
          {catagoryOptionArr.map((item, i) => {
            return (
              <MenuItem key={i * 55.25} value={`${item}`}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
