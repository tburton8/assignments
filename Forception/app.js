var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


var newArr = forception(people, alphabet)


function forception(people, alphabet) {
    let newArr = []
    for (var i = 0; i < people.length; i++){
        newArr.push(people[i]) 
        for (var j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j])
            
        }
    }
    return newArr
}

    console.log(newArr)

    