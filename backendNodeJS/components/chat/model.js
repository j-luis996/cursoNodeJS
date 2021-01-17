const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
      users:[
            { 
                  type: schema.ObjectId, 
                  ref: 'User'
            }
      ] 
});

const model = mongoose.model('chat', mySchema);

module.exports = model;