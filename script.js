//Practice 1
let numChildren = 7
const isCareful = true

if(!isCareful)
{
    numChildren++
}
console.log(numChildren)




// Practice 2
const silverwareCount = 5

if(silverwareCount % 2 != 0)
{
    console.log("there is something missing") 
}




// Practice 3
let performance = "good"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance == "good") {
    salary += goodBonus
} else if(performance == "stellar") {
  salary += stellarBonus
}
console.log(salary)



// Practice 4
const isVIP = false
let cash = 200

if(isVIP || cash > 300)

{
    console.log("Welcome to the club")
}
else
{
    console.log("your kind isn't welcoime here")
}
