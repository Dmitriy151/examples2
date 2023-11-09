

class Human{
  constructor(name){
        
    this.name=name; 
  }
}


class Man extends Human{
  constructor(name){
    super (name);    
    this.type='мужской пол';
  }
};

let user=new Man('Николай Петрович');
