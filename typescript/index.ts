//1) npm install
//2) ts-node index.ts

/**
 * Класс Создатель объявляет фабричный метод, который должен возвращать объект
 * класса Продукт. Подклассы Создателя обычно предоставляют реализацию этого
 * метода.
 */
abstract class Creator {
  /**
   * Обратите внимание, что Создатель может также обеспечить реализацию
   * фабричного метода по умолчанию.
   */
  public abstract factoryMethod(): Product;

  /**
   * Также заметьте, что, несмотря на название, основная обязанность Создателя
   * не заключается в создании продуктов. Обычно он содержит некоторую базовую
   * бизнес-логику, которая основана на объектах Продуктов, возвращаемых
   * фабричным методом. Подклассы могут косвенно изменять эту бизнес-логику,
   * переопределяя фабричный метод и возвращая из него другой тип продукта.
   */
  public someOperation(): string {
    // Вызываем фабричный метод, чтобы получить объект-продукт.
    const product = this.factoryMethod();
    // Далее, работаем с этим продуктом.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }

  private test(): void {
    console.log(111);
  }
}

/**
 * Конкретные Создатели переопределяют фабричный метод для того, чтобы изменить
 * тип результирующего продукта.
 */
class ConcreteCreator1 extends Creator {
  /**
   * Обратите внимание, что сигнатура метода по-прежнему использует тип
   * абстрактного продукта, хотя фактически из метода возвращается конкретный
   * продукт. Таким образом, Создатель может оставаться независимым от
   * конкретных классов продуктов.
   */
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

/**
 * Интерфейс Продукта объявляет операции, которые должны выполнять все
 * конкретные продукты.
 */
interface Product {
  operation(): string;
}
interface Product2 {
  operation(): string;
}

abstract class SortableCreator {
  public abstract sort(): void;

  public operation(): string {
    return "xxx";
  }
}

class CustomCreator extends SortableCreator implements ISortable {
  public sort(): void {}
}

interface ISortable {
  sort(): void;
  operation(): string;
}

class NewHashtable extends SortableCreator {
  public sort(): void {}
}

function sortData(collection: ISortable) {
  collection.sort();
}

/**
 * Конкретные Продукты предоставляют различные реализации интерфейса Продукта.
 */
class ConcreteProduct1 implements Product, Product2 {
  public operation(): string {
    return "{Result of the AAAA}";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "{Result of the BBBB}";
  }
}

/**
 * Клиентский код работает с экземпляром конкретного создателя, хотя и через его
 * базовый интерфейс. Пока клиент продолжает работать с создателем через базовый
 * интерфейс, вы можете передать ему любой подкласс создателя.
 */
function clientCode(creator: Creator) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
  // ...
}

function testInerface(test: Product) {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(test.operation());
  // ...
}

/**
 * Приложение выбирает тип создателя в зависимости от конфигурации или среды.
 */
console.log("App: 1111.");
clientCode(new ConcreteCreator1());
console.log("");

console.log("App: 2222.");
clientCode(new ConcreteCreator2());
