const mongoose = require('mongoose');

async function connect() {
  const conn = await mongoose.connect('mongodb://localhost:27017/test_users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log(`MongoDB Connected -> host:${conn.connection.host} DB:${conn.connection.name}`);
}

connect();

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});
