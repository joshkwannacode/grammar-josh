import React from "react";

export default function RemovableDiv(props) {
  let data = Array.from(props.wrongWord);
  const characterCountMessage = () => {
    //if the number of characters left is 50,000 return "go ahead and write something", don't print anything
    if (props.charsLeft === 50000) {
      return null;
      //if the number of characters left is 49,975-49,999 print "must be at least 25 characters"
    } else if (props.charsLeft <= 49999 && props.charsLeft > 49975) {
      return "Must be at least 25 characters and under 50000 characters";
      //if the number of characters left is 49,974 or less, don't print an error message
    } else if (props.charsLeft <= 49975) {
      return "Must be under 5000 characters";
      //if the number of characters left is 0, write limit of 50,000 characters, don't render userInput
    } else if (props.charsLeft === 0) {
      return `You've hit the character limit!`;
    }
  };
  if (props.edits.length > 0) {
    return (
      <>
        <div className="error-border">
          <div className="errors">
            {/* display user's submitted sentence */}
            <div className="user-input">
              <p className="text-title">User Input:</p>
              <p>{props.savedInput}</p>
            </div>
            {/* display user's errors*/}
            <div className="errorMessage">
              <div className="wrongWords">
                <p className="text-title">Error(s) found:</p>
                <ol>
                  {data.map((word, index) => {
                    return <li key={index}>{word}</li>;
                  })}
                </ol>
                {/* map over the array resulting from the axios call in order to find the error messages */}
                <ul>
                  {props.edits.map((errorMessages, index) => {
                    return (
                      <li key={index}>
                        {/* display the error message(s) on the page */}
                        <p>{errorMessages.message}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (
    props.edits.length === 0 &&
    props.checkClicked === false &&
    props.isLoading === true
  ) {
    return (
      <div className="no-errors">
        <h2>No errors found in your sentence!</h2>
      </div>
    );
  } else {
    return (
      <div className="error-handling">
        <h3 className="type-title">Type a sentence below.</h3>
        {/* error handling messages if necessary */}
        <p className="character-count-message">{characterCountMessage()}</p>
      </div>
    );
  }
}
