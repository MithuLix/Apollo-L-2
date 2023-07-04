"use strict";
// null
const searchName = (value) => {
    if (value === null) {
        console.log("there is nothing to search");
    }
    else {
        console.log("searching");
    }
};
searchName(null);
// unknown
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`my speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`my speed is ${convertedSpeed}`);
    }
    else {
        console.log('there is wrong type');
    }
};
getMyCarSpeed(12);
getMyCarSpeed('80 kmh-^1');
getMyCarSpeed(true);
// never
function throwError(message) {
    throw new Error(message);
}
throwError('error did');
