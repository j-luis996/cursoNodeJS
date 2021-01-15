const store = require('./store');

const addUser = (name) => {
      return new Promise ((resolve, reject) => {
            if (!name){
                  console.error('[userController] Mensaje incompleto');
                  return reject('Los datos son incorrectos');
            }
            const user = {
                  name,
            };
            
            store.addUser(user);
            resolve(user);
      });
      
}

const getUser = (filterUser) => {
      return new Promise((resolve,reject) => {
            resolve(store.getUser(filterUser));
      })
}

module.exports = {
      add: addUser,
      list: getUser,
}