//1
// var upperCased = "HELLO"

// var lowerCased = upperCased.toLowerCase()

// //console.log (lowercased)

// var combined = upperCased.concat(lowerCased)

// console.log(combined)

// function capAndLow (str) {
//    let cap = str.toUpperCase()
//    let low = str.toLowerCase()
//    return cap.concat(low)
// }
//  console.log(capAndLow("hello"))
//2
// var half = upperCased.split("")

// console.log(half)

//  //this didn't work, it console.logged L
//  var middle = half[Math.floor(half.length / 2)];

//  console.log(middle)

// // this gave me 2.5
// var middle = half.length / 2 

// // this gave me 2 
// console.log(Math.floor(middle))

// var world = "hello world"

// // var middleWorld = world.length / 2

// // console.log(Math.floor(middleWorld))
// function middleIndex(str) {
//     return Math.floor(str.length / 2)
    
// }
// console.log(middleIndex("Hello"))
// console.log(middleIndex("Hello World"))



//3
// var world = "Hello world"
// var hello = "Hello"

// var newWorld = world.slice(0, 6)
// console.log(newWorld)

// var newHello = hello.slice(0, 2)
// console.log(newHello)

// function name(str) {
//     let newStr = str.slice(0, str.length / 2)
//     return newStr
// }
// console.log (name("Hello"))
// console.log(name("Hello World"))

//4
// var world = "hello world"
//  var hello = "hello"

//  //did not work returned everything in caps
//  var capsAndLower = world.toLocaleUpperCase(0,6)
//  console.log(capsAndLower)

// //This worked returned "HELLO world"
//  var capsAndLower = world.slice(0,6).toUpperCase() + world.slice(6,world.length).toLowerCase()
//  console.log(capsAndLower)

// //This works returns "HEllo"
// // var lowerAndCaps = hello.slice(0,2).toUpperCase() + hello.slice(2,hello.length).toLowerCase()
// // console.log(lowerAndCaps)

// // what is is suppose to look like. help from eric
// function capilizeAndLowercase(str){
//     const firstHalf = str.slice(0, Math.floor(str.length / 2))
//     const secondHalf = str. slice(Math.floor(str.length / 2))
//     return firstHalf.toUpperCase() + secondHalf.toLowerCase()
// }
// console.log(capilizeAndLowercase("Hello"))
// console.log(capilizeAndLowercase("Hello World"))

//5 bonus 
//  const sentence = "hey friends! practice, practice, practice"

 function caps (str) {
     let newStr = str.toLowerCase().split(' ');
      for (var i = 0; i < newStr.length; i++) {
          newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
         
      }
      return newStr.join(' ')
 }

console.log(caps("hey friends! practice, practice practice"))


