import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";

const HistoryCartButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="buttonContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            navigate("/history");
          }}
          variant="outlined"
        >
          History
          <HistoryIcon />
        </Button>
        <br />
        <Button
          onClick={() => {
            navigate("/cart");
          }}
          variant="outlined"
        >
          cart
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(HistoryCartButton);
