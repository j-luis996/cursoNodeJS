const store = require('./store');

const addMessages = (user, message) => {
      return new Promise ((resolve, reject) => {
            if (!user || !message){
                  console.error('[messageController] Mensaje incompleto');
                  return reject('Los datos son incorrectos');
            }
            const fullMessage = {
                  user: user,
                  message: message,
                  date: new Date(),
            };
            
            store.addMessage(fullMessage);
            resolve(fullMessage);
      });
      
}

const getMessage = (filterUser) => {
      return new Promise((resolve,reject) => {
            resolve(store.getMessage(filterUser));
      })
}

const updateMessage = (id, message) =>{
      return new Promise(async (resolve, reject)=>{
            if(!id || !message){
                  reject('Invalid data');
                  return false;
            }
            const result = await store.updateText(id,message);
            resolve(result);
      });
}
module.exports = {
      add: addMessages,
      list: getMessage,
      update: updateMessage,
};