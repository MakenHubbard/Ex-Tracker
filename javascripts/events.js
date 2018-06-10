// put events on the buttons
const data = require('./data');
const exDomString = require('./exDom');
const locationData = require('./locations');
// const exData = require('./ex');

const whatTime = (e) => {
  const time = e.target.innerHTML;
  displayTime(time);
};

const displayLocation = () => {
  $(document).on('click', '#subby', (e) => {
    locationData().then((results) => {
      results.forEach((result) => {
        const userRequest = $('#userInput').val();
        if (userRequest === result.nameOfLocation) {
          $('.exCard').addClass('hide');
          $('.locationCard').addClass('hide');
          $('.searchedLocation').html(exDomString.printSearchedLocation(result));
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

const backFromSingleExBtnEvent = (e) => {
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
  backFromSingleExBtnEvent();
};

module.exports = events;
