export const finalCheck = (checkData, button, reverseResult = false) => {
  const finalCheckFunction = () => {
    let result = false
    Object.values(checkData).forEach(item => {
      if (!item) {
        result = true
      }
    })
    const currentResult = reverseResult ? !result : result
    button.disabled = currentResult
    return currentResult
  }

  return {
    finalCheckFunction
  }
}
