// function doAyncAction(){
//     const currentDate=new Date();
//     setTimeout((a,b)=>{
//       const now=new Date;
//       console.log(now-currentDate);
//       console.log(a,b);
//     },0,'sfas',{a:123,b:'dfdf'});
    
// }



//аргументы передаются из вне внутрь callback


// function doAyncAction(a,b){
//     const currentDate=new Date();
//     setTimeout((p,m)=>{
//       const now=new Date;
//       console.log(now-currentDate);
//       console.log(p,m);
//     },0,a,b);
    
// }


//http запрос

let xhr=new XMLHttpRequest();

function processFinish(){
    console.log(xhr.responseText);
}

xhr.onload=processFinish;

xhr.open("GET","https://www.cbr-xml-daily.ru/dayily_json.js");
xhr.send();