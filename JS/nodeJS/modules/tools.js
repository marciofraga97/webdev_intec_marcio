let tools = {
    getName:function(name){
        console.log(`My name is ${name}`)
    },
    getsumofNumbers:function(a,b){
        let result = a + b
        console.log(`Result => ${result}`)
    },
    getStudentNames:function(...arg){
        arg.forEach(name=>{
            console.log(`Student: ${}`)
        })
    }
}

// You'll need
// *NodeJS
// *http request > createserver > request > url paths
// *if else
// *request

// http://localhostXXXX