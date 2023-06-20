type PersonType = {
    name: string,
    age: number,
    address: string
}

type newPersonKeyOf = keyof PersonType;

function getProperty<X, Y extends keyof X>(obj:X, key:Y) {
    obj[key]
}
const property = getProperty({name: "mr. x", age:55},"age");
