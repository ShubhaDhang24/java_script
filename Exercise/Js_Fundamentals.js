//javascript variable
let a=25;
let temp=-30;
let name="shubha";
let myVar=10; //type: number 
myVar="shubha dhang"; //type: string 
let isRaining=true;
let person={name:"shubha", age :31, isStudent : true}
let desc;
console.log(person.name,person.age);
console.log("welcome to Js")

 let numbers=[1,2,2,3,4,5]
 console.log(numbers)

 //constant variables
 const PI=3.14;
 console.log(PI)
 //PI=3.123;
 //console.log(PI)  TYPE ERROR CONSTANT CANNOT BE CHANGED.
const URL_ADDRESS="Http://localhost:8080/cloudvendor";

for(let i=0;i<=10;i++)
{
    if(i%2==0)
       console.log(i,"is even")
    else
      console.log(i,"is odd")
}

let day;
switch(day)
{
    case "monday":
                  console.log("day is monday")
                  break; 
    case "tuesday":
                  console.log("day is tuesday")
                  break; 
                  default:
                  console.log('it\'s   not assigned')
                  break; 
}

 a=10;
let b=10
a+b;
let n1=10;
let n2="10";
let isEqual=(n1==n2)
console.log(isEqual)
let isStringEqual= 10==="10"
console.log(isStringEqual)
function add()
{
    let res=10+20;
    console.log(res)
}
add()

function sub(){
    let res=20-10
    console.log(res)
}
sub()
function div()
{
    let res= 30/5;
    console.log(res)
}
div()

function greet(name)
{
    console.log("hello "+name)
}
greet("shubha")
//function
const _greet=(name)=>console.log("hello "+name);

_greet("shubha")

const addition=(n1,n2)=>n1+n2
console.log(addition(10,2))


//arrays
let num=[1,2,3,4,5]
console.log(num[2])
console.log(num)
num.push(7)

num.pop(2)
let evennum= num.filter(num=>num%2==0);
let ar=[5,2,4,1,5,7]
console.log(ar.sort())

//objects
let person1={
    name: "shubha",
    age:31,
    isStudent:true,
 adress:{
    city:"jönköping",
    country:"sweden"
}
}
info:()=>console.log(this.name,this.adress.city)

console.log(person1.age)