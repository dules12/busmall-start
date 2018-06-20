'use strict';

//array to hold 

Product.myProducts = [];

Product.totalClicks = 0

Product.lastDisplayed = [];

Product.names = [];

Product.votes = [];

Product.sectionEl =  document.getElementById('product-section');

Product.ulEl = document.getElementById('total-results');

//Product.imgElement = document.getElementById('ad-pic');
//Product.imgElementTwo = document.getElementById('ad-pictwo');
//Product.imgElementThree = document.getElementById('ad-picthree');

function Product(name, filepath) {
  //inputs here
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Product.myProducts.push(this.name);
  }

new Product('bag','/img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet-sweep','img/pet-sweeep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('sweep','img/sweep.jpg');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.jpg');
new Product('water-can','img/water-can.jpg');
new Product('wine-glass','img/wine-glass.jpg');

Product.leftEl = document.getElementById('left');
Product.centerEl = document.getElementById('center');
Product.rightEl = document.getElementById('right');

Product.randomProduct = function() {
  do {
    var randomLeft = Math.floor(Math.random() * Product.myProducts.length);
    var randomCenter = Math.floor(Math.random() * Product.myProducts.length);
    var randomRight = Math.floor(Math.random() * Product.myProducts.length);

  } while (randomLeft === randomCenter || randomLeft === randomRight || randomCenter === randomRight 
    || Product.lastDisplayed.includes(randomLeft) || Product.lastDisplayed.includes(randomCenter) || Product.lastDisplayed.includes(randomRight));

Product.lastDisplayed[0] = randomLeft;
Product.lastDisplayed[1] = randomCenter;
Product.lastDisplayed[2] = randomRight;

Product.leftEl.src = Product.myProducts[randomLeft].filepath;
Product.leftEl.alt = Product.myProducts[randomLeft].name;

Product.centerEl.src = Product.myProducts[randomCenter].filepath;
Product.centerEl.alt = Product.myProducts[randomCenter].name;

Product.rightEl.src = Product.myProducts[randomRight].filepath;
Product.rightEl.src = Product.myProducts[randomRight].name;

Product.myProducts[randomLeft].timesDisplayed++;
Product.myProducts[randomCenter].timesDisplayed++;
Product.myProducts[randomRight].timesDisplayed++;
};

Product.showList = function() {
  for(var i in Product.myProducts) {
    var liEl = document.createElement('li')
    liEl.textContent = '${Product.myProducts[i].name} has ${Product.myProducts[i].votes} votes and was displayed ${Product.myProducts[i].timesDisplayed} times.';
    Product.ulEl.appendchild(liEl);
  }
};

Product.updateVotes = function() {
  for(var i in Product.myProducts) {
    Product.totalVote[i] = Product.myProducts[i].votes;

    Product.names[i] = Product.myProducts[i].name;
  }
};

Product.handleClick = function(event) {
  Product.totalClicks++;
  console.log(Product.totalClicks);

  for(var i in Product.myProducts) {
    if(event.target.alt === Product.myProducts[i].name) {
      Product.myProducts[i].votes++;
    }
  }
  if(Product.totalClicks > 25) {
    
    Product.showList();
    Product.updatetotalVotes();
  } else {
    Product.randomProduct();
  }
  
 };

 

/*Product.randomProduct = function() {
  var randomNum = Math.random() * Product.myProducts.length;
  var roundedDown = Math.floor(randomNum);
  var oneProduct = Product.myProducts[roundedDown];
  Product.imgElement.src = oneProduct.filepath;
}
Product.randomProductTwo = function() {
  var randomNum = Math.random() * Product.myProducts.length;
  var roundedDown = Math.floor(randomNum);
  var oneProduct = Product.myProducts[roundedDown];
  Product.imgElementTwo.src = oneProduct.filepath;
}

Product.randomProductThree = function() {
  var randomNum = Math.random() * Product.myProducts.length;
  var roundedDown = Math.floor(randomNum);
  var oneProduct = Product.myProducts[roundedDown];
  Product.imgElementThree.src = oneProduct.filepath; 
}

Product.imgElement.addEventListener('click', Product.randomProduct);
Product.imgElementTwo.addEventListener('click', Product.randomProductTwo);
Product.imgElementThree.addEventListener('click', Product.randomProductThree);





Product.randomProduct();
Product.randomProductTwo();
Product.randomProductThree();
*/
