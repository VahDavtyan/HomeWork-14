// ForEach

// var people = [ 
// { name: "Vahagn", lastName: "Davtyan", age: 17, salary: 5000},
// {name: "Hovhannes", lastName: "Bulatyan", age: 27, salary: 5000}
// ];


// var index = people.forEach(function (person) {
//     console.log(person);
// });



//Map 

// var index = people.map(function(person) {
//     return  person.age * 3
// });     
//     console.log(index)


// Filter

// var age = people.filter(function(person) {
//     if (person.age >= 18) {
//         return true
//     };
// }); console.log(age);


// Reduce

// var bugdet = people.reduce(function(index, person) {
//     return index + person.salary
// }, 0);

// console.log(bugdet);

//Every

// var num = [1, 6, 3, 9, -8, -3, 9, 3, 5];

// var result = num.every (function (b){
//     return b > 4
// });                                              // Every մեթոդով պետք է բոլոր էլեմենտները համընկնեն, իսկ some -ով դրանցից գոնե մեկը։
                        
//     console.log(result);                                                 

//Some

// var result = num.some (function (b){
//     return b > 4
// }); 
//     console.log(result);




// Hoisting



// var num = 999;

// console.log(test());

// function test () {
//     var num = 89;
//     return num;
// };

// console.log(num);
// console.log(test());

// Երբ մենք ունենք հայտարարած ֆունքցիա, որի արժերը իր մեջ չէ, նա բարձրանում է վերև տեսնում է հայտարարած տվյալ
// արժեքը ու տպում։ Իսկ եթե հենց ֆունկցիայի մեջ ունենք հայտարարած, էլ չի բարձրանում վերև։



// Call

// var user = {
//     name: "Vahagn",
//     lastName: "Davtyan",
//     fullName: function () {
//         console.log(this.name + " " + this.lastName);
//     }
// };

// user.fullName();

// var user2 = {
//     name: "Narek",
//     lastName: "Darbinyan"
// };


// user.fullName.call(user2)

// Call մեթոդով մենք կարողանում ենք կանչել առաջին օբյեկտի հետ, երկրորդ օբյեկտի նշանակությունները։


// Apply ի դեպքում մենք console.log ում, պարամետրերը [] ենք վերցնում։

// bind ի դեպքում նոր փոփոխական ենք հայտարարում։

