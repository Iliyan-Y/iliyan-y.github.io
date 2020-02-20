
// onclick add togle with variable parameter "show" to the divDropdown
// function dropDown_fn() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

function dropDownMenu(){

  var menuLinks = ["Link 1 ", "Link 2 ", "Link 3 "];

  //create all elements required and asign to them attributes
  //create div section with atrribute class="dropdown"
  var menuDiv = document.createElement('div');
  menuDiv.setAttribute("class", "dropdown");

  //create the reset elements like the div above
  var dropDownButton = document.createElement('button');
  //dropDownButton.setAttribute("onclick", "dropDown_fn()"); //do on click dropDown_fn
  //more flexible way doing the click event
  dropDownButton.addEventListener("click", function() {
    document.getElementById("myDropdown").classList.toggle("show");
  });
  dropDownButton.setAttribute("class", "dropbtn");
  dropDownButton.innerHTML = "DropMeDown"

  var divDropdown = document.createElement('div');
  divDropdown.setAttribute("id", "myDropdown");
  divDropdown.setAttribute("class", "dropdown-content");

  //add each element on the page in the correct sector
  document.body.appendChild(menuDiv);
  menuDiv.appendChild(dropDownButton);
  menuDiv.appendChild(divDropdown);

  //add each link with a tag to the div
  menuLinks.forEach(function(item){
    var aTag = divDropdown.appendChild(document.createElement('a'));
    aTag.innerHTML = item;
    aTag.setAttribute("href", "#");
  });

  //Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    // if evetnt doesnt match the button box
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (i = 0; i < dropdowns.length; i++) {
        //select the lement show
        var openDropdown = dropdowns[i];
        //if show is there remove it
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


};

dropDownMenu()
