import React, { useState } from "react";

function App() {
  const letters =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
  const passwordLength = 10;

  const [randomPassword, setRandomPassword] = useState("");

  const generate = () => {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const random = Math.floor(Math.random() * letters.length);
      password += letters[random];
    }
    setRandomPassword(password);
  };

  return (
    <div className="Container">
      <input type="text" value={randomPassword} />
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default App;
