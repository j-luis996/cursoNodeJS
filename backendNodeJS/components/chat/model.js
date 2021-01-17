const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
      users:[
            { 
                  type: Schema.ObjectId, 
                  ref: 'User'
            }
      ] 
});

const model = mongoose.model('chat', mySchema);

module.exports = model;