class User{
    // public name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    constructor(
        public name: string,
        private _gender: string) {
    }
    sayHi(): void{
        console.log("Hi! I am " + this.name + ", " + this.gender + ".");
    }

    get gender() {
        return this._gender;
    }

    set gender(newValue: string) {
        console.log(this.name + " made a big decision...");
        this._gender = newValue;
    }
}

let tom = new User("Tom", "male");
// console.log(tom.name + ' is ' + tom.gender);
tom.sayHi();

tom.gender = 'female';

tom.sayHi();