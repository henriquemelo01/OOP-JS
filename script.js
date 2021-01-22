'use strict';

// OBJECT-ORIENTED PROGRAMMING (OOP)

/*
 Organizar os códigos em "blocos de aplicações".

 Aproxima prog. da realidade - prog + contextualizada

OBS: API: é uma interface que permite a comunicação entre um código que esta fora de um objeto com o objeto (proriedades e metodos)

*/

// ==========================================

// Principais Conceitos

// Classes: permitem criarmos objetos de maneira programatica, por meio de regras o qual são descritas (descrição das propriedas e metodos, não contém nenhum dado) - Não existem no JS (Conceito de OOP)

/* Exemplo Classe + Inherit (herança) Instanciamento 

/* 

User (Parent class)
{
    user:
    password:
    email

    login(password) {
        // Login Logic 
    }
    sendMessage(str) {
        //Sending logic
    }
}


Admin (Child class)
{
    // Propriedades e metodos **herdados** da classe user

    user:
    password:
    email:
    permissions:

    login(password) {
        // Login Logic 
    }
    sendMessage(str) {
        //Sending logic
    }
}

// Criando uma instancia - objeto (Instanciamento) usando a classe User -> O objeto henrique "carrega" as propriedades da classe user preenchidas e seus metodos 

User henrique {
    user: hmelo99
    password: vq9dt9588u
    email: henriquemsm@outlook.com

    login(password)
    sendMessage(msg)

}

*/

/*  Principais Principios

- Abstração: EX: Celular = {tela ()} , basicamente consiste em colocarmos os códigos em caixas pretas (metodos) para que assim quando trabalharmos no código fora do objeto possamos chamar apenas estas caixas pretas 

- Encapsulamento: Existem propriedades/metodos de uma classe que não podem ser acessados de maneeira externa a ela (private)

- Herança : As classes podem herdam propriedades e metodos (behavior) de outras classes (parent class)

- Polimorfismo: Reescrever um metodo que foi herdado de uma class parent 

*/

// ==========================================

// OOP no JavaScript:

// Prototype Inheritance: Todos os objetos estão linkados a um prototype, o prototype também é um objeto que possui propriedades e metodos que são delegadas ao objeto que foi linkado ao mesmo, processo chamado de delegation. Obs: Estas propriedades/metodos não são copiadas para o objeto, apenas podem ser acessadas por eles

// NO JS uma insancia herda propriedades e metodos de uma "classe" (Prototype obj). Já em linguagens que trabalham com o OOP classico as classes herdam propriedades e metodos de uma outra classe

// Os Objetos são criados de maneira programatica usando Construtores () que são funções que fazem o papel de uma "classe", passando para o objeto quais propriedades eles vão carregadar:

// Exemplo

// Construtor(): São functions expressions e regular functions que são chamadas com o new

const Aluno = function (
  firstName,
  mothersFamilyName,
  birthYear,
  course,
  university
) {
  console.log(this); // Aluno {} - empty  obj

  // Definindo as propriedades que serão "levadas" para as instancias do construtor
  this.firstName = firstName;
  this.mothersFamilyName = mothersFamilyName;
  this.birthYear = birthYear;
  this.course = course;
  this.university = university;
};

// Add metodo ao prototype
// ALuno.prototype = Aluno.prototypeOfLinkedObj
Aluno.prototype.getAge = function () {
  const now = new Date();
  console.dir(now); // getFullYear metodo da propriedade protoype do construtor Date
  this.age = now.getFullYear() - this.birthYear;
  console.log(this.age);
};

Aluno.prototype.species = 'Homo Sapiens';

const henrique = new Aluno(
  'Henrique',
  'Moraes',
  1999,
  'Eng. Controle e Automação',
  'Puc'
);

// Execução do new **:

/* 1) Cria um {} - objeto vazio

   2) quando o construtor é chamado, this do construtor -> {}, força o this apontar para este objeto vazio

   3) Redefine o prototype do objeto criado para o objeto armazenado na propriedade prototype do construtor (obj__proto__ : Construtor.prototype) -> Prototype chain

   4) Retorna o Objeto 

   ----- Este processo ocorre nos Construtores e no ES6 classes (abstração dos construtores)

*/

// henrique é uma instancia do construtor Alunos, assim este carrega as propriedades que foram definidas no construtor
console.log(henrique instanceof Aluno); // true

henrique.getAge(); // this -> henrique, objeto que chama o metodo getAge()

