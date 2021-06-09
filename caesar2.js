import { encrypt } from './caesar.js';

/**
 * Caesar Cipher
 */
const hack = (input) => {
  // Assuming a maximum of 25 character shifts.
  const m = 26;
  let messages = [];

  for (let i = 0; i < m; i++) {
    messages.push(encrypt(input, i));
  }

  console.log(messages);
}

// Break the code brute force by trying every possible key.
hack('sdc k myyulyyu');
