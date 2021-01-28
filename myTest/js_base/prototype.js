class Person {
  constructor(props) {
    this.age = props.age || 0;
    this.name = props.name || 'unnamed';
  }
  greeting() {
    console.log('Hi, this is ' + this.name);
  }
}


const tommy = new Person({name: 'Tommy'});
tommy.greeting();