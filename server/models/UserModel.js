const mongoose = require('mongoose');
import dotenv from (dotenv);

// Define schema
const Schema = mongoose.Schema;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'breakfasticDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


// setting up fields for the schema with datatype
const userSchema = new Schema({
  googleId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  ingredients: [],
  favorites: [],
});

// setting up a model
const User = mongoose.model('User', userSchema);

module.exports = User;

// // Compile model from schema
// const Student = mongoose.model('Student', studentSchema);


// // You must export your model through module.exports
// // The collection name should be 'student'
// // module.exports = mongoose.model(Student, studentSchema);
