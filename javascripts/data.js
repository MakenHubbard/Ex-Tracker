const loadEx = require('./ex');
const loadLocations = require('./locations');
const dom = require('./exDom');

// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON()
//     .then((result) => {
//       dogos = [...result,];
//       return secondPupJSON();

const bothData = () => {
  // let exes = [];
  // let locals = [];
  // let excations = [];
  return loadLocations()
    .then((locals) => {
      // console.error(result);
      // locals = [...result,];
      dom.locationDomString(locals);
      return loadEx()
        .then((exes) => {
          // console.error(result2);
          // exes = [...result2,];
          dom.exDomString(exes);
          // return Promise.resolve(exes,locals);
        });
    });
};

const initializer = () => {
  bothData();
};

module.exports = {
  initializer,
};
