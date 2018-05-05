const loadEx = require('./ex');
const loadLocations = require('./locations');
const exDomString = require('./exDom');

let ex = {};

const whenExLoads = (data) => {
  console.log('data', data);
  ex = data.myEx;
  loadLocations(whenLocationsLoad, whenStuffFails);
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
  $('.exCard').append(exDomString(ex,data.stakeouts));
};

const whenStuffFails = (error) => {
  console.log('error', error);
};
const initializer = () => {
  loadEx(whenExLoads, whenStuffFails);
};

module.exports = initializer;
