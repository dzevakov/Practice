class Animal {
  public voice(): void {
    console.log("animal");
  }
}

class Dog extends Animal {
  public voice(): void {
    console.log("dog");
  }
}

class Cat extends Animal {
  public voice(): void {
    console.log("cat");
  }
}

const dog: Animal = new Cat();
dog.voice();
