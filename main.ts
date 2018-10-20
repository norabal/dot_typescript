class User{
    // public name: string;
    // constructor(name: string){
    //     this.name = name;
    // }
    constructor(
        public name: string,
        public gender: string
    ){
    }
    sayHi(): void{
        console.log("Hi! I am " + this.name);
    }
}

let tom = new User("Tom", "male");
console.log(tom.name, tom.gender);
tom.sayHi();
