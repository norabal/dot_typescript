// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yellow = 2
// }

enum Signal {
    Red,
    Blue = 3,
    Yellow
}

enum Signal {
    Green = 4
}

var result: Signal;

console.log(Signal.Yellow);
console.log(Signal[4]);
console.log(Signal.Red);
console.log(Signal);
