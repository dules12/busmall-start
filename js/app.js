'use strict';

//array to hold
Product.myProducts = [];
//clicks throughout
Product.totalClicks = 0;
//keeps track of the products that have been displayed last
Product.lastDisplayed = [];
//hold the names of function Product
Product.names = [];
//holds total votes throughout
Product.totalVotes = [];
//the section element of function Product is linked to 'product-section' in HTML
Product.sectionEl = document.getElementById('product-section');
//the list made in JS is linked to 'total-results' in HTML
Product.ulEl = document.getElementById('total-results');


function Product(name, filepath) {
  //inputs here
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Product.myProducts.push(this);
}

new Product('bag','img/bag.jpg');
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
new Product('pet','img/pet.jpg');
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
  console.log(Product.leftEl.src);

  Product.centerEl.src = Product.myProducts[randomCenter].filepath;
  Product.centerEl.alt = Product.myProducts[randomCenter].name;
  console.log(Product.centerEl.src);

  Product.rightEl.src = Product.myProducts[randomRight].filepath;
  Product.rightEl.alt = Product.myProducts[randomRight].name;
  console.log(Product.rightEl);

  Product.myProducts[randomLeft].timesDisplayed = Product.myProducts[randomLeft].timesDisplayed + 1;
  Product.myProducts[randomCenter].timesDisplayed++;
  Product.myProducts[randomRight].timesDisplayed++;
};

Product.showList = function() {
  for(var i in Product.myProducts) {
    var liEl = document.createElement('li');
    liEl.textContent = `${Product.myProducts[i].name} 'has' ${Product.myProducts[i].votes} 'votes and was displayed' ${Product.myProducts[i].timesDisplayed} times.`;
    Product.ulEl.appendchild(liEl);
  }
};

Product.updateVotes = function() {
  for(var i in Product.myProducts) {
    Product.totalVotes[i] = Product.myProducts[i].votes;

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
    Product.sectionEl.removeEventListener('click', Product.handleClick);

    Product.showList();
    Product.updatetotalVotes();
  } else {
    Product.randomProduct();
  }

};

Product.sectionEl.addEventListener('click', Product.handleClick);

Product.randomProduct();
