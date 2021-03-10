
//functions

function f1(a,b)
{
  return [a+b,f1.length]
}
console.log(f1(2,3))
console.log(f1("hello","vardhan"))

var t=function(a,b){return a+b}
console.log(t(2,3))
console.log(t("narendra","modi"))

var k=(a,b)=>a*b
console.log(k(2,4))

var x=function ()
{
  sum=0
  for(var i=0;i<arguments.length;i++)
  {
         sum+=arguments[i]
  }
  return sum
}
console.log(x(12,4))

var y=function (a,b=10){return a+b}

console.log(y(2))
console.log(y(2,3))


function thisf(a,b=20)
{
    this.name=a;
    this.age=b;
}
var k=new thisf(2,4)
console.log(k)
console.log(typeof k)


var obj1=
{
  name:"vardhan",
  age:20,
  details:function()
  {
    console.log(this.name,this.age) ;
  }

}

obj1.details();


var add=(function ()
{
  var counter=0;
  return function (){counter+=1;return counter;}
})()

add();
add();
add();
console.log(add());


(function (){console.log("hello")})()




///objects

//object literal approach

var obj1={name:"vardhan",age:20};
var obj2=new Object();
obj2.name="anjali"
obj2.age=20;
var x=obj1;
x.age=21;
console.log(obj1.age)

//adding property

obj1.city="Hyderabad"

console.log(obj1)


//deleting an object
delete obj1["age"]

console.log(obj1)

for(var i in obj1)
{
  console.log(`${i} is ${obj1[i]}`)
}
;

var obj2={
  firstName:"Vardhan",lastName:"goud",
fullName:function (){return `${this.firstName}  ${this.lastName}` },
};

console.log(obj2.fullName())


//setters and getters

var obj1={
  name:"Vardhan",
  age:20,
  lastName:"Goud",
  get fullname()
  {
    return this.name+" "+this.lastName;
  },
  set changeage(age)
  {
       this.age=age;
  }
};

Object.defineProperty(obj1,"new_name",
{set :function (value){this.name=value}})

obj1.changeage=21;
console.log(obj1.fullname)
obj1.new_name="Narsing";
console.log(Object.values(obj1))


//object cosstructor

function  person(name,age)
{
  this.name=name,
  this.age=age,
  this.data=function(){return this.name+" "+this.age}
}

var p1=new person("vardhan",20)
var p2=new person("rohan",30)
console.log(JSON.stringify(p2))


person.prototype.lang="english";

console.log(JSON.stringify(p2))
var p2=new person("rohan",30)
console.log(p2.lang)