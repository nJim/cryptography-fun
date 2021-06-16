import { encode26, decode26, notLowerCaseLetter } from './utils.js';

/**
 * ROT-13 Cipher
 *
 * Rotating by 13 characters (ROT-13) is a simple substitution cypher. Encoding
 * the input to a 26 letter alphabet creates a simple cipher equation where the
 * alphabet is shifted by 50% of it's length (13 places). That is:
 *
 *   a encodes to 0, encrypts to 13, decodes to n
 *   b encodes to 1, encrypts to 14, decodes to o
 *   c encodes to 2, encrypts to 15, decodes to p
 *   ...
 *   z encodes to 25, encrypts to 0, decodes to a
 *
 * The encryption creates an alphabet where the letters reflect itself, so that
 * a always encrypts to z and z always encrypts to a. Because of this, the same
 * function can be used to encrypt and decrypt and a key is not required.
 * Modular arithmetic represents this shift of 13 letters as:
 *
 * c = p + 13 % m
 * p = c + 13 % m
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
    const E = (p + 13) % m;
    const c = decode26(E);

    // Store the encrypted character on the return value.
    // Log all the things so we can marvel in the magic.
    encrypted += c;
    console.log(letter, 'encodes to', p, 'encrypts to', E, 'decodes to', c);
  }
  console.log(input, '=> encrypts to =>', encrypted, '\n');
  return encrypted;
}

// 'abc' encrypts to 'nop'.
encrypt('abc');

// Run the cipher again to decrypt the message.
const e = encrypt('bye felicia');
encrypt(e);
