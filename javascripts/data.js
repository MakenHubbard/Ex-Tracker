const loadEx = require('./ex');
const loadLocations = require('./locations');
const dom = require('./exDom');

// let spots = [];

const bothData = () => {
  return loadLocations()
    .then((locals) => {
      dom.locationDomString(locals);
      return loadEx()
        .then((exes) => {
          dom.exDomString(exes);
          return Promise.resolve(exes, locals);
        });
    });
};

const smashedData = () => {
  return loadLocations()
    .then((locals) => {
      // dom.locationDomString(locals);
      return loadEx()
        .then((exes) => {
          // dom.exDomString(exes);
          const exPlusLocations = dataSmash(exes, locals);
          return Promise.resolve(exPlusLocations);
        });
    });
};

const dataSmash = (exes, locals) => {
  const allData = [];
  // this is where the smash work happens
  exes.forEach((ex) => {
    const finalEx = ex;
    finalEx.relatedLocations = [];
    for (let i = 0; i < ex.locations.length; i++) {
      locals.forEach((local) => {
        if (ex.locations[i] === local.locationId) {
          finalEx.relatedLocations.push(local);
        };
      });
    };
    allData.push(finalEx);
  });
  return allData;
};

const initializer = () => {
  bothData();
};

module.exports = {
  initializer,
  smashedData,
};
