/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  if (message.length === 0) {
    return "Fine. Be that way!";
  }

  if (message.endsWith('?')) {

    if (message === message.toUpperCase() && /[A-Za-z]/.test(message)) {
      return 'Calm down, I know what I\'m doing!';
    } else {
      return 'Sure.';
    }
  } else {

      if (message === message.toUpperCase() && /[A-Za-z]/.test(message)) {
        return 'Whoa, chill out!';
      } else {
        return 'Whatever.';
      }
  }
};
