
if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./react-ional.dev.js')
}
else {
  module.exports = require('./react-ional.js')
}
