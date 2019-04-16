function largestSubarraySum(array) {
  let maxSum = 0
  let currSum = 0
  for (let i = 0; i < array.length; i++) {
    currSum = Math.max(0, currSum + array[i])
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}