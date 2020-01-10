function largestSubarraySum(array) {
  let currentSum = 0
  let currentMax = 0
  for (const num of array) {
    currentSum = Math.max(0, currentSum + num)
    currentMax = Math.max(currentSum, currentMax)
  }
  return currentMax
}
