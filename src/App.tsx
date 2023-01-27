import React, { useState } from "react";

import "./App.sass";

function App() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()";

  const [randomPassword, setRandomPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [isAddCapitalLetters, setIsAddCapitalLetters] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const generate = () => {
    let password = "";
    if (isAddCapitalLetters) {
      letters += letters.toUpperCase();
    }
    if (isNumbers) {
      letters += numbers;
    }
    if (isSymbol) {
      letters += symbols;
    }

    for (let i = 0; i < passwordLength; i++) {
      const random = Math.floor(Math.random() * letters.length);
      password += letters[random];
    }
    setRandomPassword(password);
  };

  return (
    <div className="GeneratePassword">
      <div className="GeneratePasswordWrapper">
        <h1>Password Generator</h1>
        <div className="PasswordList">
          {randomPassword ? (
            randomPassword.split("").map((item, i) => (
              <span
                className={`PasswordList__item ${
                  numbers.split("").includes(item) ? "NumberColor" : ""
                } ${symbols.split("").includes(item) ? "SymbolColor" : ""}`}
                key={i}
              >
                {item}
              </span>
            ))
          ) : (
            <span className="PasswordList__item">CLICK GENERATE</span>
          )}
        </div>
        <h3>
          Length: <span>{passwordLength}</span>
        </h3>
        <div className="RangeWrapper">
          <span>4</span>
          <input
            type="range"
            value={passwordLength}
            min="4"
            max="32"
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
          <span>32</span>
        </div>
        <h3>Settings</h3>
        <div className="SettingsWrapper">
          <div>Include Uppercase</div>
          <label className="Switch">
            <input
              className="Checkbox"
              type="checkbox"
              checked={isAddCapitalLetters}
              onChange={(e) => setIsAddCapitalLetters(e.target.checked)}
            />
            <span className="SwitchWrapper" />
          </label>
        </div>
        <div className="SettingsWrapper">
          <div>Include Numbers</div>
          <label className="Switch">
            <input
              className="Checkbox"
              type="checkbox"
              checked={isNumbers}
              onChange={(e) => {
                setIsNumbers(e.target.checked);
              }}
            />
            <span className="SwitchWrapper" />
          </label>
        </div>
        <div className="SettingsWrapper">
          <div>Include Symbols</div>
          <label className="Switch">
            <input
              className="Checkbox"
              type="checkbox"
              checked={isSymbol}
              onChange={(e) => {
                setIsSymbol(e.target.checked);
              }}
            />
            <span className="SwitchWrapper" />
          </label>
        </div>
        <button className="GenerateButton" onClick={generate}>
          Generate password
        </button>
      </div>
    </div>
  );
}

export default App;
