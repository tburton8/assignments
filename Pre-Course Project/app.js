var favoritePlants = ["succulents", "pileas", "monsteras", "bromeliads"]
//for (start; stop: how to get there;){ code to get there }
for (var i = 0; i < favoritePlants.length; i++) {
    console.log(favoritePlants[i])
    console.log(i)
}

for (var i = 0; i < 11; i++) {
    console.log (i)
}

for (var i = 20; i > -1; i--) {
    console.log (i)
}

var playerHP = 0 //start
while (playerHP < 10) { //stop
    //execute this code
    console.log(playerHP)
    playerHP++ //how we get there
}

function helloThere() {
    console.log("Hello World")
    alert("Hi")

}

function iLovePlants() {
    console.log("Love Plants")
    alert("I love plants!")
}

var numOfPlants = 0
var colorsOfPlants = ["green", "white", "blue", "yellow"];
console.log(colorsOfPlants[2])
if (colorsOfPlants.length < numOfPlants) {
    console.log('true')
} else if (numOfPlants === 0) {
    console.log('false')

}

var yearsInSchool = 12

if (yearsInSchool >= 12) {
    console.log("passed")
} else if (yearsInSchool < 12) {
    console.log("failed")
}
 


var plant = {
    color: "blue",
    name: "philo"
}
console.log(plant.color)

