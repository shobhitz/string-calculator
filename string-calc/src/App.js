import './App.css';
import {useState } from 'react';
import { calculate } from './helper';

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const calc = () => {
    const sum = calculate(input)
    setOutput(sum)
  }

  return (
    <div className="App">
      <label id="query-label">Query</label>
      <input aria-labelledby="query-label" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" name="calculate" onClick={calc}>Calculate</button>

      <label id="result">Result</label>
      <input aria-labelledby="result" value={output} readOnly/>
    </div>
  );
}

export default App;
