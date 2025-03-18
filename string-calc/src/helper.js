
const checkNegative = (num) => {
  return num < 0
}

export const calculate = (str) => {
  const nums = str.split(/[\s,\\n]+/)

  const len = nums.length
  let sum = 0
  // skip negative numbers
  const negative = nums.filter(checkNegative);
  if (negative.length > 0) {
    return "negative numbers not allowed " + negative.join(",")
  }

  for(let i =0;i<len;i++){
    const num = Number(nums[i])
    if(num >= 0){
      sum += num
    }
  }

  return sum 
}