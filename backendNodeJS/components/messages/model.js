const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
      user: {
            type: schema.ObjectId,
            ref: 'User',
      },
      message: {
            type: String,
            require: true,
      },
      date: Date,
});

const model = mongoose.model('mensajes', mySchema);

module.exports = model;