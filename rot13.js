import { encode26, decode26, notLowerCaseLetter } from './utils.js';

/**
 * ROT-13 Cipher
 */
const encrypt = (input) => {
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
