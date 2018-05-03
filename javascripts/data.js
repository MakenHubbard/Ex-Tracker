const loadEx = require('./ex');
const loadLocations = require('./locations');

const whenExLoads = (data) => {
  console.log('data', data);
};

const whenLocationsLoad = (data) => {
  console.log('data', data);
};

const whenStuffFails = (error) => {
  console.log('error', error);
};
const initializer = () => {
  loadEx(whenExLoads, whenStuffFails);
  loadLocations(whenLocationsLoad, whenStuffFails);
};

module.exports = initializer;
