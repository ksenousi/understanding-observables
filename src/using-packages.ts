import { Observable, Subject } from "rxjs";
console.clear();

const observable: Observable<number> = new Observable(obs => {
  obs.next(Math.random()); // will return different numbers for each subscription
});

observable.subscribe(x => console.log("1: observable: ", x));
observable.subscribe(x => console.log("2: observable: ", x));

const subject: Subject<number> = new Subject();

subject.subscribe(x => console.log("1: subject: ", x));
subject.subscribe(x => console.log("2: subject: ", x));

subject.next(Math.random()); // will return same number for all subscriptions
