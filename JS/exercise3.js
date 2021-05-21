let user=[];
 
user.push(new adduser());


 
function adduser(id,fullname,email,password){
    var i=0;
    i=i+1;
    let obj={
 
        id:i,
        fullname:fullname,
        email:email,
        password:password
 
    }
    return obj;
 
}
 
console.log(user);
 
function getUser(){
 
 let x=console.log(toString(user));
 
 
 
}
 
let userarr=user.sort( function getSortedUsersByName(a,b) {
    var nameA=a.fullnamename;
 var nameB=b.fullname;
 if(nameA<nameB){
     return -1;
 }
if(nameA>nameB){
    return 1;
}
return 0;
 
})
console.log(userarr);
 
let obJ=user.find(function getUserByName(name){
    if(name=== user.fullname){
        return obj;
    };
    
})
console.log(obJ)
var id;
    var index = user.map(function deleteUserById(x){
        return x.Id;
      }).indexOf(id);
      
      user.splice(index, 1);
      console.log(user);