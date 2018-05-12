const loadEx = require('./ex');
const loadLocations = require('./locations');
const exDomString = require('./exDom');

let ex = {};
let locations = [];

const whenExLoads = (data) => {
  console.log('data', data);
  ex = data.myEx;
  loadLocations(whenLocationsLoad, whenStuffFails);
};

const getLocations = () => {
  return locations;
};

const getEx = () => {
  return ex;
};

const getUserInput = () => {
  // const userInput = $('#subby').val();
};

const setUserInput = (userInput) => {
  $('#subby').val(userInput);
};

const whenLocationsLoad = (data) => {
  locations = data.stakeouts;
  $('.exCard').append(exDomString(ex, locations));
};

const whenStuffFails = (error) => {
  console.log('error', error);
};
const initializer = () => {
  loadEx(whenExLoads, whenStuffFails);
};

module.exports = {
  initializer,
  getLocations,
  getEx,
  getUserInput,
  setUserInput,
};
