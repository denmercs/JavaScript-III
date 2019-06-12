/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This is basically referencing to the object  that the function is called or executed. 
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function client(name) {
    console.log(this);
}

client('Dennis');

// Principle 2

// code example for Implicit Binding
const newClient = {
    name: 'James',
    age: 29,
    code: function() {
        return `${this.name} age is ${this.age} and he's one of the top CEO's.`;
    }
}

console.log(newClient.code());

// Principle 3

// code example for New Binding
function ClientRole(name, jobrole) {
    this.name = name;
    this.jobrole = jobrole;
    this.speak = function() {
        console.log(`${this.name} is the ${this.jobrole} of the company`);
    }
}

const James = new ClientRole('James', 'CEO');
James.speak();


// Principle 4

// code example for Explicit Binding
const clientInfo = {
    "name": "james",
    "role": "CEO",
    "phone": "608-123-4567"
}

const companiesBuilt = ['Tech Industry LLC', 'Testing Water LLC', 'Just a company LLC'];

function speak(company1, company2, company3) {
    return `${this.name} is the ${this.role} of the company. He built the following: ${company1}, ${company2}, and ${company3}`;
}

console.log(speak.call(clientInfo, ...companiesBuilt));