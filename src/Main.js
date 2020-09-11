import React, { useState, useEffect } from "react";
import Qs from "qs";
import GrammarForm from "./components/GrammarForm";
import ResetButton2 from "./components/ResetButton2";
import RemovableDiv from "./components/RemovableDiv";
import axios from "axios";

function Main() {
  const [inputField, setInputField] = useState("");
  const [userInput, setUserInput] = useState("");
  const [savedInput, setSavedInput] = useState("");
  const [edits, setEdits] = useState([]);
  const [charsLeft, setCharsLeft] = useState(50000);
  const [newEditState, setNewEditState] = useState("");
  const [wrongWord, setWrongWord] = useState("");
  const [checkClicked, setCheckClicked] = useState(true);

  useEffect(() => {
    checkMyGrammar();
  }, []);

  //axios call
  const checkMyGrammar = () => {
    axios({
      method: "GET",
      url: "https://proxy.hackeryou.com",
      dataResponse: "JSON",
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: "brackets" });
      },
      params: {
        reqUrl: "http://api.grammarbot.io/v2/check",
        params: {
          queryParam: userInput,
          key: "KS9C5N3Y",
          format: "JSON",
          text: userInput,
          language: "en-US",
        },
        proxyHeaders: {
          header_params: "value",
        },
        xmlToJSON: false,
      },
    })
      .then((results) => {
        console.log("results", results);
        setEdits(results.data.matches);
        //fix
        // let inputCopy = userInput.split("");
        // for (let i = results.data.matches.length - 1; i >= 0; i--) {
        //   let currentMatch = results.data.matches[i];
        //   inputCopy.splice(
        //     currentMatch.context.offest,
        //     currentMatch.context.length,
        //     currentMatch.replacements[0].value
        //   );
        // }
        // console.log(inputCopy);
        // setEditedSentece(inputCopy);

        //
        setWrongWord(
          results.data.matches.map((misspelling) => {
            console.log(misspelling);
            return userInput.slice(
              misspelling.context.offset,
              misspelling.context.offset + misspelling.context.length
            );
          })
        );
      })

      .then(() => {
        if (edits.length <= 0 && checkClicked === false) {
          setNewEditState(
            `Your sentence didn't contain any errors. Great job!`
          );
        } else if (edits.length > 0) {
          setNewEditState("");
        }
      })
      .then(() => {
        if (inputField !== "") {
          setNewEditState("");
        }
      });
  };

  //when the user types in the form
  const handleChange = (event) => {
    const charCount = event.target.value.length;
    const charLeft = 50000 - charCount;

    setInputField(event.target.value);
    setUserInput(event.target.value);
    setCharsLeft(charLeft);

    if (inputField !== "") {
      setNewEditState("");
    }
  };

  //when the user clicks the submit button
  const handleSubmit = (event) => {
    event.preventDefault();

    setSavedInput(inputField);
    setInputField("");
    setCheckClicked(false);
    if (charsLeft <= 49975) {
      checkMyGrammar();
    }
  };

  //functions for the reset button

  const initialState = () => {
    setInputField("");
    setUserInput("");
    setEdits([]);
    setSavedInput("");
    setWrongWord("");
    setNewEditState("");
    setCheckClicked(true);
  };

  const handleReset = (event) => {
    event.preventDefault();
    initialState();
  };

  return (
    <div className="main-container">
      <div className="wrapper">
        <header>
          <h1 className="main-title">GRAMMARBOT</h1>

          <div className="perfectSentence">
            <p>{newEditState}</p>
          </div>
        </header>

        <main>
          <div className="controls">
            <div className="errors">
              {/* render the information to the page */}
              <RemovableDiv
                charsLeft={charsLeft}
                savedInput={savedInput}
                edits={edits}
                newEditState={newEditState}
                wrongWord={wrongWord}
                handleReset={handleReset}
                checkClicked={checkClicked}
              />
            </div>

            {/* run the axios call in the form component upon submit */}
            {checkClicked ? (
              <GrammarForm
                run={checkMyGrammar}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                inputField={inputField}
                charsLeft={charsLeft}
                userInput={userInput}
                handleReset={handleReset}
              />
            ) : null}

            {/* reset button when grammar form is gone */}
            {checkClicked === false ? (
              <ResetButton2
                handleReset={handleReset}
                className="reset-button2"
              />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
