
const checkNegative = (num) => {
  return num < 0
}

const getStringBetween = (str, initialString, endString) => {
    return str.substr(initialString.length, str.indexOf(endString) - initialString.length);
}

const getStringFrom = (str, char) =>{
  return str.substr(str.indexOf(char)+2)
  
}

const hasHeader = (string) => {
  return string.startsWith("//")
}

const constructSeparator = (custom) => {
  const defaultDelimiter = new RegExp("[s,]+");
  if(custom.length > 0){
    const regex = new RegExp("[s," + custom + "]");
    return regex
  }
  return defaultDelimiter
}

const splitLines = (str) =>{
  const arr = str.split(/\r?\\n/);
  return arr.join()
} 

export const calculate = (str) => {
  const custom = hasHeader(str) ? getStringBetween(str, '//', '\\n') : ""
  let input = hasHeader(str) ? getStringFrom(str, '\\n') : str
  input = splitLines(input)
  const nums = input.split(constructSeparator(custom))

  const len = nums.length
  let sum = 0
  // skip negative numbers
  const negative = nums.filter(checkNegative);
  if (negative.length > 0) {
    return "Negative numbers not allowed " + negative.join(",")
  }

  for(let i =0;i<len;i++){
    const num = Number(nums[i])
    if(num >= 0){
      sum += num
    }
  }
  return sum 
}