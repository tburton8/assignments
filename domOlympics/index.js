//Qualifyer

var header = document.querySelector("#header")
header.textContent = "JavaScript Made This!!"
 
var name1 = document.createElement("span") 
name1.innerText = "Tavish"

var subhead = document.createElement("span")
subhead.innerText = " wrote the JavaScript"


name1.classList.add("name") 

var div = document.createElement("div")
div.append(name1)
div.append(subhead)
header.append(div)

//Bronze

//var textNode = document.createTextNode ('does this work?')

var arrayOfContainers = document.getElementsByClassName ('container')
 
//replace()

function replace() {
  for (var i = 0; i < arrayOfContainers[0].children.length; i++){
    arrayOfContainers[0].children[i].innerText= 'Something nice and fun';
  }
}
 
var clear = document.getElementById ('clear-button')

clear.addEventListener('click', function(){
 document.getElementsByClassName('container')[0].innerHTML=''
 
})

 

// Silver

//var dropdown = document.querySelector ('.theme-drop-down');

var dropdown = document.getElementById('theme-drop-down');

function redBlack() {
  var themeDropDown = document.getElementsByClassName('message left')[0].style.backgroundColor = 'red';
  
  if (themeDropDown === 'brown' ) {
      document.getElementsByClassName('message left')[0].style.backgroundColor = 'brown';
      document.getElementsByClassName('message left')[1].style.backgroundColor = 'brown';
  }
  else {
    document.getElementsByClassName('message left')[0].style.backgroundColor = 'red';
    document.getElementsByClassName('message left')[1].style.backgroundColor = 'red';
  }
  
  var themeDropDown = document.getElementsByClassName('message right')[0].style.backgroundColor = 'black';
  
  if (themeDropDown === 'blue') {
  document.getElementsByClassName('message right')[0].style.backgroundColor = 'blue';
  document.getElementsByClassName('message right')[1].style.backgroundColor = 'blue';
  }
  else {
  document.getElementsByClassName('message right')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('message right')[1].style.backgroundColor = 'black';
  }

}

dropdown.addEventListener('change', redBlack) 


//var document.getElementByClassName('message left')
//var document.getElementByClassName('message right')

  // need to create a for loop for all of these 

  /*function redBlack() {
    for (var i = 0; i < arrayOfContainers[0].children.length; i++){
      arrayOfContainers[0].children[i].backgroundColor= 'red';
    }
  }

if (dropdown.value==='theme-two') {
  document.getElementsByClassName ('message left').style.backgroundColor='red';
  document.getElementByClassName ('message right').style.backgroundColor='black';
  }
  else {
      document.getElementsByClassName ('message left').style.backgroundColor='brown';
      document.getElementsByClassName ('message right').style.backgroundColor;'blue';
  }
}*/

// Gold

function send() {
    document.getElementById("input").submit();
  }
