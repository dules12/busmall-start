'use strict';

//array to hold
Product.myProducts = [];
//clicks throughout
var totalClicks = 0;
//keeps track of the products that have been displayed last
var lastDisplayed = [];
//hold the names of function Product
var names = [];
//holds total votes throughout
var totalVotes = [];
//the section element of function Product is linked to 'product-section' in HTML
var sectionEl = document.getElementById('product-section');
//the list made in JS is linked to 'total-results' in HTML
var ulEl = document.getElementById('total-results');


function Product(name, filepath) {
  //inputs here
  this.name = name;
  this.filepath = filepath;
  //setting votes and times displayed to 0 at beginning
  this.votes = 0;
  this.timesDisplayed = 0;

  Product.myProducts.push(this);
}

//New products createe with name and filepath`
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

//connecting products in js to the doc identifiers
Product.leftEl = document.getElementById('left');
Product.centerEl = document.getElementById('center');
Product.rightEl = document.getElementById('right');

//function to select a random image from the total image options
Product.randomProduct = function() {
  do {
    var randomLeft = Math.floor(Math.random() * Product.myProducts.length);
    var randomCenter = Math.floor(Math.random() * Product.myProducts.length);
    var randomRight = Math.floor(Math.random() * Product.myProducts.length);

    //excludes an image to be chosen that was just selected or is a repeat of any others on the page
  } while (randomLeft === randomCenter || randomLeft === randomRight || randomCenter === randomRight
    || lastDisplayed.includes(randomLeft) || lastDisplayed.includes(randomCenter) || lastDisplayed.includes(randomRight));

  //attaching random left, center and right to last displayed
  lastDisplayed[0] = randomLeft;
  lastDisplayed[1] = randomCenter;
  lastDisplayed[2] = randomRight;
  //attaching filepaths and names to the left, cener and right images
  Product.leftEl.src = Product.myProducts[randomLeft].filepath;
  Product.leftEl.alt = Product.myProducts[randomLeft].name;
  console.log(Product.leftEl.src);

  Product.centerEl.src = Product.myProducts[randomCenter].filepath;
  Product.centerEl.alt = Product.myProducts[randomCenter].name;
  console.log(Product.centerEl.src);

  Product.rightEl.src = Product.myProducts[randomRight].filepath;
  Product.rightEl.alt = Product.myProducts[randomRight].name;
  console.log(Product.rightEl);

  //times displayed within Products.myProducts is increased by one for each image every times it appears.
  Product.myProducts[randomLeft].timesDisplayed++;
  Product.myProducts[randomCenter].timesDisplayed++;
  Product.myProducts[randomRight].timesDisplayed++;
  console.log(Product.myProducts[randomLeft]);
  console.log(Product.myProducts[randomCenter]);
  console.log(Product.myProducts[randomRight]);
};



//The data in the list displayed at the end is attached to the doc with the following message
Product.showList = function() {
  for(var i in Product.myProducts) {
    var liEl = document.createElement('li');
    liEl.textContent = `${Product.myProducts[i].name} has ${Product.myProducts[i].votes} votes and was displayed ${Product.myProducts[i].timesDisplayed} times.`;
    ulEl.appendChild(liEl);
    console.log(Product.showList);
  }
};

//number of total votes is a function of the number of times a product appears and is voted on
Product.updateVotes = function() {
  for(var i in Product.myProducts) {
    totalVotes[i] = Product.myProducts[i].votes;

    names[i] = Product.myProducts[i].name;
  }
};

//handleClick is created within Product as a function of total clicks as they increase
Product.handleClick = function(event) {
  totalClicks++;
  console.log(totalClicks);

  //If the specific product is clicked on increment by 1
  for(var i in Product.myProducts) {
    if(event.target.alt === Product.myProducts[i].name) {
      Product.myProducts[i].votes++;
    }
  }

  //function used to hide pictures when it hits 25 clicks
  Product.hidePics = function() {
    sectionEl.classList.add('hidden');


  };


  //if clicks exceed 25 stop showing more and show the list
  if(totalClicks > 25) {
    sectionEl.removeEventListener('click', Product.handleClick);
    Product.hidePics();
    Product.showList();
    Product.updateVotes();
    Product.renderChart();

  } else {
    Product.randomProduct();
  }

};

sectionEl.addEventListener('click', Product.handleClick);
Product.randomProduct();

//creating chart
Product.renderChart = function() {
  var context = document.getElementById('Mychart').getContext('2d');



  var Mychart = new Chart(context, {
    type: 'bar',
    data : {
      labels: Product.names,
      datasets: [{
        label: 'Votes Per Product',
        data: Product.totalVotes,
        backgroundColors: [
          'rgba(236, 129, 132, 0.4)',
          'rgba(44, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(225,109,129,1)',
          'rgba(24, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          tick: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
};