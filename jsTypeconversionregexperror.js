
//type conversions


console.log(Number("123"))
console.log(String([12,3,4,5,6,7]))

console.log([1,2,445].constructor===Array)



//regexp

var s="did you did you do done did you do done"
var p="do"
var n=s.search(p,s)
s=s.replace(p,"done")
console.log(n)
console.log(s)
s="hii ho hii he hu hai"
n=s.match(/hii/g)
console.log(n)
var s=s.replace(/hii/g,'hoi')
console.log(s)
n=s.match(/hoi/g)
console.log(n)
s="hello vardhan how are you hoi"
n=s.match(/[hoc]/g)
console.log(n)

s="123 345 bahdbk 1234 "
n=s.match(/[1-5]/g)
console.log(n)
s="hello vardhan how are you hoi"
n=s.match(/(hello|h0i)/g)
console.log(n)

s="123 var 345 vdhan  12  "
console.log(s.match(/\d/g))
console.log(s.match(/\s/g))
s="hii hiiiii hp hppp hoo hii hpoii hiohh"
console.log(s.match(/hi+/g))
console.log(s.match(/hi*/g))
console.log(s.match(/hi?/g))
var p=/v/
console.log(p.test("i am vardhan v v"))
console.log(p.exec("hi i am  Vardhan v ard v"))


///error hANDLING

var x="Hello"
try{
   if (isNaN(x))
   {
    throw "it is a string"
   }
}
catch(err)
{
  console.log(err)
}
finally
{
  console.log("finally executed")
}
