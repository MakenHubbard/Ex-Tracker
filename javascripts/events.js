// put events on the buttons
const data = require('./data');
const exDomString = require('./exDom');

const whatTime = (e) => {
  const time = e.target.innerHTML;
  displayTime(time);
};

const displayLocation = (userRequest) => {
  const locationArray = [];
  const locations = data.getLocations();
  locations.forEach((location) => {
    if (userRequest === location.nameOfLocation) {
      locationArray.push(location);
    };
  });
  $('.exCard').html(exDomString(data.getEx(), locationArray));
};

const userInput = () => {
  const userRequest = $('#userInput').val();
  displayLocation(userRequest);
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

const clickEx = () => {
  $(document).on('click', '.exImg', (e) => {
    data.smashedData()
      .then((results) => {
        for (let j = 0; j < results.length; j++) {
          if (e.target.id === results[j].name) {
            exDomString.printSingle();
          }
        };
      });
  });
};

const events = () => {
  $('body').on('click', '.times', whatTime);
  $('#subby').on('click', userInput);
  clickEx();
};

module.exports = {
  events,
};
