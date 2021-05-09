const mongoose = require('mongoose');

console.log("-------", process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Book-Search-Engine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

module.exports = mongoose.connection;
