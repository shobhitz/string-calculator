import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const data = [
  //0
  { query: "1,2,3,4",
    expect: "1,2,3,4"
  },
  //1
  { query: "",
    expect: "0"
  },
  //2
  { query: "1",
    expect: "1",
  },
  //3
  { query: "1,5",
    expect: "6"
  },
  //4
  { query: "1,2,3",
    expect: "6"
  },
  //5
  { query: "1,2,3,4,5,6,7",
    expect: "28"
  },
  //6
  { query: "1\\n2\\n3\\n5,6,8\\n4",
    expect: "29"
  },
  //7
  { query: "//;\\n1;2;3;5;6;8;4",
    expect: "29"
  },
  //8
  { query: "//|\\n1|2|3|5|6|8|4",
    expect: "29"
  },
  //9
  { query: "//>\\n1>2>3>5>6>8>4",
    expect: "29"
  },
  //10
  { query: "-1",
    expect: "negative numbers not allowed -1"
  },
  //11
  { query: "-1,-2,-3",
    expect: "negative numbers not allowed -1,-2,-3"
  }
]

describe("String Calculator", () => {
  test('Validate Query Input', () => {
    render(<App />);
    const queryElem = screen.getByLabelText('Query')
    expect(queryElem).toBeInTheDocument();
  });
  
  test('Validate Result Box is present', () => {
    render(<App />);
    expect(screen.getByLabelText('Result')).toBeInTheDocument()
  });

  test('Validate Calculcate Button', () => {
    render(<App />);
    const calculateBtn = screen.getByRole('button')
    expect(calculateBtn).toBeInTheDocument()
  });

  test('Simulating entering text in Query box', () => {
    render(<App />);
    const testData = data[0]
    const queryElem = screen.getByLabelText('Query')
    fireEvent.change(queryElem, {target: {value: testData.query}});
    expect(screen.getByLabelText('Query')).toHaveValue(testData.expect)
  });

  test('Return 0 with empty string', () =>{
    render(<App />);
    const testData = data[1]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  });

  test('should return 1 when string contains only 1', () =>{
    render(<App />);
    const testData = data[2]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  });

  test('should return 6 when input is 1,5', () =>{
    render(<App />);
    const testData = data[3]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  });

  test('should return 6 when input is 1,2,3', () =>{
    render(<App />);
    const testData = data[4]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should return the sum with multiple inputs', () =>{
    render(<App />);
    const testData = data[5]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should return sum when input contains newline character', () =>{
    render(<App />);
    const testData = data[6]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should return sum with custom delimiter 1(;)', () =>{
    render(<App />);
    const testData = data[7]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should return sum with custom delimiter 2(|)', () =>{
    render(<App />);
    const testData = data[8]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should return sum with custom delimiter 3(>)', () =>{
    render(<App />);
    const testData = data[9]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should throw error with negative number', () =>{
    render(<App />);
    
    const testData = data[10]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')
    fireEvent.change(queryElem, {target: {value: testData.query}});
    fireEvent.click(calculateBtn)
    
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })

  test('should throw error with multiple negative number', () =>{
    render(<App />);
    const testData = data[11]
    const calculateBtn = screen.getByRole('button')
    const queryElem = screen.getByLabelText('Query')

    fireEvent.change(queryElem, {target: {value: testData.query}});
    
    fireEvent.click(calculateBtn)
    expect(screen.getByLabelText('Result')).toHaveValue(testData.expect)
  })
})

