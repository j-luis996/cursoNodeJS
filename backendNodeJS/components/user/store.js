const Model = require('./model');

const addUser = (user) => {
      const myUser = new Model(user);
      myUser.save();
}



module.exports = {
      addUser,
}