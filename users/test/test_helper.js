const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test_users', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
  .once('open', () => console.log('Good to go'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });
