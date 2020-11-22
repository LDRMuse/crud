import dotenv from 'dotenv';

// allows us to connect to mongodb
import pkg from 'mongodb';
const {MongoClient} = pkg

// allows us to use .env
dotenv.config();

const db = new MongoClient(process.env.MONGO_URI, {
  useUnifiedTopology: true,
});


(async () => {
  await db.connect();
  console.log('connected to db')
  process.on('SIGINT', () => {
    db.close().then(() => {
      console.info('Closing');
    });

    process.exit(0);
  });
})();

export default db;


