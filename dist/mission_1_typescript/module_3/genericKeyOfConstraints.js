"use strict";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "mr. x", age: 55 }, "age");
