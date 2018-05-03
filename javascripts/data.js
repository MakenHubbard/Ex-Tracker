const loadEx = require('./ex');
// const loadLocations = require('./locations');

const whenExLoads = (data) => {
  console.log('data', data);
};

const whenExFails = (error) => {
  console.log('error', error);
};
const initializer = () => {
  loadEx(whenExLoads, whenExFails);
};

module.exports = initializer;
