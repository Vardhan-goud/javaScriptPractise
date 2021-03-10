
//math

console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))
console.log(Math.abs(-2.34))
console.log(Math.sqrt(43))
console.log(Math.pow(2,3))
console.log(Math.floor(2.34))
console.log(Math.ceil(2.333))
console.log(Math.round(2.4599))
console.log(Math.trunc(-4.345))
console.log(Math.sin(234))
console.log(Math.log10(100))
console.log(Math.log(234))
console.log(Math.cbrt(27))
console.log(Math.sign(-234))




//conditional statements


d=new Date()
console.log(d)
if(d.getMinutes()<30)
{console.log("good hour")}
else if(d.getMinutes()<45)
{console.log("good mintues")}
else{console.log("good seconds")}


//switch


var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log(day)



switch(new Date().getDay())
{
    case 0:
    case 6:
        day="weekend"
        break;
    default:
        day="working day"
        
}
console.log(day)



//iterative statements


var a=[1,2,3,4,545,6,7,]
//for loop
for(var i=0;i<a.length;i++)
{
    console.log(a[i])
}

//while

i=0
while(i<a.length)
{
    console.log(a[i])
    i=i+1
    if(i==3)
    {
        continue;//contnue
    }
    
}

//for of

for(i of a)
{
    console.log(i)
}
var b={name:"vardhan",age:20}

//for in

for(i in b)
{
    console.log(`${i} ${b[i]}`)
}

//do while
i=0
do
{
    console.log(i)
    i=i+1
    if(i==2)
    {
        break;//break
    }
}while(i<5)