// Observe que getAge não é um metodo do obj henrique, mas da propriedade prototype do seu construtor (henrique.__proto__ linkado ao Aluno.prototype)
console.log(henrique);
console.log(henrique.__proto__ === Aluno.prototype);
console.log(Aluno.prototype.isPrototypeOf(Aluno)); // false

// + Instancias do construtor Aluno
const ana = new Aluno('Ana', 'Santos', 2006, 'Medicina', 'UFMG');
ana.getAge();
console.log(ana);

// Prototype Chain: http://prntscr.com/xdkfzv
// EX: henrique.__proto__ : Aluno.prototype -> Como Aluno.prototype é um objeto simples, este foi criado pelo construtor Object(), assim Aluno.prototype.__proto__ : Object.prototype -> Object.prototype__proto__ : null. Quando chamamos um metodo o JS vai procura-lo seguindo a ordem dos prototypes (Primeiro procura no objeto henrique, se não encontrou, procura no seu prototype Aluno.prototype, se não encontrou procura no Object.prototype, se não encontrou = error)

console.log(henrique.__proto__.__proto__); // Object.prototype - TOP OF PROTOTYPE CHAIN
console.log(henrique.__proto__.__proto__.__proto__);

// Prototype dos Arrays
const arr = [1, 2, 3, 5, 3, 4, 5]; // = new Array()
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// Add novas funcionalidades a todos os arrays aplicando o conceito do prototype inheritance. Todo Array criado pode acessar propriedades e metodos do seu prototype. Assim, definindo um novo metodo no Array.prototype, vamos fazer com que todos os arrays sejam capaz de acessar o metodo, apesar de não possuirem. - Nunca faça isso ***

Array.prototype.unique = function () {
  return [...new Set(this)]; // this é o array que chama o metodo
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); // proto chain -> Corresponde aos parents
console.dir(x => x++); // funções também são Objetos, assim estão linkados a um prototype Function.prototype, por isso as funções também possuem metodos.

// ================= Coding Challenge #1 =================

/* Your Tasks

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

*/

// Construtor
const Car = function (marca, modelo, speed) {
  // Speed propertie corresponde a velocidade atual do carro

  // Properies representam o estado de um objeto
  this.marca = marca;
  this.modelo = modelo;
  this.speed = Math.trunc(speed);
};

// Definindo Metodos no Car.prototype que poderão ser acessados pelos objetos que estão linkados a ele através da herança.
Car.prototype.accelerate = function () {
  if (this.speed >= 220) {
    console.log(`O ${this.modelo} já atingiu sua velocidade máxima da via!!`);
    return;
  }

  this.speed += 10;
  console.log(`${this.modelo} is going at ${this.speed}km/hr`);
};

Car.prototype.break = function () {
  if (this.speed <= 0) return;
  this.speed -= 10;
  console.log(`${this.modelo} is going at ${this.speed}km/hr`);
};

const car1 = new Car('Hyundai', 'HB20', 120); // vel em km/hr
const car2 = new Car('Fiat', 'Palio', 95);

// Logging Car objects
console.log('Car1: ', car1);
console.log('Car2: ', car2);

// Car 1 :
car1.accelerate();
car1.accelerate();
car1.break();
car1.break();

// Car 2 :
car2.break();
car2.break();

// ====================================================

// ES6 Classes = Construtor(), com uma melhor e mais moderna syntaxe - Não funciona de maneira semelhante as classes tradicionais de linguagens como Java.

// class -> Quando um novo objeto é declarado class chama seu metodo constructor() que cria um novo objeto, apontando o this para o objeto criado, cria a propriedade __proto__: PersonCl.prototype, retorna novo objeto

