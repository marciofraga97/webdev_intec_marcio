let n1 = [1, 2, 3, 4, 5]
let n2 = [6, 7, 8, 9, 10]
let result = [...n1,...n2]
console.log(result) // Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getSomeData(...params){
    // console.log(params)
    params.forEach(e=>{
        console.log("number --->", e)
    })
}



// getSomeData(1, 2, 3, 4, 5, 6, "intecbrussel", true, function(){},{id:1})

// const myData = [12,true,function(){console.log("hello")}, "intecbrussel",{id: 1, user:"root"},199999999]
// const [a, b, c, d, e, f] = myData // es6
// console.log(myData[2]) // es5
// console.log(a, b, c, d, e, f)
// c()
