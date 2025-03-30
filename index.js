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

function getMathResult(base, replyCount) {
  if (typeof replyCount !== "number" || replyCount <= 0) {
      return base
  }
  let splitter = `${base}---`;
  for (let i = 2; i<=replyCount; i++) {
    splitter += `${base*i}`;
    if (i<replyCount) {
        splitter += '---'
    }
  }
  return splitter
}

