interface Vehicle {
  Fuel(): string;
  NumberOfWeels(): string;
  Type(): string;
}

abstract class VehicleCreator {
  public abstract factoryMethod(): Vehicle;
  public showInfo(): string {
    const product = this.factoryMethod();
    return `We create ${product.Type()} which have ${product.NumberOfWeels()}, and use ${product.Fuel()} fuel.`;
  }
}

class CarCreator extends VehicleCreator {
  public factoryMethod(): Vehicle {
    return new Car();
  }
}

class MotoCreator extends VehicleCreator {
  public factoryMethod(): Vehicle {
    return new Motobike();
  }
}

class Car implements Vehicle {
  public Fuel(): string {
    return "Diesel";
  }
  public NumberOfWeels(): string {
    return "4 weels";
  }
  public Type(): string {
    return "Car";
  }
}

class Motobike implements Vehicle {
  public Fuel(): string {
    return "Gasoline";
  }
  public NumberOfWeels(): string {
    return "2 weels";
  }
  public Type(): string {
    return "Motorbike";
  }
}

function test(creator: VehicleCreator) {
  console.log(creator.showInfo());
}

test(new CarCreator());
test(new MotoCreator());
// const mers = new CarCreator();
// console.log(mers.showInfo());
