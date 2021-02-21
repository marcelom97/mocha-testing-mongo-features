const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function connect() {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/test_users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected -> host:${conn.connection.host} DB:${conn.connection.name}`);
  } catch (error) {
    console.error(error);
  }
}

before(async () => {
  await connect();
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});
