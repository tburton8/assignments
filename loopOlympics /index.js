//preliminaries
/*var i = 0 

for ( var i = 0; i < 10; i++){
    console.log(i)
}

for (var i = 9; i > -1; i--) {
    console.log(i)
}

var fruit = ['banana', 'orange', 'apple', 'kiwi']
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
    console.log(i)
}*/

// Bronze 
// var arr = [];

// for ( var i = 0; i < 10; i++){
//     arr.push(i)
// }
// console.log(arr)

//  for (var i = 0; i < 101; i++){
//      if (i % 2 === 0){
//         console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var newArr = [];

// for (var i = 1; i < fruit.length; i += 2){
//   newArr.push(fruit[i])
//     console.log(newArr)
// }

//silver 
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
 for (var i = 0; i < peopleArray.length; i++){
     console.log (peopleArray[i].name)
 }

 const nameArray = [];
 const occupationArray = [];

 for (var i = 0; i < peopleArray.length; i++){
     nameArray.push(peopleArray[i].name)
     console.log(nameArray)
     occupationArray.push(peopleArray[i].occupation)
     console.log(occupationArray)
 }

 for (var i = 0; i < peopleArray; i++){
    nameArray.push(peopleArray[i].name)
         if (i % 2 === 0){
            console.log(nameArray[i].name)
        }
    }