/* helloworld.ts */
class Greeter {

    constructor(public message: string) { }

    sayHi() {
        return "<h1>" + this.message + "</h1>";
    }
}

let greeter = new Greeter("Hello, world!");
    
//document.body.innerHTML = greeter.sayHi();

console.log(greeter.sayHi());


