const store = require('./store');

const addMessages = (chat,user, message) => {
      return new Promise ((resolve, reject) => {
            if (!chat || !user || !message){
                  console.error('[messageController] Mensaje incompleto');
                  return reject('Los datos son incorrectos');
            }
            const fullMessage = {
                  chat: chat,
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
                  reject('[messageController] Invalid data');
                  return false;
            }
            await store.updateText(id,message)
                  .then(resultado =>{
                        if(resultado){
                              resolve(resultado);
                        }else{
                              reject('[messageController] No se encontro el dato para actualizar');
                        }
                  });
            
      });
}

const deleteMessage = (id) => {
      return new Promise(async (resolve,reject) => {
            if(!id){
                  reject('ID invalido');
            }
            await store.removeMessage(id)
                  .then((resultado) => {
                        if(resultado){
                              resolve();
                        }else{
                              reject('[Controller] El dato no existe en Store');
                        }
                  })
                  .catch(err => reject(err));
      });
}

module.exports = {
      add: addMessages,
      list: getMessage,
      update: updateMessage,
      delete: deleteMessage,
};