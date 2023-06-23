// Create a car object, add a color property to it with the value equals 'black'
const car = {};
car.color = 'black';

// Change the color property of the car object to 'green'
car.color = 'green';
console.log(car);
// Add the power property to the car object, which is a function and displays the engine power to the console

car.power = () => console.log('Power=', 232);
car.power();

// Pears and apples are accepted to the warehouse,
//  write a function that returns the result of adding the number of accepted pears and apples
function totalSum(pears, apples) {
    return pears + apples
};
console.log(totalSum('total sum = ', 3, 5));
// or
let sum = (rears, apples) => rears + apples;
console.log(sum('sum = ', 10, 5));

//  Your name is saved in the payment terminal,
// write a function to define the name in the terminal (if you entered your name, 
// then hello + name, if not, then there is no such name)
function greeting(name) {
    let myName = "Vitali";
    if (myName == name) {
        return console.log('Hello ', name);
    } else {
        return console.log('There is no such', name);
    };
}
greeting('Bob');
greeting('Vitali');

// Write a function for calculating the type of argument and type output to the console
function typeArg(arg) {
    return console.log('Type argument:', typeof (arg));
};
const typeAr = (arg) => console.log('Type argument:', typeof (arg));
typeArg(12);
typeAr('city');

//  Write a function that determines whether a number is prime or not
function definPrime(number) {
    if (number > 1 && number % number != 0) {
        return console.log('The number is prime:', number);
    } else {
        return console.log('The number is not prime:', number);
    };
};
definPrime(6);
definPrime(7);