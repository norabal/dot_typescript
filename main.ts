// Generics

function getArray<T>(value: T): T[] {
    return [value, value, value];
}

console.log(getArray<number>(3));
console.log(getArray<string>("hello"));
