const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/f8_education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('connect successfully')
  } catch (err) {
    console.log('error message: ' + err)
  }
}

module.exports = {
  connect
}