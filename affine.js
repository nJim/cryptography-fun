import { encode26, decode26, notLowerCaseLetter } from './utils.js';

/**
 * Affine Cipher
 */
export const encrypt = (input, a, b) => {
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
    const E = (a*p + b) % m;
    const c = decode26(E);

    // Store the encrypted character on the return value.
    encrypted += c;
  }
  console.log(input, '=> encrypts to =>', encrypted, '\n');
  return encrypted;
}

// 'abc' with a key {5,7} becomes 'hmr'
encrypt('abc', 5, 7);

// Encrypting a message with key {7,2}
encrypt('goonies never say die', 7, 2);
