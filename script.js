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

// No JS não existem classes, todos os objetos estão linkados a um "Prototype".

// Os Objetos são criados de maneira programatica usando Construtores () que são funções que fazem o papel de uma "classe", passando para o objeto quais propriedades eles vão carregadar:

// Exemplo
