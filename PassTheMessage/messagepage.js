// create required tags
var outerDiv = document.createElement('div');
outerDiv.setAttribute("id","outerDiv");
var boxDiv = document.createElement('div');
boxDiv.setAttribute("id", "boxDiv");
document.body.appendChild(outerDiv);
outerDiv.appendChild(boxDiv);

var h3Tag = document.createElement('h3');
var h3Text = document.createTextNode("Write a message!");
h3Tag.appendChild(h3Text);
boxDiv.appendChild(h3Tag);

var textField = document.createElement("input");
textField.setAttribute("type", "text");
boxDiv.appendChild(textField);

var submitButton = document.createElement("input");
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute("id", "send");
//submitButton.setAttribute('value', 'send');
boxDiv.appendChild(submitButton);

var lastMessage = document.createElement('h4');
lastMessage.innerHTML = "The Last Message You Send";
boxDiv.appendChild(lastMessage);

var messageDisplay = document.createElement('h4');

//add the text to the message field 
function submit() {
  // set the return message to be the value of the input box
  // value==name== text inside something AND you can grab it
  messageDisplay.innerHTML = textField.value;
  boxDiv.appendChild(messageDisplay);
};

//add multiple events to the button
submitButton.addEventListener('click', function() {
  submit();
});
//submit if you press eneter and button is selected
submitButton.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
  submit();
  }
});
//submit if you press eneter and text field is selected
textField.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
  submit();
  }
});
