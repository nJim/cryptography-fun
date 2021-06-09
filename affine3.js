import { encrypt } from './affine.js';

const message = `
  my name is happy gilmore. ever since i was old enough to skate i loved hockey.
  wasn’t the greatest skater though. but that didn’t stop my dad from teaching
  me the secret of slapping the greatest slapshot. my dad worshiped hockey, my
  mom didn’t, that’s why she moved to egypt, where there’s not a hockey rink
  within 15 hundred miles. dad always took me to games to cheer for our favorite
  player, terry o’riley, the tasmanian devil. he wasn’t the biggest guy in the
  league, but he feared nobody, just like me. handsome fellow huh? he always
  said that when i grew up i could be anything i wanted to be, but i never
  wanted to be anything but a hockey player. yeah, my childhood was going great,
  but life is full of surprises.`;

const encrypted = encrypt(message, 5, 7)

/**
 * Breaking with frequency analysis
 *
 * See: https://www.browserling.com/tools/letter-frequency
 *
 * Checking the letter frequency on the original message, the top letters are:
 * e: 72
 * t: 53
 * a: 42
 * h: 39
 * o: 38
 * i: 33
 * s: 32
 * n: 27
 *
 * Which correspond to the frequency of letter used in the English language:
 * e: 12.7%
 * t: 9.1%
 * a: 8.2%
 * o: 7.5%
 * i: 7.0%
 *
 * To crack the cipher formula E = (a*p + b) % m which as two unknowns, we only
 * need to correctly guess two of the substitutions to find the key.
 */
