// Dom string function
const exOutputDiv = $('.exCard');
const locationOutputDiv = $('.locationCard');

const exDomString = (myEx) => {
  myEx.forEach((ex) => {
    let domString = '';
    domString += `<div class="exes text-center" id="${ex.name}">`;
    domString += `<img src="${ex.image}" alt="" width="240px" height="240px">`;
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

const printSingle = (myEx, stakeouts) => {
  myEx.forEach((ex) => {
    let singleString = '';
    singleString += `<div class="jumbotron">`;
    singleString += `<div class="row">`;
    singleString += `<div>`;
    singleString += `<img src="${myEx.image}" alt="" width="240px" height="240px">`;
    singleString += `<h1>${myEx.name}</h1>`;
    for (let q = 0; q < stakeouts.length; q++) {
      singleString += `<p>${stakeouts[q]}</p>`;
      singleString += `</div>`;
      singleString += `</div>`;
      singleString += `</div>`;
    };
    singleExDom(singleString);
  });
};

const singleExDom = () => {
  exOutputDiv.html();
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
