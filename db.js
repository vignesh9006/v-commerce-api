const mongoose = require ('mongoose');

const  dbConnection = async() => {
    mongoose.connect("mongodb://127.0.0.1:27017/v_commerceDB")
    .then(() => console.log('v_commerceDB connected successfully'))
      .catch((err) => console.log('v_commerceDB connection error:', err));

}

module. exports = dbConnection;