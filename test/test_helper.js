const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

mongoose.Promise = global.Promise;

async function connect() {
  const MONGO_URI = process.env.MONGO_URI || 'localhost';
  const MONGO_PORT = process.env.MONGO_PORT || 27017;
  try {
    console.log('MONGO_URI', MONGO_URI);
    console.log('MONGO_PORT', MONGO_PORT);
    const conn = await mongoose.connect(`mongodb://${MONGO_URI}:${MONGO_PORT}/test_users`, {
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
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        // Ready to run the next test
        done();
      });
    });
  });
});
