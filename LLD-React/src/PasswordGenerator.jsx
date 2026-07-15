import { useState } from "react";
import "./CSS/password.css";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";

    if (includeLowercase) characters += lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    if (characters.length === 0) {
      alert("Select at least one character type");
      return;
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  }

  return (
    <div className="passwordGenerator">
      <h1>Password Generator</h1>
      <p>Create a secure and strong password to keep your account safe.</p>

      <div className="passwordGenerator-container">
        <label htmlFor="passwordLength">
          Password Length
          <input
            type="number"
            id="passwordLength"
            min="1"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            data-testid="length-input"
          />
        </label>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              data-testid="lowercase-checkbox"
            />
            Include Lowercase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              data-testid="uppercase-checkbox"
            />
            Include Uppercase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              data-testid="number-checkbox"
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              data-testid="symbols-checkbox"
            />
            Include Symbols
          </label>
        </div>

        <button
          className="generate-btn"
          onClick={generatePassword}
          data-testid="generate-button"
        >
          Generate
        </button>

        {password && (
          <div className="password-output">
            <h3>Generated Password</h3>
            <input type="text" value={password} readOnly />
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
