//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(inputHours = 0, inputMinutes = 0) {
    const { hours, minutes } = Clock.calcRollover(inputHours, inputMinutes); 
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    const strHours = `0${this.hours}`.slice(-2);
    const strMins = `0${this.minutes}`.slice(-2);

    return `${strHours}:${strMins}`;
  }

  plus(inputMinutes) {
    return new Clock(this.hours, this.minutes + inputMinutes);
  }

  minus(inputMinutes) {
    return new Clock(this.hours, this.minutes - inputMinutes);
  }

  equals(other) {
    return this.hours == other.hours && this.minutes == other.minutes;
  }

  static calcRollover(hours, minutes) {
    const minutesPerDay = 24 * 60;
    const totalMinutes = hours * 60 + minutes;

    const calculatedMinutes = (totalMinutes % minutesPerDay + minutesPerDay) % minutesPerDay;
    
    const realHours = Math.floor(calculatedMinutes / 60);
    const realMinutes = calculatedMinutes % 60;

    return {
      hours: realHours,
      minutes: realMinutes,
    };
  }
}
