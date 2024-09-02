//destructuring
/**mark = [20,30,50]//structuring 1 variable can hold multip vaule
[a,b,c] = marks//destructuring it mean that multip vaule can be assign to one variable
console.log(a,b,c)*/
var marks =[20,30,40]//structuring
var [a, ,c]= marks //destructuring
console.log(a,c)
//object
const sem =
{
    sname: "Raj",
    section: "B"
}
let {sname,section} = sem
console.log(sname)