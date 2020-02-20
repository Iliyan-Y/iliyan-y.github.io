document.onload = createMenu();

function createMenu() {

  var menu = ["Home", "Menu", "Page 2"];

  var listContainer = document.createElement('div');
  var listeElement = document.createElement('ul');


  //add list to the Page
  document.body.appendChild(listContainer);
  listContainer.appendChild(listeElement);

  menu.forEach(function(item) {
    let li = document.createElement('li');
    listeElement.appendChild(li);

    li.innerHTML += item;
  });

};

//grab the 3th element form the list and remove the name
var getQuotePage = document.getElementsByTagName('li');
getQuotePage[2].innerHTML = "";
//create a tag and add text to it
var aTagQuote = document.createElement('a');
var aTagText = document.createTextNode("QuotePage");
aTagQuote.appendChild(aTagText);
aTagQuote.setAttribute("href", "/quotepage/index.html")


getQuotePage[2].appendChild(aTagQuote);
