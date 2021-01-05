if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./react-micron.dev.js')
}
else {
  module.exports = require('./react-micron.js')
}
