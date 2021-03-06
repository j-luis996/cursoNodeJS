const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
      chat:{
            type: schema.ObjectId,
            ref: 'chat',
      },
      user: {
            type: schema.ObjectId,
            ref: 'User',
      },
      message: {
            type: String,
            require: true,
      },
      date: Date,
      file: String,
});

const model = mongoose.model('mensajes', mySchema);

module.exports = model;