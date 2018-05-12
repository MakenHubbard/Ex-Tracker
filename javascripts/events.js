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
  console.log('after variable is set', locations);
  locations.forEach((location) => {
    console.log('after the for each loop', locations);
    if (userRequest === location.nameOfLocation) {
      locationArray.push(location);
      console.log('after the push inside the for each code block', locationArray);
    };
  });
  $('.exCard').html(exDomString(data.getEx(), locationArray));
  console.log('last thing before the function closes', locationArray);
};

const userInput = () => {
  const userRequest = $('#userInput').val();
  displayLocation(userRequest);
};

// new function

// const userSearch = (e,userInput) => {
//   e.preventDefault();
//   // const userRequest = $(e.target).val();
//   data.setUserInput(userInput);
//   $('.subby').submit((locations, text) => {
//     console.log(text);
//   });
// };

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
  $('#subby').on('click', userInput);
};

module.exports = events;
