/**
 * Atbash Cipher
 *
 * It's possible to encrypt the Atbash cipher using a fixed key to map the
 * plaintext values to the corresponding cypher text value. But this solution
 * is limited to a fixed set of characters.
 *
 * The fixed key maps letters in a predictable way:
 *   a always encrypts to z
 *   b always encrypts to y
 *   c always encrypts to x
 *
 * The cypher is an inverse of itself so the same function will both encode and
 * decode cypher text to plain text and vise-verse:
 *   z always encrypts to a
 *   y always encrypts to b
 *   x always encrypts to c
*/
const encrypt = (input) => {
  let key = new Map([
    ['a', 'z'], ['b', 'y'], ['c', 'x'], ['d', 'w'], ['e', 'v'], ['f', 'u'],
    ['g', 't'], ['h', 's'], ['i', 'r'], ['j', 'q'], ['k', 'p'], ['l', 'o'],
    ['m', 'n'], ['n', 'm'], ['o', 'l'], ['p', 'k'], ['q', 'j'], ['r', 'i'],
    ['s', 'h'], ['t', 'g'], ['u', 'f'], ['v', 'e'], ['w', 'd'], ['x', 'c'],
    ['y', 'b'], ['z', 'a']
  ]);
  const e = [...input].reduce((a,b) => a + ( key.has(b) ? key.get(b) : b ), '');
  console.log(input, '=> encrypts to =>', e, '\n');
  return e;
}

// 'abc' encrypts to 'zyx'.
encrypt('abc')
