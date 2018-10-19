// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yellow = 2
// }
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yellow"] = 4] = "Yellow";
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 4] = "Green";
})(Signal || (Signal = {}));
var result;
console.log(Signal.Yellow);
console.log(Signal[4]);
console.log(Signal.Red);
console.log(Signal);
