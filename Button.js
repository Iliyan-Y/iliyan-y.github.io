//create button
var button = document.createElement("button");
button.innerHTML = "Color Change";
button.setAttribute("id", "btn");
button.setAttribute("value", "Off")

// append somewhere
document.body.appendChild(button);

// event handler
button.addEventListener("click", function() {
  current_value = document.getElementById('btn').value;
  if (current_value == "Off") {
    document.body.style.backgroundColor = "green";
    document.getElementById('btn').value = "On";
    button.innerHTML = "Green ON";
    button.style.backgroundColor = "lightgreen";
   } else {
     document.body.style.backgroundColor = "white";
     document.getElementById('btn').value = "Off"
     button.innerHTML = "Color Change";
     button.style.backgroundColor = "white";
   }
})
