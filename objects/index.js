
customProperty='isCat';

let user={
    name:'Vasya',
    age:26,
    [customProperty]:false,
    ['ma'+'ma']:false,
}

console.log(user);


// {name: 'Vasya', age: 26, isCat: false, mama: false}age: 26isCat: falsemama: falsename: "Vasya"[[Prototype]]: Object
// user.[customProperty];
// VM187:1 Uncaught SyntaxError: Unexpected token '['
// user[customProperty];

// false
// {customProperty,name};
// {customProperty: 'isCat', name: ''}customProperty: "isCat"name: ""[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
//  user
// {name: 'Vasya', age: 26, isCat: false, mama: false}
// for (let property in user){console.log(property)}
// VM300:1 name
// VM300:1 age
// VM300:1 isCat
// VM300:1 mama
// undefined
// for (let property in user){console.log(property,user[property])}
// VM348:1 name Vasya
// VM348:1 age 26
// VM348:1 isCat false
// VM348:1 mama false