console.clear();

class Observable {
  private generateSource: Function;
  private emit: Function;
  private observer = {
    next: (value: any) => this.emit(value)
  };

  constructor(generateSource: Function) {
    this.generateSource = generateSource;
  }

  public subscribe(onEmit: Function) {
    this.emit = onEmit;
    this.generateSource(this.observer);
  }
}

class Subject {
  private callbacks: Function[] = [];

  public subscribe(callback: Function) {
    this.callbacks.push(callback);
  }
  
  public next(value: any) {
    this.callbacks.forEach((callback: Function) => callback(value));
  }
}

const observable: Observable = new Observable(observer => {
  observer.next(Math.random()); // will return different numbers for each subscription
});

observable.subscribe(value => console.log("1: observable: ", value));
observable.subscribe(value => console.log("2: observable: ", value));

const subject: Subject = new Subject();

subject.subscribe(value => console.log("1: subject: ", value));
subject.subscribe(value => console.log("2: subject: ", value));

subject.next(Math.random()); // will return same number for all subscriptions
