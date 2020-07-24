const form = document.addItem

form.addEventListener('submit', function(e){
  event.preventDefault()
  const addedItem = form.title.value
  form.title.value = ''

  // this code adds an item to the list 
  const li = document.createElement('li')
  li.textContent = addedItem
  document.getElementById('list').append(li)
  li.textContent = addedItem
  document.getElementById('list').append(li)

  // this code is for the delete button
  const div = document.createElement('div')
  const button = document.createElement('button')
  const xButton = ('X')
  button.append(xButton)
  div.append(button)
  li.append(div)

  function removeItem(e){
    li.remove()
  }
  button.addEventListener('click', removeItem)

// this code is for the edit button    

  const editButton = document.createElement('button2');
  editButton.setAttribute('id', 'button_click');
  editButton.setAttribute('value', 'Edit');
  editButton.innerHTML = 'edit';

  var makeAreaEditable = function(){
    var textAreaEdit = document.createElement('text_area');
    textAreaEdit.customProperty = li.customProperty;
    textAreaEdit.onclick = edit;
    li.appendChild(editButton);
  };
  editButton.onclick = makeAreaEditable;
})

function edit(e){
  var objLi = e.target;
  document.getElementById("button_click").value = "ok";
  document.getElementById("button_click").innerHTML='ok';
};


//function removeElement(parentDiv, childDiv){
  //  if (childDiv == parentDiv) {
    //     alert("The parent div cannot be removed.");
    //}
    //else if (document.getElementById(childDiv)) {     
      //   var child = document.getElementById(childDiv);
        // var parent = document.getElementById(parentDiv);
         //parent.removeChild(child);
    //}
    //else {
         //alert("Child div has already been removed or does not exist.");
         //return false;
    //}
//}

//function createDeleteButton(parent){
    //var button = document.createElement('button');
    //button.appendChild(document.createTextNode ('X'));
    //button.className = 'delete';
    //parent.appendChild(button);
//}




