// enum Signal {
//     Red = 0,
//     Blue = 1,
//     Yellow = 2
// }
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 4] = "Blue";
    Signal[Signal["Yellow"] = 5] = "Yellow";
})(Signal || (Signal = {}));
(function (Signal) {
    Signal[Signal["Green"] = 8] = "Green";
})(Signal || (Signal = {}));
var result;
console.log(Signal.Yellow);
console.log(Signal[4]);
console.log(Signal.Red);
console.log(Signal);
//# sourceMappingURL=main.js.map