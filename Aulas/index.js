const temp = [15, 10, 8, 3]

const tempPositive = temp.every(function(value){
    console.log(value)
    return value >=0
    
})

console.log(tempPositive)