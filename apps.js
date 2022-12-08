// Cookie-Store
// * name: 'Seattle',
// * minCust: 23,
// * maxCust: 65,
// * avgCookieBought: 6.3,
// * cookiesBought: [],

// ************ GLOBALS ******************
// HELPFUL FOR YOUR LAB!!
 let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

 let stores = []; 

// ************ DOM WINDOWS **************
// STEP 1: WINDOW INTO THE DOM
let seattlelist=document.getElementById ('SeattleList');


// *********** HELPER FUNCTIONS / UTILITES ************
function randomCustomer(min,max){
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// TODO:Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// ************** CONSTRUCTOR FUNCTION *************

function Store (storeCity, minCust, maxCust, avgCookieBought){
  this.storeCity = storeCity;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
}

// console.log (newStore)
// newStore.render();

// ************** PROTOTYPE METHODS *************

Store.prototype.createcookiesBought = function(){
  for(let i=0;i <hours.length;i++){
    let cookiesNeeded=Math.floor(randomCustomer(this.minCust,this.maxCust)* this.avgCookieBought);
    console.log(cookiesNeeded)
    this.cookiesBought.push(cookiesNeeded);
  }
  // console.log (this.cookiesBought);
}

//****************TABLE FUNCTIONS****************** */
function tableHeader (){
  let table = document.getElementById('SalesTable')
  let tr = document.createElement('tr')
  table.appendChild(tr)
  let thead = document.createElement('thead')
  tr.appendChild(thead)
for (let i=0;i <hours.length;i++){
  let th = document.createElement('th')
  th.textContent = hours[i]
  tr.appendChild(th)
}
let th = document.createElement('th')
th.textContent = 'Daily Totals'
tr.appendChild(th)

}



/****************RENDER FUNCTION****************** */

Store.prototype.render = function () {
  console.log("Here")
  this.createcookiesBought();
  let table = document.getElementById('SalesTable')
  console.log(table)
  let tr = document.createElement('tr')
  let td = document.createElement('td')
  table.appendChild(tr)
  td.textContent = this.storeCity
  tr.appendChild(td)
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    console.log(this.cookiesBought[i])
    td.textContent = this.cookiesBought[i];
    tr.appendChild(td);
  }
  table.appendChild(tr)
}

// Seattle.render();
function renderAll(){

  for (let i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}


// TODO: Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following: Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

// TODO Each cookie stand location should have a separate render() method that creates and appends its row to the table The header row and footer row are each created in their own stand-alone function NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).



// ********** EXECUTABLE CODE ****************

let Seattle = new Store ('Seattle', '23', '65', '6.3');
let Tokyo = new Store ('Tokyo', '3', '24', '1.2');
let Dubai = new Store ('Dubai', '11', '38', '3.7');
let Paris = new Store ('Paris', '20', '38', '2.3');
let Lima = new Store ('Lima', '2', '16', '4.6');

stores.push(Seattle);
stores.push(Tokyo);
stores.push(Dubai);
stores.push(Paris);
stores.push(Lima);


console.log(stores)
tableHeader();
renderAll();











// function renderAll(){
//   for(let i = 0; i < kittenCaboodle.length; i++){
//     kittenCaboodle[i].getAge();
//     kittenCaboodle[i].render();
//   }
// }
// renderAll();



// *********** OBJECT LITERALS ****************

// let Seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   randomCustomer:function(){
//     // got from MDN docs
//      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesSold:function(){
//        for(let i=0;i <hours.length;i++){
//       let cookiesNeeded=Math.floor(this.randomCustomer()* this.avgCookieBought);
//       this.cookiesBought.push(cookiesNeeded);
//     }
//     console.log (this.cookiesBought);
//   },
//   render(){
//     this.cookiesSold();
//       for(let i=0;i <hours.length;i++){
//       let li=document.createElement('li');
//       li.textContent=`${hours[i]}: ${this.cookiesBought[i]}`;
//       seattlelist.appendChild(li);
//     }
    
//   }

// };

// console.log (Seattle)
// Seattle.render();

// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
// };

// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
// };

// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 62.3,
//   cookiesBought: [],
// };

// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
// };
  


// ******** DOM MANIPULATION ********

//   let articleElem = document.createElement('article');
//   kittenSection.appendChild(articleElem);

//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = this.name;
//   articleElem.appendChild(h2Elem);

//   let pElem = document.createElement('p');
//   pElem.textContent = `${this.name} is ${this.age} months`;
//   articleElem.appendChild(pElem);

//   let ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < this.interests.length; i++) {
//     let liElem = document.createElement('li');
//     liElem.textContent = this.interests[i];
//     ulElem.appendChild(liElem);
//   }

//   let imgElem = document.createElement('img');
//   imgElem.src = this.photo;
//   imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
//   articleElem.appendChild(imgElem);
// }
// };

// ********** EXECUTABLE CODE ****************
// frankie.getAge();
// frankie.render();
// jumper.getAge();
// jumper.render();
// serena.getAge();
// serena.render();
// console.log(frankie);
