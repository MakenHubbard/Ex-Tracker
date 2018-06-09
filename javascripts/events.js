// put events on the buttons
const data = require('./data');
const exDomString = require('./exDom');

const whatTime = (e) => {
  const time = e.target.innerHTML;
  displayTime(time);
};

const displayLocation = (userRequest) => {
  const locationArray = [];
  data.bothData().then((locals) => {
    locals.forEach((location) => {
      if (userRequest === location.nameOfLocation) {
        locationArray.push(location);
      };
    });
  });
  $('.exCard').html(exDomString(data.getEx(), locationArray));
};

const userInput = () => {
  const userRequest = $('#userInput').val();
  displayLocation(userRequest);
};

const displayTime = (time) => {
  const selectedLocate = [];
  data.bothData().then((locals) => {
    locals.forEach((location) => {
      if (location.visitingHours === time) {
        selectedLocate.push(location);
      }
    });
  });
  $('.exCard').html(exDomString(data.bothData(), selectedLocate));
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
  $('#subby').on('click', userInput);
  clickEx();
  backBtnEvent();
};

module.exports = events;
