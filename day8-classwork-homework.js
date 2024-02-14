

// created by online student .ie 


//-----------------------------------№ 11-------------------------------------------

// ClassWork/HomeWork JavaScript Basics 3, № 11

// TASK 1
const a = 2;
const b = 4;
const c = 5;

function multiply(a, b, c) {
    return  console.log( a * b * c )
}
multiply( a, b, c);


// TASK 2 (A)
function reverseWordOrder1 (value) {

    const wordsArray = value.split(" ");
    const reversedArray = wordsArray.reverse();
    const reversedString = reversedArray.join(" ");
    return console.log(reversedString)
}
reverseWordOrder1 ('Reverse Words Order 1')


// TASK 2 (B)
const reverseOrder = 'Reverse Words Order 2';

const reverseWordOrder2 = (value) => {
    const reversed = value.replace(value, '2 Order Words Reverse')
    return console.log(reversed)
};
reverseWordOrder2(reverseOrder);


// TASK 3
const logUserData = (personName, age) => {
    return console.log(`User: ${personName} is ${age} years old`)
}
logUserData('Mike', 150)



//-----------------------------------№ 12-------------------------------------------

// ClassWork/HomeWork JavaScript Basics 3, № 12

// TASK 1
function some_person () {

    // 1 const
     const firstName = "John";
     const lastName = "Doe";
     let fullName = firstName + " " + lastName;
     console.log(fullName); 


     // 2 Array
     const person1 = ['John', 'Doe'];
     console.log(person1); 
     
     
     // 3 Object
     const person2 = {
         firsname:"John",
         lastname:"Doe"
         };
     console.log(person2);
 };
 some_person();


  // TASK 2
  const school_current_name = 'Programming Coding School';
  const school_new_name = school_current_name.replace('Coding',"CODING");
  console.log(school_new_name);
  
  
  //TASK 3
  // the same as (№ 11, Task 2 (B))


  //TASK 4
  const nameEv = 'USER LOG IN'
  const date = new Date("2020-07-17");

  const logEvent = (eventName, occurred) => {
     return console.log(`Event: ${eventName} occurred on ${occurred}`)
  }
  logEvent(nameEv, date)
 