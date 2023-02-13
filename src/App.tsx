import React, { useState } from "react";

import SettingsBlock from "./SettingsBlock";

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
        <SettingsBlock
          name="Include Uppercase"
          checked={isAddCapitalLetters}
          handleChecked={setIsAddCapitalLetters}
        />
        <SettingsBlock
          name="Include Numbers"
          checked={isNumbers}
          handleChecked={setIsNumbers}
        />
        <SettingsBlock
          name="Include Symbols"
          checked={isSymbol}
          handleChecked={setIsSymbol}
        />
        <button className="GenerateButton" onClick={generate}>
          Generate password
        </button>
      </div>
    </div>
  );
}

export default App;
