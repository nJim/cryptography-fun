import { encode26, decode26, notLowerCaseLetter } from './utils.js';

/**
 * Caesar Cipher
 */
export const encrypt = (input, k) => {
  // The size of the alphabet.
  const m = 26;
  let encrypted = '';

  // Encrypt on letter at a time.
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
    const E = (p + k) % m;
    const c = decode26(E);

    // Store the encrypted character on the return value.
    // Log all the things so we can marvel in the magic.
    encrypted += c;
  }
  console.log(input, '=> encrypts to =>', encrypted, '\n');
  return encrypted;
}

// 'abc' with a key of 3 becomes 'fgh'
//encrypt('abc', 5);

// Running the cipher twice does not reverse the encryption.
 const e = encrypt('to infinity and beyond', 12);
encrypt(e, 26 - 12);

// // Instead we decrypt using a the key m - k
// encrypt(e, 26 - 12);

// encrypt('its a cookbook', 10);