const loadEx = (successFunction, errorFunction) => {
  $.get('../db/ex.json')
    .done(successFunction)
    .fail(errorFunction);
};

module.exports = loadEx;
