import {Observable} from "rxjs/Rx";
import {add} from './mod1';

let result = add(1, 2);

class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    greeter() {
        return "Hello, " + this.firstName + " " + this.lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}


var user = new Student("Jane", "M.", "User");

const app: HTMLDivElement = <HTMLDivElement>document.getElementById('app');
app.innerHTML = user.greeter() + `<br><p>and, function add equal: ${result}`;



const add1 = (x:number)=> x + 1;
const square = (x:number) => x * x;


// rxjs sample
const startBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('start');
const btnClick$ = Observable.fromEvent(startBtn, 'click');
const mapBtn$ = btnClick$.map((event)=>{
    console.log('map');
    return event;
});

mapBtn$.subscribe((event)=>{
    console.log(event);
});

btnClick$.subscribe((event)=> console.log(event));

// interval
const interval$ = Observable.interval(1000);
const doneMapInterval$ = interval$.map(add1)
    .map(square);

doneMapInterval$.subscribe(x=>{
    console.log(x);
});
