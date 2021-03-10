//classes

class car
{
  constructor(brand,age)
  {
    this.brand=brand;
    this.age=age;
  }
  showb()
  {
    console.log(this.brand)
  }
}

class supercar extends car
{
  constructor(brand,model)
  {
    super(brand);
    this.model=model;
  }
  get show(){return this.brand +" "+this.model;}

  set changemodel(value){this.model=value;}
}

var d=new supercar("suzuki","A3superfas24");
console.log(d.show);
d.changemodel="Vardhan";
console.log(d.show);
d.showb();


//static


class c1
{
  constructor(a,b)
  {
    this.a=a;
    this.b=b;
  }
  static show(c)
  {
    return c.a;
  }
};
var x=new c1("vardhan","goud")
console.log(c1.show(x));



//events
var t=0;

function getdate()
{
    
    if(t%2==0)
    {
     document.getElementById("d1").innerHTML=""
    }
    else
    {
    document.getElementById("d1").innerHTML=new Date();
    }
    t=t+1
}