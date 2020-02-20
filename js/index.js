
function addNewElement(new_text, y){
  var div = document.createElement('div');
  div.setAttribute('id', 'newElement');
  div.textContent = new_text;
  var parag_p1 = document.getElementById("p1");

  if (y == "top" || y == top || y == 1 )
    document.body.insertBefore(div, parag_p1);
  else
    document.body.appendChild(div);
};




addNewElement("My first JavaScript", 1);


//My first ever JavaScript Object
const person = {
  name: ['Bob', "Smith"],
  age: 32,
  gender: 'male',
  interests: ["Music", 'games'],
  bio: function() {
    alert(this.name[0] + "" + this.name[1]+ ' IS ' + this.age + 'Years old. He likes ' +
  this.interests);
  },
  greeting: function() {
    alert("Hi! I'm " + this.name[0]);
  }
};

let myDataName = "he";
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
