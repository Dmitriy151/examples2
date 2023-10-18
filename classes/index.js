class BMW{
    constructor(name,color){
      
      this.carName=name;
      this.color=color;
    };
  };

function Aircraft(){
   
};

// let bmw1=new BMW();
// let bmw2=new BMW();

let garage=[new BMW('ласточка','синий'),new BMW('принцесса','белый')];

let oleg={
  name:'Олег',
  lastName:'Петров',
  gender:'муж',
  type:'чел', 
};

let ivan={
  name:'Иван',
  lastName:'Иванов',
  gender:'муж',
  type:'чел', 
};

let nikita={
  name:'Никита',
  lastName:'Романов',
  gender:'муж',
  type:'чел', 
};

class Human{
  constructor(name,lastName,age=0){
    this.name=name;
    this.lastName=lastName;
    this.gender='муж';
    this.type='чел';
    this.age=age;
  };

};

let persons=[
  new Human('Иван','Иванов'),
  new Human('Олег','Петров'),
  new Human('Никита','Романов')
];