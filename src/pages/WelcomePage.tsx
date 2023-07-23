import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      welcome to the webapp; click the button to start
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        start
      </button>
    </div>
  );
};

export default WelcomePage;
