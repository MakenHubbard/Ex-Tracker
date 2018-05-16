
const loadLocations = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.stakeouts);
      })
      .fail((error) => {
        reject('shit broke', error);
      });
  });
};

module.exports = loadLocations;
