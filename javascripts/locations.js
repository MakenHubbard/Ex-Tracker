const loadLocations = (successFunction, errorFunction) => {
  $.get('../db/locations.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadLocations;
