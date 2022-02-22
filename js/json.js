// JavaScript Object Notation
// JSON 
const user = {
    name: 'Samiha', id: 01, job: 'Lover',
    names: ['ahnaf', 'anika']
};
const stringify = JSON.stringify(user);
const unstingred = JSON.parse(stringify);
console.log(user);
console.log(stringify);
console.log(unstingred.name)