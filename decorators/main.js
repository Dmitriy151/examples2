// пишется вконсоли

// let sum=(a,b)=>a+b;

// function logerDecorator(func) {
//     return function(...arr) {
//         return func(...arr);
//     }
// }

// let a=logerDecorator(sum);
// a(1,2);

// function logerDecorator(func) {
//     return function(...arr) {
//         console.log(arr);
//         return func(...arr);
//     }
// }

// a=logerDecorator(sum);

// a(1,2);


// Decorator spy


// let sum=(a,b)=>a+b;
// function spyDecorator(func) {
//   function wrapper(...args)
//      {
//         wrapper.history.push(args);
//         return func(...args);
//     }
//     wrapper.history=[];
//     return wrapper;
// }

// spyDecorator(sum);

// let spy= spyDecorator(sum);

// spy.history