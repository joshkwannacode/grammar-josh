import React from "react";
import { Link } from "react-router-dom";

import Gif from "../assets/grammar2.gif";
import { makeStyles } from "@material-ui/core/styles";
import "../index.css";
const useStyles = makeStyles({
  button: {
    backgroundColor: "#55929a",
    color: "white",
    fontSize: "1vw",
    width: "10vw",
    marginLeft: "9vw",
  },
});

export default function FrontPage() {
  return (
    <div className="front-container">
      <div className="front-left">
        <h3 className="front-title">
          Great
          <br /> Writing,
          <br /> Simplified
        </h3>

        <p className="front-text">
          Learn bold, clear, mistake-free writing
          <br /> with GrammarBot’s AI-powered grammar teacher.
        </p>
        <div className="front-btn">
          <Link to={"/Function"}>
            <button className="button">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="front-right">
        <img className="gif" src={Gif} alt="grammarbot gif" />
      </div>
    </div>
  );
}
