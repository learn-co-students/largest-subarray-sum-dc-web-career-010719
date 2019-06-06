function largestSubarraySum(numbers) {
  let currentSum = 0
  let currentMax = 0
  for (let i = 0; i < numbers.length; i++) {
    currentSum = Math.max((currentSum + numbers[i]), 0)
    currentMax = Math.max(currentSum, currentMax)
  }
  return currentMax
}
