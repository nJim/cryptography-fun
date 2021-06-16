import { encode26, decode26, notLowerCaseLetter } from './utils.js';

/**
 * Atbash Cipher (encoding vs encrypting)
 *
 * Encoding text allows us to represent symbols with numeric values. For a
 * character set of lower-case English letters, the alphabet includes 26 values.
 * The size of the alphabet is represented as m = 26.
 *
 * Encoding the 26 letter lower case English alphabet:
 *   a encodes to 0
 *   b encodes to 1
 *   ...
 *   z encodes to 25
 *
 * Modular arithmetic allows us to perform calculations on these encoded letters
 * without leaving the range of allowed values by assuming the alphabet wraps
 * around and repeats:
 *
 *   24 decodes to y
 *   25 decodes to z
 *   26 decodes to a (as 26 modulo m is 0)
 *
 * This allows us to create a generalized version of the Atbash Cipher using a
 * mathematic formula, where p is the encoded plaintext input and m is the size
 * of the alphabet:
 *
 * E(p) = ((m - 1)(p + 1)) % m
 *
 * The Atbash Cipher uses the same formula for decryption, where the variable c
 * is used for the encoded cipher text:
 *
 * D(c) = ((m - 1)(c + 1)) % m
 *
 * Since the alphabet is of variable size, this version of the cipher can
 * include upper case letters, non-english letters, spaces, or other symbols.
 * UTF-16 is a common encoding standard: https://asecuritysite.com/coding/asc2.
 */
const encrypt = (input) => {
  // The size of the alphabet.
  const m = 26;
  let encrypted = '';

  // Encrypt one letter at a time.
  for (const letter of input) {
    // Skip spaces and other symbols not in our alphabet.
    if(notLowerCaseLetter(letter)) {
      encrypted += letter;
      continue;
    }

    // Encode the plaintext letter into a number.
    // Encrypt the letter using the Atbash formula.
    // Decode the ciphertext from a number to a letter.
    const p = encode26(letter);
    const E = ((m - 1)*(p + 1)) % m;
    const c = decode26(E);

    // Store the encrypted character on the return value.
    // Log all the things so we can marvel in the magic.
    encrypted += c;
    console.log(letter, 'encodes to', p, 'encrypts to', E, 'decodes to', c);
  }
  console.log(input, '=> encrypts to =>', encrypted, '\n');
  return encrypted;
}

// 'abc' encrypts to 'zyx'.
encrypt('abc');

// encrypting a longer string.
encrypt('and dont call me shirley');

// Run the cipher again to decrypt the message.
const e = encrypt('and dont call me shirley');
encrypt(e);
