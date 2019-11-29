// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.
const RELEASE_NAMES = new Set();
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export class Robot { 
    // static releaseNames = new Set();

    constructor() {
        this._name = Robot._constructName();
    }

    reset() {
        this._name = Robot._constructName();
    }

    get name() {
        return this._name;
    }

    static _constructName() {
        let name;
        do {
            const integer_part = Math.floor((Math.random() * 1000));
            const letter_part = ALPHABET[Math.floor(Math.random() * 26)] 
                                + ALPHABET[Math.floor(Math.random() * 26)];

            name = letter_part + String(integer_part).padStart(3, '0');
        } while (RELEASE_NAMES.has(name))
        
        RELEASE_NAMES.add(name);
        return name;
    }
}

Robot.releaseNames = () => RELEASE_NAMES;
