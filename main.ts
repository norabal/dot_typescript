// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yellow = 2
// }

enum Signal {
    Red,
    Blue = 4,
    Yellow
}

enum Signal {
    Green = 8
}

var result: Signal;

console.log(Signal.Yellow);
console.log(Signal[4]);
console.log(Signal.Red);
console.log(Signal);
