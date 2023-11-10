

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
 

// static

// class Text{isText(str){return typeof str==='string';}}
           

// class Text{isText(str){return typeof str==='string';}}

// new Text().isText('adsg')

// let text=new Text()


// text.isText('sadfgjh');

// class Text{static isText(str){return typeof str==='string';}}

// text.isText('sadfgjh');

// class Text{static isText(str){console.log(this); return typeof str==='string';}}