// import { encode26, decode26, notLowerCaseLetter } from './utils.js';

const encodeBinary = (input) => {
  let encoded = '';
  for (const letter of input) {
    const uft16 = letter.charCodeAt(0).toString(2);
    encoded += "00000000".substr(uft16.length) + uft16;
  }
  return encoded;
}

const decodeBinary = (input) => {
  let decoded = '';
  let chars = input.match(/.{1,8}/g);
  console.log(chars)
  for (const binary of chars) {
    decoded += String.fromCharCode(parseInt(binary, 2));
  }
  console.log(decoded)
}

const split = (input) => {
  const left = input.substring(0, (input.length/2));
  const right =  input.substring(input.length/2);
  return [left, right];
}

const applyFunction = (input) => {
  return input.slice(-1) + input.slice(0, -1);
}

const stringXor = (a, b) => {
  let value = '';
  for (let i = 0; i < a.length; i++) {
    value += Number(a[i]) + Number(b[i]) == 1 ? 1 : 0
  }
  return value;
}

const iterate = (left, right) => [right, stringXor(left, applyFunction(right))];

const swap = (left, right) => [right, left];


/**
 * Feistel Cipher
 */
const encrypt = (input) => {
  const encoded = encodeBinary(input);
  let [left, right] = split(encoded);

  const iterations = 2;
  for (let i = 0; i < iterations; i++) {
    [left, right] = iterate(left, right);
  }

  [left, right] = swap(left, right);
  const encrypted = [left, right].join('');

  decodeBinary(encrypted);
}


encrypt('pizza');
encrypt('v{*;§');
