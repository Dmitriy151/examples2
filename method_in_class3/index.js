

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



// function divider(a,b) {
//   if (a===0||b===0) {
//       throw new Error('невалидное значение');
//   } return a/b;
// }

// function safelyDivider(a,b) {
//   try {
//   console.log('внутри блоока try');divider(1,0);
// } catch (error) {
//   console.log(error)
// }
// }


// function safelyDivider(a,b) {
//   try {
//   console.log('внутри блоока try');return divider(a,b);
// } catch (error) {
//   console.log(error); console.log('перехватили ошибку');
// } finally{console.log('внутри блока finally')}
// }