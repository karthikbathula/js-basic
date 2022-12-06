console.log("hello world!")

console.log(true)
console.log(typeof 1234567890 )

var a = "69";
a = 6969696969
let b ;
b = "qw";
const c = 30;
console.log(a,b,c);

if (a>b){
    console.log("a is greater than b")
} else (
    console.log("b is greater than a")
)

// for loop initialization, condition , increment/decrement
const n=10;
for(let i=0; i<n; i++){
    console.log(i)
}

//compound data types 
//object
// json - javascript object notation
const ak= {
    name:"karthik",
    surname:"reddy",
    school: {
        name:"ASHS",
        class:"10"   
    }
}
console.log(ak.school.name)

//array
const l=["hello",69,"mf"]
console.log(l)

//functions
function square(n){
    return n*n;
}
console.log(square(69));