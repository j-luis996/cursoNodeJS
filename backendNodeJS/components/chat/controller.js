const store = require('./store');

const addChat = (users) => {
            if (!users || !Array.isArray(users)){
                  console.error('[userController] Mensaje incompleto');
                  return Promise.reject('Invalid user list');
            }
            const chat = {
                  users: users,
            };
            
            return store.addChat(chat);
}

const getchat = (UserId) => {
      // return new Promise((resolve,reject) => {
            return store.getChat(UserId);
      
}

module.exports = {
      add: addChat,
      list: getchat,
}