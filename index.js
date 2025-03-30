// MAKING A CORRECT TRIANGLE 
const foo = (lines) => {
  let res = ''
  let zeroCount = 1
  for (let i = lines; i >= 0; i--) {
    res+=" ".repeat(i);
    res+= '*'.repeat(zeroCount);
    res+='\n'
    zeroCount += 2
  }
  return res
}