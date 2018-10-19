// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(5, 3));
// console.log(add(5, "hi"));

function add(a: number, b?: string): string {
    console.log(a);
    console.log(b);

    return a + b;
}

console.log(add(5, "hello"));
