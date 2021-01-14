const dbname = process.env.DBNAME;
const contrasena = process.env.PASSWORD;

const db = require('mongoose');
const Model = require('./model');

// const uri = "mongodb://db_user_cursoNodeJS:"+contrasena+"@cluster0-shard-00-00.0pgxi.mongodb.net:27017,cluster0-shard-00-01.0pgxi.mongodb.net:27017,cluster0-shard-00-02.0pgxi.mongodb.net:27017/"+dbname+"?ssl=true&replicaSet=atlas-9pdija-shard-0&authSource=admin&retryWrites=true&w=majority";

const uri2 = "mongodb+srv://db_user_cursoNodeJS:"+contrasena+"@cluster0.0pgxi.mongodb.net/"+dbname+"?retryWrites=true&w=majority";

db.Promise = global.Promise;
db.connect(uri2,{
      useNewUrlParser:true,
      useUnifiedTopology: true
})
      .then(() => console.log('[Date Base Connect] DB conectada con éxito'))
      .catch(err => console.error('[db]', err));

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