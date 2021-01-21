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

// ES6 Classes
