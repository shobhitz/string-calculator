import './App.css';
import {useState } from 'react';
import { calculate } from './helper';

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const clearResponses = () => {
    setOutput("")
    setErrorMsg("")
  }

  const calc = () => {
    clearResponses()
    const sum = calculate(input)

    if (typeof sum === "string"){
      setErrorMsg(sum)
    } else {
      setOutput(sum)
    }
  }

  return (
    <div className="App">
      <header>String Calculator</header>
      <label id="query-label">Query</label>
      <input aria-labelledby="query-label" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" name="calculate" onClick={calc}>Calculate</button>

      <label id="result">Result</label>
      <input aria-labelledby="result" value={output} readOnly/>

      {errorMsg && (
        <p name={'error'}>{errorMsg}</p>
      )}
    </div>
  );
}

export default App;
