var students = ["Raj" , "Vinay" , "Sam" , "Vijay", "Abdul" ]
//console.log(students.length)
//students.pop("Karnua")
//students.shift("Karnua")
//students.unshift("Karnua")
//var fewStudents = students.slice(1,1)
//slice will not chage the original array, take from index 1 to <2
var fewStudents = students.splice(1,2)
//splice will chage the original array ,starts at index 1 and take two elements
console.log(fewStudents)
console.log(students)