// class expression
const PersonCl = class {};
// class declaration
class Person {
  constructor(fullName, birthYear) {
    // this.fullName = fullName;
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  //   Definindo Metodos do Prototype - Ex Person.prototype.greet, também chamados de Instance Methods

  get Age() {
    const now = new Date();
    console.log(now.getFullYear() - this.birthYear);
    return now.getFullYear() - this.birthYear;
  }

  greet() {
    console.log(`Hello, ${this._fullName}!!`);
  }

  // Como o setter foi declarado com o mesmo nome de uma propriedade do construtor, toda vez que a mesma for declarada também será chamado o setter. Entretanto, deverá ser criado uma nova propriedade para armazenar o resultado do setter para não haver conflito com a propriedade declarada no constructor.

  //  Validation EX: Setter tem a função de validar se o objeto foi declarado com o nome completo

  set fullName(name) {
    console.log(name); // fullName -> parâmetro do constructor
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  // Quando usamos obj.fullName, será chamada a função que cria a propriedade fullName
  get fullName() {
    return this._fullName;
  }

  // Static Methods - Metodos do constructor, não são herdados
  static helloWorld() {
    console.log('Hello World!!');
  }
}

const flavia = new Person('Flávia Moraes', 1968);
flavia.Age; // call get Age()
flavia.greet();
console.log(flavia.__proto__ === Person.prototype);
console.log(flavia);

const eduardo = new Person('Eduardo Stehling', 1966);

// 1. Classes are not hoisted: Não podemos utiliza-las antes de declararmos
// 2. Class are first-class citizes: Podemos passa-las como parâmetros de funções ou retorna-las em funções
// 3. Classes are executed in strict mode

// Get / Set Methods +

// Exemplo 1
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // call get latest()
account.latest = 200; // call set latest()
console.log(account.movements);

// Exemplo 2 : Modificando o objeto Person - Validation

// ====================================================

// Static Methods: Existem metodos/propriedades que só podem ser chamados/executadas pelo Objeto que os declarou (Ideia do encapasulamento - metodos privados)

// Este metodo esta linkado ao construtor e não ao seu prototype, assim nenhum metodo pode herda-lo.
const arrH1 = Array.from(document.querySelectorAll('h1'));
console.dir(arrH1);
console.log(arrH1);

// Ex 2
console.log(Math.trunc(1.548));

// Add static Method
Person.hey = function () {
  console.log('Heey there !!');
};

Person.hey(); // Metodo não é herdado
// eduardo.hey(); - O metodo hey pertence ao constructor e não ao constructor prototype
console.dir(eduardo);

// Static Method definidido no constructor Person, muito utilizado para criar helper methods
Person.helloWorld();

// Object.create() - Usando o metodo do Constructor Object podemos settar o prototype de um objeto a partir de um objeto que servira de prototype - Metodo menos utilizado para criarmos objetos, entretanto utilizamos este metodo para estabeler herança entre classes no JS - Setar Prototype Manualmente ***

const AccountProto = {
  // Simula o metodo construtor das classes, não tem nada haver com o constructor, não usamos new para chamar este metodo
  init: function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  get balance() {
    return this.movements.reduce((acc, curValue) => (acc += curValue));
  },
};

const acc1 = Object.create(AccountProto); // acc1 = {}, linkado ao AccountProto object

// Definindo propriedades no objeto
acc1.init('Henrique', 1999);
acc1.movements = [120, -150, 300, 350, -100];
console.log(acc1.balance);
console.log(acc1);

// ================= Coding Challenge #2 =================

/* Your tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h

*/

const CarCl = class {
  constructor(carBrand, speed) {
    // Definindo propriedade dos objetos
    this.carBrand = carBrand;
    this.speed = speed;
  }

  // Definindo Instance Methods -> Metodo do Carcl.prototype que serão herdados pelos objetos que foram instanciados pela class CarCl
  get speedUS() {
    return Math.trunc(this.speed / 1.6); // speed in miles per hour
  }

  set speedUS(speed) {
    this.speed = Math.trunc(speed * 1.6); // speed in  m per hour
  }

  accelerate() {
    if (this.speed >= 220) return;
    this.speed += 10;
    console.log(`${this.carBrand} going at ${this.speed} km/h`);
  }

  break() {
    if (this.speed <= 0) return;
    this.speed -= 5;
    console.log(`${this.carBrand} going at ${this.speed} km/h`);
  }
};

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.break();
console.log(ford.speedUS); // speed in miles per hour
ford.speedUS = 60;
console.log(ford);

// Herança entre classes

// Constructor ();

const PersonConstructor = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Add methods from PersonConstructor.prototype that are gonna be inherit by the instances

PersonConstructor.prototype.calcAge = function () {
  const now = new Date();
  console.log(now.getFullYear() - this.birthYear);
};

const StudentConstructor = function (firstName, birthYear, course) {
  PersonConstructor.call(this, firstName, birthYear);
  this.course = course;
};

// Setando o prototype do constructor manualmente, usando Object.create(). Devemos fazer isso antes de incluirmos novos metodos ao prototype do constructor - Linking prototype

StudentConstructor.prototype = Object.create(PersonConstructor.prototype);

StudentConstructor.prototype.intro = function () {
  console.log(`Hello, my name is ${this.firstName} and I study ${this.course}`);
};

const studentH = new StudentConstructor('Henrique', 1999, 'Engineering');
const cazzo = new StudentConstructor('Lucca', 2000, 'Computer Science');
// Prototype Chain
// StudentH__proto__ contém as propriedades e metodos do StudentConstructor.prototype  (Inherit Prototype 1)
console.log(studentH.__proto__);

// StudentConstructor é um objeto que esta linkado a propriedade Object.prototype (ou seja StudentConstructor__proto__ = Object.prototype), fazendo com que o mesmo herde todos metodos e propriedades de Object.prototype.
// Dessa forma para fazer o constructor herdar as propriedades do constructor Person devemos linkar o prototype do Stundent Construtor a propriedade prototype de Person, criando assim uma "constructor" Inherit
// StudentConstructor.prototype.__proto__ = PersonConstructor.prototype;
// or setar prototype do constructor usando Object.create()

console.log(studentH);
cazzo.intro();
studentH.calcAge();
cazzo.calcAge();

// OBS: Quando usamos Object.create() mudamos o constructor do Student.prototype para o Person, para corrigirmos isso:
console.dir(StudentConstructor.prototype.constructor);
StudentConstructor.prototype.constructor = StudentConstructor;
console.dir(StudentConstructor.prototype.constructor);

// ================= Coding Challenge #3 =================

/* Your Task:

    1. Use a constructor function to implement an Electric Car (called 'EV') as a child
    "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
    current battery charge in % ('charge' property)
    2. Implement a 'chargeBattery' method which takes an argument
    'chargeTo' and sets the battery charge to 'chargeTo'
    3. Implement an 'accelerate' method that will increase the car's speed by 20,
    and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
    km/h, with a charge of 22%'
    4. Create an electric car object and experiment with calling 'accelerate',
    'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
    you 'accelerate'! Hint: Review the definiton of polymorphism

*/

// Constructor

function EV(carBrand, model, speed, charge) {
  this.charge = charge;

  // Se apenas chamarmos o Constructor Car ele se comportaria como uma regular function, dessa forma o this iria apontar para undefined, assim usando o metodo call, setamos o this manualmente para o objeto que irá chamar o constructor EV (this)

  // this -> Objeto que chama o Constructor
  Car.call(this, carBrand, model, speed);
  /*
  this.marca = marca;
  this.modelo = modelo;
  this.speed = Math.trunc(speed); 
*/
}

// Prototype Chain: ev__proto__ -> EV.prototype (Simples Objeto) -> Object.prototype -> null

// Para as instancias do constructor EV herdarem os metodos do constructor Car, devemos linkar o prototype do EV com o prototype do Car.prototype

// Link Prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Add New Methods to the prototype
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Polymorfism - Cria um metodo no Ev.prototype -> Car.prototype, tendo em vista o prototype chain, este metodo irá "sobreescrever" o metodo que esta no prototype do Car.prototype, uma vez que este foi definidido a uma camada acima, ou seja, no class child Ev.prototype
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 0.01;
  console.log(`Tesla going at ${this.speed}
  km/h, with a charge of ${this.charge * 100}%`);
};

const tesla = new EV('Tesla', 'Model-X', 120, 0.23);

// Testing Data
tesla.chargeBattery(0.9);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.break();
tesla.break();

console.log(tesla);

// =========================================

// Revisão Call

// Revisão New:

// 1. Cria {}, 2. Chama função forçando o this apontar para {} , 3. Redefinir o prototype do {} - {}.__proto__ = Class/Constructor.prototype, 4. Retorna o Objeto

// Prototype Chain: {} -> Constructor.prototype -> Object.prototype -> null (Prototype Inheritance)

// =========================================

// Inherit between "Classes" - ES6 Classes

class Student {
  constructor(course, university) {
    this.course = course;
    this.university = university;
  }
}

// Extends -> link to prototype Student.prototype = Object.create(PersonCl.prototype)
class StudentCl extends Person {
  constructor(fullName, birthYear, course, university) {
    // = PersonCl.call(this,...)
    super(fullName, birthYear);

    // A declaração de metodos e propriedades do prototype do objeto que irá chamar a class sempre deverá ocorrer depois de chamar o parent do constructor - super()
    this.course = course;
    this.university = university;
  }

  introduce() {
    console.log(`Hi, my name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science', 'PUC');
martha.introduce();
martha.Age;
console.log(martha);

// OBS: Se não precisarmos incluir nenhuma nova propriedade/metodo só precisamos escrever: ChildClass extends ParentClass {}, uma vez que extendes linka o prototype da ChildClass ao  ParentClass.prototype

// Inherit between "Classes" - Object.create()
const PersonProto = {
  calcAge() {
    const now = new Date();
    console.log(now.getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

// Polymorfism : Rewriting init method
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2001, 'Engineering');
jay.calcAge();
console.log(jay);
