# Cryptography Fun

This project is part of a series of sessions that I am presenting at the Four Kitchens Computer Science Practice Group. The goal is to create a practical introduction to data security and demystify some of the technologies that we use in our daily work.

## Introduction

**Cryptography** takes place at the intersection of computer science and mathematics. It allows us to safely store and transmit sensitive information in over insecure mechanisms, such as the open internet.

**Encryption** is the process of converting readable data (plaintext) into a form that hides the contents, called **ciphertext**. The reverse process is called **decryption**, converting ciphertext back to readable data.

**Ciphers** are mathematical functions used in the encryption and decryption processes. The cipher may use one or more **keys** for these processes. The key is usually only known by the person who encrypts the data and the intended recipient.

In general, the security of encrypted data is dependent on two factors: the strength of the cipher, and the secrecy of the key.

**Cryptanalysis** is the process of breaking, hacking, or cracking encrypted messages.

## Types of Ciphers

- [Classical/Substitution](./SUBSTITUTION.md)
- [Modern/Block](./BLOCK.md)

## Scope of Examples

While most ciphers can encrypt n-number of characters, most examples in the repo will limit plaintext to lowercase English characters. Spaces, punctuation, and any other unknown symbol will simply be left unencrypted to keep these examples focused in their scope. Feel free to contribute your own examples to this project.

## Resources

- [Encoding Ascii](https://asecuritysite.com/coding/asc2)
