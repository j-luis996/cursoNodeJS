const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
      user: String,
      message: {
            type: String,
            require: true,
      },
      date: Date,
});

const model = mongoose.model('mensajes', mySchema);

module.exports = model;