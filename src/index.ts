/**
 * Factorial program
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * factorial
 *
 * @param {number} accepts a string
 * @returns {number} returns, using recursion
 */
function factorial(num: number): number {
  let firstInt
  if (num === 0) {
    firstInt = 1
  } else if (num < 0) {
    firstInt = -1
  } else {
    firstInt = factorial(num - 1) * num
  }
  return firstInt
}

// input
const userInput = prompt('Enter a number: ')
try {
  const userNum = parseInt(userInput)
  if (isNaN(userNum)) {
    console.log('Invalid input, try again.')
  } else {
    console.log(`${userNum}! = ${factorial(userNum)}`)
  }
} catch (e) {
  console.log('ERROR:')
}

console.log('\nDone.')
