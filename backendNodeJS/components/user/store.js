const Model = require('./model');

const addUser = (user) => {
      const myUser = new Model(user);
      myUser.save();
}

const getUser = async  (filterUser) => {
      let filter = {};
      if(filterUser !==null){
            filter = {name: filterUser}
      }
      const user = await Model.find(filter);
      return user;
}

module.exports = {
      addUser,
      getUser,
}