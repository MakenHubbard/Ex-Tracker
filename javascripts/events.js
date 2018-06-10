// put events on the buttons
const data = require('./data');
const exDomString = require('./exDom');
const locationData = require('./locations');
// const exData = require('./ex');

const whatTime = (e) => {
  const time = e.target.innerHTML;
  displayTime(time);
};

const locationArray = [];
const displayLocation = () => {
  $(document).on('click', '#subby', (e) => {
    console.error('click event',e);
    locationData().then((results) => {
      console.error('inside the displayLocation function', results);
      results.forEach((result) => {
        const userRequest = $('#userInput').val();
        if (userRequest === result.nameOfLocation) {
          locationArray.push(result);
          console.error('loactionArray', locationArray);
          $('.exCard').html(exDomString.locationDomString(locationArray));
        };
      });
    });
  });
};

// const userInput = () => {
//   const userRequest = $('#userInput').val();
//   displayLocation(userRequest);
// };

const displayTime = (time) => {
  const selectedLocate = [];
  locationData().then((results) => {
    results.forEach((result) => {
      if (result.visitingHours === time) {
        selectedLocate.push(result);
      }
    });
  });
  $('.exCard').html(exDomString.locationDomString(selectedLocate));
};

const clickEx = () => {
  $(document).on('click', '.exes', (e) => {
    data.smashedData().then((data) => {
      data.forEach((ex) => {
        if ($(e.target).closest('.exes').attr('id') === ex.name) {
          exDomString.printSingle(ex);
          $('.locationCard').addClass('hide');
          $('.exCard').addClass('hide');
          $('.singleExCard').removeClass('hide');
        };
      });
    });
  });
};

const backBtnEvent = (e) => {
  $(document).on('click', '#goBack', (e) => {
    $('.locationCard').removeClass('hide');
    $('.exCard').removeClass('hide');
    $('.singleExCard').addClass('hide');
  });
};

const events = () => {
  $('body').on('click', '.times', whatTime);
  displayLocation();
  clickEx();
  backBtnEvent();
};

module.exports = events;
