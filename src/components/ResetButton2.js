import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";

export default function ResetButton2(props) {
  return (
    <div className="reset-buttons2">
      <button
        onClick={props.handleReset}
        className="reset-button2"
        type="submit"
      >
        <RefreshIcon />
      </button>
    </div>
  );
}
