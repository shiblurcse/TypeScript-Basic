"use strict";
//==number, string, boolean==//
let age = 30;
let club = 'Paris';
const isFamous = false;
let famous;
famous: true;
console.log(isFamous);
console.log(club);
////==End number, string, boolean==//
//===function parameter type==//
function add(num1, num2) {
    return num1 + num2;
}
add(3, 40);
add('shiblur', 'lipu');
add(4, 'Someone');
//another
function fullName(FirstName, LastName) {
    return FirstName + ' ' + LastName;
}
const user = fullName('Shiblur Rahman', 'Lipu');
console.log(user);
//==End function parameter type==//
//===Arrow function type==//
let multiply2;
multiply2 = (x, y) => x * y;
const multiply = (x, y) => x * y;
console.log(multiply(2, 6));
//===End arrow function type==//
//===Array and Object type==//
const number = [3, 10, 22, 30, 40, 50, 60];
number.push(22);
// console.log(number);
const friends = ['Shiblur', 'Rahman', 'Lipu', 'Sohan'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const name = friends[i];
    if (name.length > megaName.length) {
        megaName = name;
    }
}
console.log('Largest Name:', megaName);
//Object
const friend = {
    name: 'lipu',
    age: 23
};
friend.age = 27;
console.log(friend.age);
const neymar = {
    name: 'Neymar',
    club: 'Paris',
    salary: 500000,
    wife: 'Some name',
    age: 22,
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 3000000,
    age: 30,
    wife: 'Some name',
    isPlaying: false
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 30, salary: 10000 };
getBonus(neymar, ['Shiblur', 'Rahman']);
//===End Interface and use complex parameter type===//
//===type in class===//
class person {
    constructor(name, father) {
        this.name = name;
        this.partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
//normal
const lipu = new person('Shiblur', 'Rahman');
console.log('Name:', lipu.name, lipu.fatherName);
const lipuName = lipu.getName();
console.log(lipuName);
// //private
// lipu.partner = 'khela hobe';
// //readonly
// lipu.fatherName = 'Rahman';
//===End type in class===//
