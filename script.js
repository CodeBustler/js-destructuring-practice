// Task 1: Destructuring an Array
// Given an array [1, 2, 3, 4, 5], use destructuring to assign the values of the array to individual variables a, b, c, d, and e. Then, print the values to the console.

/*
let ary = [1, 2, 3, 4, 5];

let [a, b, c, d, e, f] = ary;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f); // undefined
*/

//-----------------------

// Task 2: Destructuring an Object
// Given the following object:

/*
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  hobbies: ['reading', 'painting', 'hiking'],
};

let { name, age, hobbies } = person;

console.log(name);
console.log(age);
console.log(hobbies[2]);
*/

//-----------------------

// Task 3: Destructuring Function Parameters
// Write a function getFullName that takes an object parameter with properties firstName and lastName and returns the full name. Use destructuring in the function parameter to extract the firstName and lastName properties directly. Test the function with different objects and log the results.

/*
function getFullName({ firstname, lastname, age }) {
  let fullname = firstname + lastname + age;
  return fullname;
}

const person = {
  firstname: 'Mallikarjun',
  lastname: ' Mavnoor ',
  age: 27,
  city: 'Hyderabad',
  hobbies: ['travel', 'painting', 'hiking'],
};

console.log(getFullName(person));
*/

//-----------------------

// Task 4: Default Values in Destructuring
// Given the following object

/*
const user = {
  username: 'john_doe',
  email: 'john.doe@example.com',
  // firstName: 'Arjun',
};

let { username, email, firstName = 'CodeBustler' } = user;

console.log(username);
console.log(email);
console.log(firstName);
*/

//-----------------------

// Task 5: Destructuring Nested Objects
// Given the following object:

const employee = {
  id: 123,
  name: 'John Doe',
  department: {
    name: 'Engineering',
    location: 'San Francisco',
  },
};

let {
  id,
  name,
  department: { location = 'NA' },
} = employee;

console.log(id);
console.log(name);
console.log(location);
