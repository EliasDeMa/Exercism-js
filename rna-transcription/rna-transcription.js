//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const TRANSCRIPTION = { 
  A: 'U',
  T: 'A',
  C: 'G',
  G: 'C'
}

export const toRna = (strand) => {
  return [...strand].map(c => TRANSCRIPTION[c]).join('');
};