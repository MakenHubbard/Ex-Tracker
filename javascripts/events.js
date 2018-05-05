// put events on the buttons
const data = require('./data');
const exDomString = require('./exDom');

const whatTime = (e) => {
  const time = e.target.innerHTML;
  displayTime(time);
};

const userSearch = (e) => {
  $('.searchy').submit((locations, text) => {
      console.log(e);
  })
};


const displayTime = (time) => {
  const selectedLocate = [];
  const locations = data.getLocations();
  locations.forEach((location) => {
    if (location.visitingHours === time) {
      selectedLocate.push(location);
    }
  });
  $('.exCard').html(exDomString(data.getEx(), selectedLocate));
};

const events = () => {
  $('body').on('click', '.times', whatTime);
};

module.exports = events;
