import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function ResetButton(props) {
  return (
    <div className="reset-button">
      <button
        onClick={props.handleReset}
        className="reset-buttons"
        type="submit"
      >
        <RefreshIcon />
      </button>
    </div>
  );
}
