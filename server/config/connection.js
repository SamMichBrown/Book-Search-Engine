const mongoose = require('mongoose');

console.log("-------", process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hidden-scrubland-75569', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
