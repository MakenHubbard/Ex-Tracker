// Dom string function

const exDomString = (myEx, stakeouts) => {
  console.log(myEx);
  let domString = '';
  domString += `<div class="exes text-center">`;
  domString += `<img src="${myEx.image} alt="" width="240px" height="240px">"`;
  domString += `<h1>${myEx.name}</h1>`;
  domString += `<p>${myEx.age}</p>`;
  domString += `<p><b>Reasons why she is my ex:</b>${myEx.flaws}</p>`;
  domString += `</div>`;

  stakeouts.forEach((stakeout) => {
    domString += `<div class="locates">`;
    domString += `<div class="col-md-4">`;
    domString += `<img src="${stakeout.locationImage}" alt="" width="300px" height="300px">`;
    domString += `<h2>${stakeout.nameOfLocation}</h2>`;
    domString += `<p>${stakeout.locationAddress}</p>`;
    domString += `<p><b>${stakeout.visitingHours}</b></p>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = exDomString;
