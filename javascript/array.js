var students = ["Raj" , "Vinay" , "Sam" , "Vijay", "Abdul" ]
console.log(students.length)
//students.pop("Karnua")
//students.shift("Karnua")
//students.unshift("Karnua")
//var fewStudents = students.slice(1,1)
var fewStudents = students.splice(1,2)
console.log(fewStudents)
console.log(students)