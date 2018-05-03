// Dom string function

const exDomString = (myEx) => {
  console.log(myEx);
  let domString = '';
  domString += `<div class="exes">`;
  domString += `<img src="${myEx.image} alt="" width="240px" height="240px">"`;
  domString += `<h1>${myEx.name}</h1>`;
  domString += `<p>${myEx.age}</p>`;
  domString += `<p>Reasons why she is my ex: ${myEx.flaws}</p>`;
  domString += `</div>`;
  return domString;
};

module.exports = exDomString;
