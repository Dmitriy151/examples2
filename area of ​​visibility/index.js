function init(){
  let userName='Олег';
  function showGreeting(name) {
    console.log(`Привет ${name}`);
  } 
  showGreeting(userName);
}

init();

function createGenerator(start){
  return function(){
    
    console.log(start++);
  }
}

let tick=createGenerator(1);

tick();
tick();
tick();

let tick10=createGenerator(10);

tick10();
tick10();
tick10();

let tick5=createGenerator(5);

tick5();
tick5();
tick5();

// function findX() {
//   function stillfindX() {
//     function whereIsX() {
//       console.log(`x=${x}`);
// }whereIsX();
// }stillfindX();
// }