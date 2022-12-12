// Cookie-Store
// * name: 
// * minCust: 
// * maxCust: 
// * avgCookieBought: 
// * cookiesBought:

// ************ GLOBALS ******************

 let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

 let stores = []; 

// ************ DOM WINDOWS **************

let seattlelist=document.getElementById ('SeattleList');

// ************ STEP ONE: Listen Element **************

let myForm=document.getElementById('CookieStand-Form');

// ********** STEP TWO: ADD EVENT LISTENER (Call back function)****************

myForm.addEventListener('submit',handleSubmit);

// ********** STEP THREE: DEFINE OUR EVENT HANDLER ****************

function handleSubmit(event){
  event.preventDefault();

  console.dir(event.target);

  let storeCity = event.target.storeCity.value;
  console.log(storeCity);

  let minCust = +event.target.minCust.value;
  console.log(minCust);

  let maxCust = +event.target.maxCust.value;
  console.log(maxCust);

  let avgCookieBought = +event.target.avgCookieBought.value;
  console.log(avgCookieBought);
  
  let newStore = new Store (storeCity, minCust,maxCust , avgCookieBought);
  storeLocations.push(newStore)
  
  console.log(average);

 document.getElementById("SalesTable").deleteRow(-1);
}

newStore.randomCookies();
newStore.render();
footer();

// ************** PROTOTYPE METHODS *************

Store.prototype.createcookiesBought = function(){
  for(let i=0;i <hours.length;i++){
    let cookiesNeeded=Math.floor(randomCustomer(this.minCust,this.maxCust)* this.avgCookieBought);
    console.log(cookiesNeeded)
    this.cookiesBought.push(cookiesNeeded);
  }

}

// ************************************************ FUNCTIONS / UTILITES ************

function randomCustomer(min,max){
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

newStore.randomCustomer();

// ************** CONSTRUCTOR FUNCTION *************

function Store (storeCity, minCust, maxCust, avgCookieBought){
  this.storeCity = storeCity;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
}

/*************************************************RENDER FUNCTION****************** */

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

function renderAll(){
  for (let i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

renderAll();

//*****************************************TABLE HEADER/FOOTER FUNCTIONS****************** */

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

function footer() {
    let table = document.getElementById('SalesTable');
    let tr = document.createElement('tr');
    table.appendChild(tr)
    let tfoot = document.createElement('tfoot');
    tr.appendChild(tfoot);
  for (let i = 0; i < hours.length; i++) 
    totalHours = totalHours + storeLocations[j].cookiesPerHour[i]
    tr.textContent = 'totals'
}
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
{
  table.appendChild(tr)

}

// function footer() {
//   let table = document.getElementById('SalesTable');
//   let tr = document.createElement('tr');
//   let tr = document.createElement('td');
//   td.textContent = 'totals'
//   tr.appendChild(td);
//   for (let i = 0; i < hours.length; i++) {
//     totalHours = totalHours + storeLocations[j].cookiesPerHour[i]
//   }

//   let td = document.createElement('td');
//   td.textContent = totalHours;
//   tr.appendChild(td);

//   table.appendChild(tr)

// }


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


// *******************************************************THE END****************


// / ********** EXECUTABLE CODE ****************
// frankie.getAge();
// frankie.render();
// jumper.getAge();
// jumper.render();
// serena.getAge();
// serena.render();
// console.log(frankie);
