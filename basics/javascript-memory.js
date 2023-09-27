// premitive 
// non-premitive

const name = 'Taufeeq';
console.log(name);

let anotherName = name;
anotherName = 'Sadaf';
console.log(anotherName);

console.log(name);

const user1 = {
    'name' : 'Taufeeq',
    'age' : 27
}

const user2 = user1;

console.log(user1);
console.log(user2);

user2.name = 'Sadaf';

console.log(user1.name);

