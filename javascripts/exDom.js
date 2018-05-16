// Dom string function
const exOutputDiv = $('.exCard');
const locationOutputDiv = $('.locationCard');

const exDomString = (myEx) => {
  let domString = '';
  myEx.forEach((exes) => {
    domString += `<div class="exes text-center">`;
    domString += `<img src="${myEx.image}" alt="" width="240px" height="240px">"`;
    domString += `<h1>${myEx.name}</h1>`;
    domString += `<p>${myEx.age}</p>`;
    domString += `<p><b>Reasons why she is my ex: </b>${myEx.flaws}</p>`;
    domString += `</div>`;
    printExToDom(domString);
  });
};

const locationDomString = (stakeouts) => {
  let domStrang = '';
  stakeouts.forEach((stakeout) => {
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

const printExToDom = (exes) => {
  exOutputDiv.append(exes);
};

const printLocationToDom = (stakeout) => {
  locationOutputDiv.append(stakeout);
};

module.exports = {
  exDomString,
  locationDomString,
};
