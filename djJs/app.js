
    //var yellowButton = document.querySelectorAll(".yellow")[0];
       // if (this.className == "green") {
         //   if (yellowButton) yellowButton.className = "green";
           // this.className = "yellow";
        //}
    //}
//}


var box = document.getElementById("box")


document.getElementById ("box").addEventListener ("mouseover", function(mouseover) {
    box.style.backgroundColor = "blue"
})

document.getElementById("box").addEventListener("mousedown", function(mousedown) {
    box.style.backgroundColor = "red"
})


document.getElementById("box").addEventListener("click", function(click) {
    box.style.backgroundColor = "green"
})
document.getElementById("box").addEventListener("wheel", function(wheel) {
    box.style.backgroundColor = "orange"
})


setInterval (function () {
    box.style.backgroundColor = "yellow"
}, 2000);
