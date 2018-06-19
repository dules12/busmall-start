'use strict'

//array to hold 

Product.myProducts = [];

Product.totalClicks = 0

Product.lastDisplayed = [];

Product.names = [];

Product.totalVotes = [];

//Product.imgElement = document.getElementById('ad-pic');
//Product.imgElementTwo = document.getElementById('ad-pictwo');
//Product.imgElementThree = document.getElementById('ad-picthree');

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timeDisplayed = 0;
  Products.myProducts.push(this.name);
  }

new Product('bad','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('img/breakfast.jpg');
new Product('img/bubblegum.jpg');
new Product('img/chair.jpg');
new Product('img/cthulhu.jpg');
new Product('img/dog-duck.jpg');
new Product('img/dragon.jpg');
new Product('img/pen.jpg');
new Product('img/pet-sweeep.jpg');
new Product('img/scissors.jpg');
new Product('img/shark.jpg');
new Product('img/sweep.jpg');
new Product('img/tauntaun.jpg');
new Product('img/unicorn.jpg');
new Product('img/usb.jpg');
new Product('img/water-can.jpg');
new Product('img/wine-glass.jpg');


Product.randomProduct = function() {
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

