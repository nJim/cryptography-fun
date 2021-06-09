/**
 * Convert a single character to a numeric value.
 *
 * @param {string} input
 * @returns number
 */
export const encode26 = (input) => input.charCodeAt(0) - 97;

/**
 * Convert a numeric value to a single character.
 *
 * @param {string} input
 * @returns number
 */
 export const decode26 = (input) => String.fromCharCode(input + 97);

 /**
 * Checks if a character is a lowercase English letter.
 *
 * @param {string} input
 * @returns bool
 */
 export const notLowerCaseLetter = (input) => !input.match(/[a-z]/i);
