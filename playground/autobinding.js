var obj = {
  name : 'George',
  printName: function(){
    console.log(`My name is ${this.name}`);
  }
};

obj.printName();
setTimeout(obj.printName.bind({name: 'Charles'}));
