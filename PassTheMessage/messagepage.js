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

var textField = document.createElement("textarea");
textField.setAttribute("cols", "20");
textField.setAttribute("rows", "5");
textField.setAttribute("id", "text");
boxDiv.appendChild(textField);

var submitButton = document.createElement("input");
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute("id", "send");
var wrapDivButton = document.createElement('div');
wrapDivButton.setAttribute("id", "wrapDivButton");
//submitButton.setAttribute('value', 'send');
boxDiv.appendChild(wrapDivButton);
wrapDivButton.appendChild(submitButton);

var lastMessage = document.createElement('h4');
lastMessage.innerHTML = "The Last Message You Send";
boxDiv.appendChild(lastMessage);

var messageDisplay = document.createElement('h3');
messageDisplay.setAttribute("id","messageDisplay");
var messageBox = document.createElement('div');
messageBox.setAttribute('id', "messageBox");
boxDiv.appendChild(messageBox);

//add the text to the message field
function submit() {
  // set the return message to be the value of the input box
  // value==name== text inside something AND you can grab it
  if (textField.value !== "" && textField.value !== "\n") {
  messageDisplay.innerHTML = textField.value;
  messageBox.appendChild(messageDisplay);
  textField.value = null;
  } else {
  	errorMessage();
 };
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

function errorMessage() {
 var noMessageError = document.createElement('p');
 var textError = document. createTextNode("Pleace type something");
 noMessageError.style.color = "red";
 noMessageError.appendChild(textError);
  boxDiv.insertBefore(noMessageError,  lastMessage);
  setTimeout(function() {
  noMessageError.removeChild(textError);
  }, 3500);
}
