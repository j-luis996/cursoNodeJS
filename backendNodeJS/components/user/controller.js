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
module.exports = {
      add: addUser,
}