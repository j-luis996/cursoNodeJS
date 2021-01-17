const Model = require('./model');

const addChat = (users =>{
      const myChat = new Model(users);
      myChat.save();
});

const getChat = (filterChat) => {
      return new Promise((resolve, reject) => {
            let filter = {};
            if(filterChat !==null){
                  filter = {
                        users: filterChat
                  }
            }
            Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                  if(err){
                        reject(err);
                        return false;
                  }
                  resolve(populated);
            })
      });
}


module.exports = {
      addChat,
      getChat,
}