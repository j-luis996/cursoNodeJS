const Model = require('./model');

const addMessage = (message) => {
      const myMessage = new Model(message);
      myMessage.save();
}

const getMessage = async  (filterUser) => {
      let filter = {};
      if(filterUser !==null){
            filter = {user: filterUser}
      }
      const message = await Model.find(filter);
      return message;
}

const updateText = async (id, message) => {
      // const foundMessage = await Model.findOne({
      //       _id: id
      // });
      const siExiste = await ifExist(id);
      if(!siExiste){
            return siExiste;
      }
      const foundMessage = await Model.findById(id)
      foundMessage.message = message;
      const newMessage = await foundMessage.save();
      return newMessage;
}

const removeMessage = async (id) => {
      const siExiste = await ifExist(id);
      if(!siExiste){
            return siExiste;
      }
      return await Model.deleteOne({
            _id: id
      });
} 

const ifExist = async (id) => {
      return await Model.exists({
            _id: id
      });
}

module.exports = {
      addMessage,
      getMessage,
      updateText,
      removeMessage,
}