// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const shuffle = (a) => {
    let j, x;

    for (let i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

    return a;
}

const generateNames = () => {
    let names = [];

    for (let letterOne of ALPHABET) {
        for (let letterTwo of ALPHABET) {
            for (let i = 0; i < 1000; i++) {
                let name = letterOne + letterTwo + String(i).padStart(3, '0');
                names.push(name)
            }
        }
    }

    return shuffle(names);
}

const ALL_NAMES = generateNames();
let COUNTER = 0;

export class Robot { 
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
        let name = ALL_NAMES[COUNTER];
        COUNTER += 1;
        return name;
    }
}

Robot.releaseNames = () => { 
    COUNTER = 0; 
}
