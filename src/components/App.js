import React, { useState, Fragment } from "react";
import "../styles/App.css";

// We should be storing this in useRef
let timeoutId = null;

const App = () => {
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [numbersToDisplay, setNumbersToDisplay] = useState([]);
  const [currentActiveNumber, setCurrentActiveNumber] = useState(null);

  function addNumberToScreen(number) {
    clearTimeout(timeoutId);

    if (isPowerOn === false) {
      return;
    }

    setNumbersToDisplay([...numbersToDisplay, number]);
    setCurrentActiveNumber(number);

    // Fixme
    timeoutId = setTimeout(() => setCurrentActiveNumber(null), 500);
  }

  function togglePower() {
    if (isPowerOn) {
      setNumbersToDisplay([]);
    }

    setIsPowerOn(!isPowerOn);
  }

  function showTransmission() {
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
    }, 500);
  }

  return (
    <div id="main">
      <div className="wrapper">
        <div className="tv-space">
          <div className="tv-border">
            <div
              className="tv-container"
              id="container"
              style={{
                color: "white",
                fontFamily: "roboto/serif",
                padding: "10px",
                backgroundColor: isPowerOn ? "dark-grey" : "black",
              }}
            >
              {isPowerOn === false && <center>Power Off</center>}
              {numbersToDisplay.map((number, index) => (
                <Fragment key={index}>
                  <center>
                    <span
                      style={{
                        marginLeft: "10px",
                        display: "inline-block",
                      }}
                    ></span>
                  </center>
                  {number}
                </Fragment>
              ))}
            </div>
            <div className="tv-nav" style={{ textAlign: "center" }}>
              <br />{" "}
              <span className={isTransmitting ? "dot clicked" : "dot"}></span>{" "}
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="pult">
          <span className={isTransmitting ? "dot clicked" : "dot"}></span>
          <div className="block title"></div>
          <div className="block block-navigate">
            <button
              type="button"
              className="btn top-navigate power-off"
              id="power-off"
              onClick={() => {
                togglePower();
                showTransmission();
              }}
            ></button>
          </div>
          <div className="block block-channel">
            <button
              type="button"
              className={
                currentActiveNumber === 1
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(1);
                showTransmission();
              }}
              id="1"
            >
              1
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 2
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(2);
                showTransmission();
              }}
              id="2"
            >
              2
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 3
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(3);
                showTransmission();
              }}
              id="3"
            >
              3
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 4
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(4);
                showTransmission();
              }}
              id="4"
            >
              4
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 5
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(5);
                showTransmission();
              }}
              id="5"
            >
              5
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 6
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(6);
                showTransmission();
              }}
              onMouseDown={showTransmission}
              id="6"
            >
              6
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 7
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(7);
                showTransmission();
              }}
              id="7"
            >
              7
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 8
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(8);
                showTransmission();
              }}
              id="8"
            >
              8
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 9
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(9);
                showTransmission();
              }}
              id="9"
            >
              9
            </button>
            <button
              type="button"
              className={
                currentActiveNumber === 0
                  ? "btn channel cnl-namber active-channel"
                  : "btn channel cnl-namber"
              }
              onClick={() => {
                addNumberToScreen(0);
                showTransmission();
              }}
              id="0"
            >
              0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
