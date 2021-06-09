# Substitution Ciphers

Substitution ciphers are one of the most common categories of ciphers. The encryption functions work by swapping each character in the plaintext with a different symbol.

## Atbash Cipher

The Atbash cipher is a substitution cipher with a specific key where the letters of the alphabet are reversed. For a 26-letter alphabet, this creates a perfect reflection of values, where A always encrypts to Z and Z always encrypts to A. For this reason, Atbash is its own inverse, where the same function can encrypt and decrypt the plaintext and ciphertext.

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
ZYXWVUTSRQPONMLKJIHGFEDCBA
```

Formula for calculating encoded cipher text 'c' from an encoded plaintext character 'p' and given an alphabet of size 'm'.

```
Encrypt: c = ((m - 1)*(p + 1)) % m
Decrypt: p = ((m - 1)*(c + 1)) % m
```

Two approaches included in this project:

- Example 1: Atbash using a fixed key for mapping letters between plaintext and cipher text.
- Example 2: Atbash using letters encoded as integers. This allows the cipher to be defined as a generalized function for an alphabet of any size.

Cracking the cipher is trivial as the function is easy to apply and does not require a key. The hacker can run the cipher text through the function and see if the result is readable plaintext.

## ROT-13

Rotate by 13 places (ROT-13) is a substitution cipher where the letters of the alphabet are shifted by half of the total alphabet length. For a 26-letter alphabet, this a predictable pattern where A always encrypts to N and N always encrypts to A. Like Atbash, the ROT-13 cipher is its own inverse, where the same function can encrypt and decrypt the plaintext and ciphertext.

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
NOPQRSTUVWXYZABCDEFGHIJKLM
```

Formula for calculating encoded cipher text 'c' from an encoded plaintext character 'p' and given an alphabet of size 'm'.

```
Encrypt: c = (p + 13) % m
Decrypt: p = (c + 13) % m
```

This has the same limitations and vulnerabilities of the Atbash Cipher. An example implementation is included as this is a good segway to the Caesar Cipher.

## Caesar Cipher

Also known as a shift cipher, this encryption substitutes a plaintext character with a value that is a fixed distance away in the alphabet. This method is named after Julius Caesar as he was known to use the cipher in private correspondence.

A key is a piece of information (usually numbers of letters) that is used within encoding and decoding functions. Preserving the secrecy of keys is an entire branch of cryptographic sciences. For the Caesar Cipher, the key is the number of letters shifted in the encryption. ROT-13 is an example of a Caesar Cipher with a key of 13.

```
Encrypt: c = (p + k) % m
Decrypt: p = (c + m - k) % m
```

The key is symmetric as the value of the key must be shared by both parties to encrypt or decrypt messages. Security is still low as the cipher allows a limited number of possible keys based on the side of the alphabet.

## Affine Cipher

There are many other variations of substitution ciphers, but all of them scale up in complexity through the same basic means: introduce more complex cipher function and introduce more complex keys. The Affine cipher is one such example where the substitution shift follow a larger linear scale and the formula requires two keys.

```
Encrypt: c = (ap + b) % m
```

The key consists of two numbers, {a,b} that must obey certain mathematic rules to ensure the alphabet maps to unique substitution values. The key is chosen that:

- 1 <= a <= m
- 1 <= b <= m
- 'a' had no factors in common with 'm' (is co-prime)

This limits 'a' values to 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23 and 25 (if the alphabet is 26 characters long). This restriction of being co-prime ensures that each letter maps to a single, unique substitution; meaning the cipher can be predictably reversed.

```
Decrypt: p = a^(-1)(c - b) % m
```

The decryption function uses a complimentary set of keys based on the original values of {a,b}. Where in algebra a^(-1) is known as the modular inverse of a. Multiplying the modular inverse of 'a' with 'a' has a modulus of 1.

```
Modular inverse: (a * a^(-1)) % m = 1
b is the same for encryption and decryption.
```

One of the major drawbacks of basic substitution ciphers is that the codes can be cracked with limited information. One technique is to use frequency analysis to guess some of the substitutions. 'E' is the most common letter used in the english language, so when a message is sufficiently long, the code-breaker simply looks for the most frequently used character and assumes it corresponds to 'E'.
