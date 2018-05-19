const data = require('./data');
const events = require('./events');

data.initializer();
data.smashedData().then((results) => {
  console.error(results);
});
events();
