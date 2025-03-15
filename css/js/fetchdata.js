/*function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('User data received'))
    });
}
function fetchPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Poats data received'))
    });
}
fetchUserData()
   .then((userData) => {
    console.log(userData);
    return fetchPosts();
   })
   .then((postsDataMess) =>{
    console.log(postsDataMess);
   })
   .catch((error)=>{});*/


async function asyncFunction(){
    try{
        let data = await asyncFunction()
        console.log (data)
       }catch(error){
        console.log(error)
    }
}
 