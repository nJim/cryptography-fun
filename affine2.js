import { encode26, decode26, notLowerCaseLetter } from './utils.js';

/**
 * Affine Cipher Decrypt.
 */
export const decrypt = (input, a, b) => {
  // The size of the alphabet.
  const m = 26;
  let decrypted = '';

  // Encrypt on letter at a time.
  for (const letter of input) {
    // Skip spaces and other symbols not in our alphabet.
    if(notLowerCaseLetter(letter)) {
      decrypted += letter;
      continue;
    }

    // Encode the ciphertext letter into a number.
    // Encrypt the letter using the cipher formula.
    // Decode the plaintext from a number to a letter.
    const c = encode26(letter);
    const D = (a * (c - b)) % m;
    const p = decode26(D);

    // Store the decrypted character on the return value.
    decrypted += p;
  }
  console.log(input, '=> decrypts to =>', decrypted, '\n');
  return decrypted;
}

// The original message is decrypted using a different
// formula and a complimentary set of key values.
decrypt('swwpgey peter yco xge', 15, 2);
