// function fetchInfo(){
//   setTimeout(()=>{
//      const data={id:1,name:'Alex'};
// 		 callback(data);
// 	},100)
// }

// function fetchUserGames(id,callback) {
// 	setTimeout(()=>{
// 		const data=['game1','game2'];
// 		callback(data);
//  },100)
// }

// function run() {
// 	fetchInfo((userInfo)=>{
//      console.log(userInfo); 
// 		 fetchUserGames(userInfo.id,(userGames)=>{
// 			console.log(userGames); 
// 		 })
// 		});
		
// } 

// run();

function run() {
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
			     const data={id:1,name:'Alex'};
					 resolve(data);
				},1000);
				data.then((userData)=>{
          console.log(userData);
				});
	})

	
}

run();