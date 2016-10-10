const testNextGenValue = (current, index, array) => {
  console.assert(nextGenValue(current[0][0],current[0][1],current[0][2]) === current[1], `testNextGenValue ${current}` )
}
_rule.forEach(testNextGenValue)

const arraysEqual = (a, b) => {
  i = a.length
  if (b.length != i) return false
  while (i--) {
    if (a[i] !== b[i]) return false
  }
  return true
}

console.assert(
  arraysEqual(
    createRow([[1,1,1]]),
    [0,0,0]
  )
)
