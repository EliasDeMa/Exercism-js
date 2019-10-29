//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Date uses milliseconds, so one gigasecond is given by 10^9 * 10^3 milliseconds
const GIGASECOND = 1e12 

export const gigasecond = (startDate) => new Date(Number(startDate) + GIGASECOND);
