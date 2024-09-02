function oldversion()
{
    console.log("Hi I am Old")
}
oldversion()
//arrow function
newversion=() =>console.log("Hi I am new");
    newversion()
//return function
function oldreturn(a)
{
    return a+10;
}
console.log(oldreturn(35))
newversion = (no1,no2)=>{return (no1+no2)*5;}
console.log(newversion(5,3))
//
newversion = a =>{return a+5;}
console.log(newversion(5))