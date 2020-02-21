document.onload = createMenu();

function createMenu() {

  var menu = ["Home", "Message Page", "Page 2"];

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
aTagQuote.setAttribute("href", "/QuotePage")
// insert the link into the page 
getQuotePage[2].appendChild(aTagQuote);

//add the link to the message page
getQuotePage[1].innerHTML = "";
var aTagMessagePage = document.createElement('a');
aTagMessagePage.innerHTML = "Message Page";
getQuotePage[1].appendChild(aTagMessagePage);
aTagMessagePage.setAttribute("href", "/PassTheMessage");
