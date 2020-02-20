function back(){
    //Create Back to home Button
  var aBack = document.createElement('a');
  var backTxt = document.createTextNode("Back");
  aBack.appendChild(backTxt);
  aBack.setAttribute("href", "../index.html");
  aBack.setAttribute("id", "back");
  document.body.appendChild(aBack);
}
function quoteFunction() {
  var quotes = ['one','two','three'];
  //create new div
  var innerDiv = document.createElement('div');
  innerDiv.setAttribute("id", "innerDiv");
  document.body.appendChild(innerDiv);
  //create random number based on the lenght of the array
  var quotesInTotal = quotes.length;
  var randomNumber = Math.floor(Math.random() * quotesInTotal);
  //create paragraph with the quotes
  var createP = document.createElement('p');
  createP.setAttribute("id", "p1");
  //get random quote
  var pTextQuote = document.createTextNode(quotes[randomNumber]);
  //add the quote to the page
  createP.appendChild(pTextQuote);
  innerDiv.appendChild(createP);

  function quoteButton() {
    var createButton = document.createElement('button')
    createButton.innerHTML = "New Quote";
    createButton.setAttribute("class", "btn");
    createButton.setAttribute("id", "btn-1");
    innerDiv.appendChild(createButton);

    createButton.addEventListener("click", function() {
      var newQote = document.getElementById('p1');
      newQote.innerHTML = "";
      newRandomNumber = Math.floor(Math.random() * quotesInTotal);
      var newQoteText = document.createTextNode(quotes[newRandomNumber]);
      newQote.appendChild(newQoteText);
    });

  }

  function backButton() {
    var createBackButton = document.createElement('button')
    createBackButton.innerHTML = "First Quote";
    createBackButton.setAttribute("class", "btn");
    createBackButton.setAttribute("id", "btn-2");
    innerDiv.appendChild(createBackButton);

    createBackButton.addEventListener("click", function() {
      createP.innerHTML = "";
      createP.appendChild(pTextQuote);
    });

  }
 backButton();
 quoteButton();
}

back();
quoteFunction();
