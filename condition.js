//preacti of condition 
//Q.no1
let age = prompt("ENTER THE AGE")
if (age > 10 && age < 18) {
  console.log("age is good")
}

//Swithc case example
let agee = prompt("ENTER THE AGE")
age = Number.parseInt(age)
switch (age) {
  case '35':
    console.log("your age is 35")
    break
  case '45':
    console.log("your age is 45")
    break
  case '55':
    console.log("your age is 55")
    break
  case '65':
    console.log("your age is 65")
    break
  default:
    console.log("not best age")
}

let ageee = prompt("ENTER THE number")
age = Number.parseInt(age)
if (age % 2 == 0 && age % 3 == 0) {
  console.log("it is")
}
else {
  console.log("it is not")
}
