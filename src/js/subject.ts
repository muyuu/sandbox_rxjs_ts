import {Observable, Subject} from "rxjs/Rx";

const subject = ()=>{
    console.log('subject');
    let source = Observable.interval(1000);
    let subject = new Subject();

    let subSource = source.subscribe(subject);

    let subSubject1 = subject.subscribe(
        (x)=>{console.log(`observer1: ${x}`)},
        (e)=>{console.log(`onError: ${e}`)},
        ()=>{console.log(`onCompleted`)}
    );

    let subSubject2 = subject.subscribe(
        (x)=>{console.log(`observer2: ${x}`)},
        (e)=>{console.log(`onError: ${e}`)},
        ()=>{console.log(`onCompleted`)}
    );

    setTimeout(()=>{
        // subject.onCompleted();
        subSubject1.unsubscribe();
        subSubject2.unsubscribe();
    }, 5000);
};

export default subject;
