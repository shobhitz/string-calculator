import './App.css';
import {useState} from 'react';

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const calc = () => {
    const nums = input.split(',')
    const len = nums.length
    let sum = 0
    
    for(let i =0;i<len;i++){
      const num = Number(nums[i])
      if(num >= 0){
        sum += num
      }
    }
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
