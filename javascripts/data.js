const loadEx = require('./ex');
const loadLocations = require('./locations');
const exDomString = require('./exDom');

// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON()
//     .then((result) => {
//       dogos = [...result,];
//       return secondPupJSON();

const bothData = () => {
  let exes = [];
  let locals = [];
  // let excations = [];
  return loadLocations()
    .then((result) => {
      console.error(result);
      locals = [...result,];
      return loadEx()
        .then((result2) => {
          exes = [...result2,];
          exDomString(exes, locals);
        });
    });
};

const initializer = () => {
  bothData();
};

module.exports = {
  initializer,
};
