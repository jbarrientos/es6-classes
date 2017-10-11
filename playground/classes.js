class Person {

  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi! I'm ${this.name}`;
  }

  toString() {
    return JSON.stringify(this);
    // this.getGreeting();
  }

  getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
  }

}

class Child extends Person {

  constructor(name = 'Anonymous', age = 0, like = 'Bikes'){
    super(name, age);
    this.like = like;
  }

  getGreeting(){
    return `Hiiii! My name is ${this.name} and I like ${this.like}.`;
  }

}

class Baby extends Person{
  getGreeting(){
    return 'Wahhhhh';
  }
}


var me = new Person('George', 32);
console.log(me.getDescription());
var anonymous = new Child('Mike', 5, 'Cars');
console.log(anonymous.getGreeting());
var baby = new Baby();
console.log(baby.getGreeting());

// console.log({age: 25}.toString())
