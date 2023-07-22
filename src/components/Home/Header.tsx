import { Button } from "@mui/material";
import RangeSlider from "../common/RangeSlider";
import DropDown from "../common/DropDown";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
const Header = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 85px 0px 85px",
        }}
      >
        <div
          className="filterContainer"
          style={{
            border: "1px solid",
            borderRadius: "6px",
            padding: "10px",
          }}
        >
          <p>Filter your products:</p>
          {/* <label htmlFor="dropdown">Select an option:</label>
          <select
            id="dropdown"
            //   value={selectedOption} onChange={handleSelectChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
          {/* <p>Selected option: {selectedOption}</p> */}
          <DropDown />
          <p>Select Price Range:</p>
          <RangeSlider />
          <Button variant="outlined">apply filter</Button>
        </div>

        <div
          className="buttonContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="outlined">
            History
            <HistoryIcon />
          </Button>
          <br />
          <Button variant="outlined">
            cart
            <ShoppingCartIcon />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
