// Dom string function
const exOutputDiv = $('.exCard');
const locationOutputDiv = $('.locationCard');

const exDomString = (myEx) => {
  myEx.forEach((ex) => {
    let domString = '';
    domString += `<div class="exes text-center" id="${ex.name}">`;
    domString += `<img class="exImg" src="${ex.image}" alt="" width="240px" height="240px">`;
    domString += `<h1>${ex.name}</h1>`;
    domString += `<p>${ex.age}</p>`;
    domString += `<p><b>Reasons why she is my ex: </b>${ex.flaws}</p>`;
    domString += `</div>`;
    printExToDom(domString);
  });
};

const locationDomString = (stakeouts) => {
  stakeouts.forEach((stakeout) => {
    let domStrang = '';
    domStrang += `<div class="locates">`;
    domStrang += `<div class="col-md-4">`;
    domStrang += `<img src="${stakeout.locationImage}" alt="" width="300px" height="300px">`;
    domStrang += `<h2>${stakeout.nameOfLocation}</h2>`;
    domStrang += `<p>${stakeout.locationAddress}</p>`;
    domStrang += `<p><b>${stakeout.visitingHours}</b></p>`;
    domStrang += `</div>`;
    domStrang += `</div>`;
    printLocationToDom(domStrang);
  });
};

const printSingle = (myEx) => {
  console.log(myEx);
  let singleString = '';
  for (let k = 0; k < myEx.length; k++) {
    singleString += `<div class="jumbotron">`;
    singleString += `<div class="row">`;
    singleString += `<div class="text-center">`;
    singleString += `<img  src="${myEx.image}" alt="" width="240px" height="240px">`;
    singleString += `<h1>${myEx.name}</h1>`;
    singleString += `<div col-sm-3 col-sm-offset-4>`;
    singleString += `<p>${myEx.relatedLocations[0]}</p>`;
    singleString += `<p>`;
    singleString += `</div>`;
    singleString += `<p><a id="singleBack-btn" class="btn btn-primary btn-lg" href="#" role="button">Go Back</a></p>`;
    singleString += `</div>`;
    singleString += `</div>`;
    singleString += `</div>`;
  }
  singleExDom(singleString);
};

const singleExDom = (singleString) => {
  exOutputDiv.html(singleString);
};

const printExToDom = (exes) => {
  exOutputDiv.append(exes);
};

const printLocationToDom = (stakeout) => {
  locationOutputDiv.append(stakeout);
};

// const printSingleExToDom = () => {

// };

module.exports = {
  exDomString,
  locationDomString,
  printSingle,
};
