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

const getMessage = () => {
      return new Promise((resolve,reject) => {
            resolve(store.getMessage());
      })
}

module.exports = {
      add: addMessages,
      list: getMessage,
};