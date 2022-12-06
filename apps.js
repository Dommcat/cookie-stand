// Cookie-Store

// * name: 'Seattle',
// * minCust: 23,
// * maxCust: 65,
// * avgCookieBought: 6.3,
// * cookiesBought: [],

// ************ GLOBALS ******************
// HELPFUL FOR YOUR LAB!!
 let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// ************ DOM WINDOWS **************

// STEP 1: WINDOW INTO THE DOM
// let kittenSection = document.getElementById('kitten-profiles');
let seattlelist=document.getElementById ('SeattleList');

// console.dir(kittenSection);

// *********** HELPER FUNCTIONS / UTILITES ************

function randomCustomer(min,max){
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// *********** OBJECT LITERALS ****************

let Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  randomCustomer:function(){
    // got from MDN docs
     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },
  cookiesSold:function(){
       for(let i=0;i <hours.length;i++){
      let cookies=Math.floor(this.randomCustomer()* this.avgCookieBought);
      this.cookiesBought.push(cookies);
    }
    console.log (this.cookiesBought);
  },
  render(){
    this.cookiesSold();
      for(let i=0;i <hours.length;i++){
      let li=document.createElement('li');
      li.textContent=`${hours[i]}: ${this.cookiesBought[i]}`;
      seattlelist.appendChild(li);
    }
    
  }

};

console.log (Seattle)
Seattle.render();


let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
};

let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
};

let Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 62.3,
  cookiesBought: [],
};

let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
};
  

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
