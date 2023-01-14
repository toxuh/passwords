import React, { useState } from "react";

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

  return (
    <div className="Container">
      <div>Password settings</div>
      <input
        type="number"
        value={passwordLength}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
      />
      <div>Enter password length</div>
      <input
        type="checkbox"
        checked={isAddCapitalLetters}
        onChange={(e) => setIsAddCapitalLetters(e.target.checked)}
      />
      <div>Include capital letters</div>
      <input
        type="checkbox"
        checked={isNumbers}
        onChange={(e) => {
          setIsNumbers(e.target.checked);
        }}
      />
      <div>Include numbers</div>
      <input
        type="checkbox"
        checked={isSymbol}
        onChange={(e) => {
          setIsSymbol(e.target.checked);
        }}
      />
      <div>Include special characters</div>
      <input type="text" value={randomPassword} />
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default App;
