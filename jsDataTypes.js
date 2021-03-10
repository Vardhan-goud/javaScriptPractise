
//datatypes

console.log(typeof(null))
console.log(typeof(undefined))

//primitive datatypes

console.log(typeof("abc"))//string
console.log(typeof(3))//number
console.log(typeof(3.223))//numnber
console.log(typeof undefined)//undefined
console.log(typeof null)//object
console.log(typeof [1,2,3,4,4])//object
console.log(typeof {abc:1,cbd:2})//object
console.log(typeof function myfun(){})//function
console.log(typeof(1==2))//boolean
console.log(null==undefined)//true
console.log(null===undefined)

console.log("abc"+20+30)
console.log(20+12+"abc")//exp is evaluated from left to right
console.log("10"+20)



//strings

var str1="Hii i am vardhan"
console.log(str1)
var str2='hii i am vardhan'
console.log(str2)
var str3='hii i am "vardhan"'
console.log(str3)
var str4="hii i am 'vardhan'"
console.log(str4)
var str5="hii i am \"vardhan\""
console.log(str5)

//length of string

console.log(str1.length)
console.log("hii u am  vardhan\ni am\tfrom kp")

var str6=new String("hello evryone")  //type will be obj
console.log(str6)
console.log(typeof str6)//object
console.log(typeof str5) //string

var str7=new String("hello evryone")
var str8="hello evryone"

console.log(str8==str7)
console.log(str7===str8)

console.log(str6==str7)//comp btw 2 js obj always returns false,objects cannot be compared



//methods on strings

//length

console.log(str2.length)


//indexOf

console.log("can anyone count one".indexOf("one"))//givres index of first occurence
console.log("can anyone count one".lastIndexOf("one"))//gives index of last occurance

//both indexOf and lastIndexof return -1 if substring not found
console.log("can anyone count one".indexOf("dde"))
console.log("can anyone count one".lastIndexOf("jdejfc"))

console.log("can anyone count one".indexOf("one",9))
console.log("can anyone count one".lastIndexOf("one",12))


//search

console.log("hii i am vardhan".search(" a"))


//slice(start, end)

var str1="hhi mnujhxiwjdxolw hsiowjdopw sjwsjwokdp"
console.log(str1.slice(2,10))
console.log(str1.slice(10))
console.log(str1.slice(-20,-2))
console.log(str1.slice(-12,36))


//substring(start, end)

console.log(str1.substring(5,16))

console.log("hiii am vardhan".substring(2))


//substr(start-index,length)

console.log("hello everyobe".substr(2,5))
console.log("hello everyobe".substr(4))
console.log("jii everyone".substr(-10,3))


//replace

console.log("hii one and only one".replace('one','two'))
console.log("hii one and only one".replace(/one/g,'two'))
console.log("hii One and only One".replace(/one/i,"two"))

//uppercase and lowercase
console.log("hello I Vanrdhan".toLowerCase())
console.log("vArdhaSn".toUpperCase())

//concat
console.log("hello".concat(" ","i am vardhan",' from vnr'))


//trim
console.log("   hello world   ".trim())


//padstart

console.log("hello".padStart(10,"*!"))

//padEnd

console.group("hello".padEnd(20,"%"))


//charAt(position)
//charCodeAt(position)

console.log("hello".charAt(1))

console.log("abcd".charCodeAt(3))

//converting string to arrays
var str1='1,2,3,4,5,6,7'
var arr1=str1.split(",")
console.log(arr1)



//numbers


console.log("100"/"10")
console.log("100"-10)
console.log("10"*10)
console.log("10"+"10")
console.log(100/"ahjs")
console.log(typeof(NaN))
console.log("100"/0)
console.log(typeof(Infinity))
console.log(0xF)
var a=5
console.log(a.toString(2))
var b=new Number(12)
var c=12



console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(c.toString())
var k=123.234
console.log(k.toFixed(4))
console.log(k.toPrecision(6))
console.log(k.toExponential(5))
console.log(parseInt("23 24 354"))
console.log(parseFloat("27 34 ,4545"))
console.log(Number(" 10"))


//arrays
var a;
a=[1,2,3,4,5]
a.push(7)
a.pop()
a.shift()
a.unshift(5)
console.log(a.slice(2,5))
console.log(a)
console.log(a.splice(2,2,10,12))
console.log(a)
console.log(a.length)
a.sort()
console.log(a)
a.sort(function(a,b){return a-b})
console.log(a)
a.sort(function(a,b){return b-a})
console.log(a)
b=[1,2,3]
a=a.concat(b)
console.log(a)
a.reverse()
console.log(a)
var m=Math.max.apply(null,a)
console.log(m)


var a1=a.map(function f1(val,ind,arr){return val*2})
console.log(a1)
var t=a1.filter(function f2(val,index,arr){return val>20})
console.log(t)
a1.forEach(function f(v,i,a){console.log(i)})
var k=a1.reduce(function f(t,v,i,a){return t+v})
console.log(k)
var k=a1.every(function f(v,i,a){ return a>3})
console.log(k)





//dates


var a=new Date()
console.log(a)
var b=new Date(2021,05,23,05,15,23,23)
console.log(b)
var c=new Date("2015-12-23")
console.log(c)
var d=new Date("2012/11/23")
console.log(d)
console.log(d.getFullYear())
console.log(d.getMinutes())
console.log(d.getMonth())
console.log(d.getTime())
d.setFullYear(2001)
console.log(d)
d.setMonth(04)
console.log(d)
