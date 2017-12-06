class Doggo {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  bark () {
    return "bork bork";
  }
}

class DoggoFighter extends Doggo {
  constructor(name, age, specialability){
    super(name,age);
    // super(...) is a special function usable inside a constructor that allows you to call the `constructor` of a class' parent class
    // In this case, this is the constructor of Doggo 
    this.specialAbility = specialAbility;
  }
}
