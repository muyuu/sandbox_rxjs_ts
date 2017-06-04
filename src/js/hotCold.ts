import {Observable} from "rxjs/Rx";

const cold = ()=>{
    let source = Observable.interval(1000);

    let subscription1: any = source.subscribe((x)=>{
        console.log(`Observer 1: onNext: ${x}`);
    });

    let subscription2: any;
    setTimeout(()=>{
        subscription2 = source.subscribe((x)=>{
            console.log(`Observer 2: onNext: ${x}`);
        });
    }, 2000);

    setTimeout(()=>{
        subscription1.unsubscribe();
        subscription2.unsubscribe();

        console.log(`-----------------------------`);
        hot();
    }, 5000);

};

const hot = ()=>{
    let source = Observable.interval(1000);
    
    // convert hot observable
    let hot = source.publish();

    let subscription1 = hot.subscribe((x)=>{
        console.log(`Observer 1: onNext: ${x}`);
    });

    console.log('Current Time after 1st subscription: ' + Date.now());

    setTimeout(()=>{
        // connect source when use .connect()
        hot.connect();

        console.log('Current Time after connect: ' + Date.now());

        setTimeout(()=>{
            let subscription2 = hot.subscribe((x)=>{
                console.log(`Observer 2: onNext: ${x}`);
            });

            setTimeout(()=>{
                subscription1.unsubscribe();
                subscription2.unsubscribe();
            }, 5000);
        }, 3000);
    }, 3000);
};

export default cold;
