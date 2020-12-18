class Home {
  adress: string;

  private static instance: Home;

  private constructor(adress: string) {
    this.adress = adress;
  }

  public static getInstance(adress: string) {
    if (Home.instance === null) {
      Home.instance = new Home(adress);
    }
    return Home.instance;
  }

  public getAdress() {
    return this.adress;
  }
}

function test() {
  const firstHome = Home.getInstance("Mogilev, Gorki st., 15");
  const secondHome = Home.getInstance("Minsk, Joki st., 2");

  console.log(firstHome === secondHome ? "It works!!!" : "Something is wrong");
  return "111";
}

test();
