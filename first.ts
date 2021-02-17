//==number, string, boolean==//
let age: number = 30;
let club: string = 'Paris';
const isFamous: boolean = false;
let famous: boolean;
famous: true;
console.log(isFamous);
console.log(club);

////==End number, string, boolean==//


//===function parameter type==//
function add(num1: any, num2: number | string){
    return num1 + num2;
}
add(3, 40);
add('shiblur', 'lipu');
add(4, 'Someone');

//another
function fullName(FirstName: string, LastName: string): string{
    return FirstName + ' ' + LastName;
}
const user: string = fullName('Shiblur Rahman', 'Lipu');
console.log(user);
//==End function parameter type==//



//===Arrow function type==//
let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(2, 6));

//===End arrow function type==//


//===Array and Object type==//
const number: number[] = [3, 10, 22, 30, 40, 50, 60];
number.push(22);
// console.log(number);
const friends: string[] = ['Shiblur', 'Rahman', 'Lipu', 'Sohan'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const name: string = friends[i];
    if(name.length > megaName.length){
        megaName = name;
    }
}
console.log('Largest Name:', megaName);

//Object
const friend:{name: string, age: number} = {
    name: 'lipu',
    age: 23
}
friend.age = 27;
console.log(friend.age);


//Another easy way
// let player: {                  //types
//     name: string,
//     age: number,
//     salary: number;
// }
// player = {        // value declarations
//     name: 'Shiblur Rahman',
//     age: 23,
//     salary: 50000,
// }
// console.log(player);

//===End Array and Object type==//


//===Interface and use complex parameter type===//
interface Player {   // Interface means a Structure or sample
    club:string,
    name: string,
    salary: number,
    wife?: string,
    age: number;
    isPlaying: boolean;
}
const neymar: Player = {
    name: 'Neymar',
    club: 'Paris',
    salary: 500000,
    wife: 'Some name',
    age: 22,
    isPlaying: true
}

const ronaldo: Player = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 3000000,
    age: 30,
    wife: 'Some name',
    isPlaying: false
}

function getBonus(player: Player, friends: string[]){
    return player.salary * 0.1;
}
const poorPlayer = {age:30, salary: 10000};
getBonus(neymar, ['Shiblur ', 'Rahman']);
//===End Interface and use complex parameter type===//



//===type in class===//
class person{
    name: string;
    private partner: string;
    readonly fatherName: string;
    constructor(name: string, father: string){
        this.name = name;
        this.partner = name;
        this.fatherName = father;
    }
    getName():string {
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