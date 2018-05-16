
const loadEx = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.myEx);
      })
      .fail((error) => {
        reject('shit broke', error);
      });
  });
};

module.exports = loadEx;
