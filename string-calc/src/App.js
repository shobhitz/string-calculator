import './App.css';
import {useState } from 'react';
import { calculate } from './helper';
import {Input, Button, Alert} from 'antd';

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
    <>
      <header>String Calculator</header>
      <div className="app">
        {errorMsg && (
          <Alert message={errorMsg} type='error' showIcon />
        )}
        <div className='query'>
          <label id="query-label">Query</label>
          <Input aria-labelledby="query-label" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button type="primary" name="calculate" onClick={calc}>Calculate</Button>
        </div>
        <div className='response'>
          <label id="result">Result</label>
          <Input aria-labelledby="result" value={output} readOnly/>
        </div>
      </div>
    </>
  );
}

export default App;
