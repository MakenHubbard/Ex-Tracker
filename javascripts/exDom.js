// Dom string function
const singleOutputDiv = $('.singleExCard');
const exOutputDiv = $('.exCard');
const locationOutputDiv = $('.locationCard');
const searchedLocationOutputDiv = $('.searchedLocation');
const timeOutputDiv = $('.timeDisplayCard');

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

const printSearchedLocation = (result) => {
  let domStrang = '';
  domStrang += `<div class="locates">`;
  domStrang += `<div class="col-md-4">`;
  domStrang += `<img src="${result.locationImage}" alt="" width="300px" height="300px">`;
  domStrang += `<h2>${result.nameOfLocation}</h2>`;
  domStrang += `<p>${result.locationAddress}</p>`;
  domStrang += `<p><b>${result.visitingHours}</b></p>`;
  domStrang += `</div>`;
  domStrang += `</div>`;
  printSearchedLocationToDom(domStrang);
};

const printSingle = (data) => {
  let singleString = '';
  singleString += `<div class="jumbotron">`;
  singleString += `<div class="row">`;
  singleString += `<div>`;
  singleString += `<img src="${data.image}" alt="" width="240px" height="240px">`;
  singleString += `<h1>${data.name}</h1>`;
  singleString += `<p>${data.relatedLocations[0].nameOfLocation}</p>`;
  singleString += `<p>${data.relatedLocations[1].nameOfLocation}</p>`;
  singleString += `<p>${data.relatedLocations[2].nameOfLocation}</p>`;
  singleString += `<button id="goBack" type="button" class="btn btn-danger">Go Back</button>`;
  singleString += `</div>`;
  singleString += `</div>`;
  singleString += `</div>`;

  singleExDom(singleString);
};

const printTimes = (times) => {
  let timeStrang = '';
  timeStrang += `<div class="locates">`;
  timeStrang += `<button id="backButtForTimes" class="col-xs-12 btn btn-danger text-center">Go Back</button>`;
  times.forEach((time) => {
    timeStrang += `<div id="allLocations" class="col-md-4">`;
    timeStrang += `<img src="${time.locationImage}" alt="" width="300px" height="300px">`;
    timeStrang += `<h2>${time.nameOfLocation}</h2>`;
    timeStrang += `<p>${time.locationAddress}</p>`;
    timeStrang += `<p><b>${time.visitingHours}</b></p>`;
    timeStrang += `</div>`;
    timeStrang += `</div>`;
  });
  printSelectedTimeToDom(timeStrang);
};

const singleExDom = (singleString) => {
  singleOutputDiv.append(singleString);
};

const printExToDom = (exes) => {
  exOutputDiv.append(exes);
};

const printLocationToDom = (stakeout) => {
  locationOutputDiv.append(stakeout);
};

const printSearchedLocationToDom = (result) => {
  searchedLocationOutputDiv.append(result);
};

const printSelectedTimeToDom = (time) => {
  timeOutputDiv.html(time);
};

module.exports = {
  exDomString,
  locationDomString,
  printSingle,
  printSearchedLocation,
  printTimes,
};
