import React, { useState } from "react";

import "./App.sass";

// инпут тип ранж, отображение пароля как в оне пассворд

function App() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  const [randomPassword, setRandomPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [isAddCapitalLetters, setIsAddCapitalLetters] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const generate = () => {
    let password = "";
    if (isAddCapitalLetters) {
      letters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (isNumbers) {
      letters += "0123456789";
    }
    if (isSymbol) {
      letters += "!@#$%^&*()";
    }

    for (let i = 0; i < passwordLength; i++) {
      const random = Math.floor(Math.random() * letters.length);
      password += letters[random];
    }
    setRandomPassword(password);
  };

  const passwordArray = randomPassword.split("");

  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="GeneratePassword">
      <div className="GeneratePasswordWrapper">
        <h1>Password Generator</h1>
        {/*<input className="PasswordInput" type="text" value={randomPassword} />*/}
        <ul className="PasswordList">
          {randomPassword
            ? passwordArray.map((item, i) => (
                <li
                  className={`PasswordList__item ${
                    numbersArray.includes(Number(item)) ? "NumberItem" : ""
                  }`}
                  key={i}
                >
                  {item}
                </li>
              ))
            : "CLICK GENERATE"}
        </ul>
        <h3>Length: {passwordLength}</h3>
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
          <input
            className="CheckBox"
            type="checkbox"
            checked={isAddCapitalLetters}
            onChange={(e) => setIsAddCapitalLetters(e.target.checked)}
          />
        </div>
        <div className="SettingsWrapper">
          <div>Include Numbers</div>
          <input
            className="CheckBox"
            type="checkbox"
            checked={isNumbers}
            onChange={(e) => {
              setIsNumbers(e.target.checked);
            }}
          />
        </div>
        <div className="SettingsWrapper">
          <div>Include Symbols</div>
          <input
            className="CheckBox"
            type="checkbox"
            checked={isSymbol}
            onChange={(e) => {
              setIsSymbol(e.target.checked);
            }}
          />
        </div>
        <button className="GenerateButton" onClick={generate}>
          Generate password
        </button>
      </div>
    </div>
  );
}

export default App;
