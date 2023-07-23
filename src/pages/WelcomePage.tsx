// import React from "react";
// import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to the web app. Please click the button to get started.</h1>
      <p>nb:no Authorization and authentication</p>
      <p>React + TypeScript + Vite</p>
      <p>Expressjs + MongoDb</p>
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
