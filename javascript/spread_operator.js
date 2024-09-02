//spread operator
set1 = [1,2,3,4,5]
set2 = [...set1,6,7,8,9,10]
console.log(set2)
const Engg =
{
    sem : "V",
    branch : "AIDS"
}
const section =
{
    ...Engg,
    noOfStudent : 70
}
console.log(section)