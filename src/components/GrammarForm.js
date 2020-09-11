import React from "react";

import ResetButton from "./ResetButton";

export default function GrammarForm(props) {
  return (
    <div className="form">
      <form action="" label="grammarForm">
        <textarea
          className="textarea"
          rows="4"
          onChange={props.handleChange}
          value={props.inputField}
          label="text"
          aria-label="enter your sentence here"
          placeholder="enter your sentence here"
        ></textarea>
        <div className="buttons">
          <ResetButton className="reset-buttons" />
          <button
            className="text-button"
            onClick={props.handleSubmit}
            disabled={props.charsLeft > 49975 ? "disabled" : null}
            type="submit"
          >
            Check my grammar!
          </button>
        </div>
      </form>
    </div>
  );
}
