function addMessages(user, message){
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
            console.log(fullMessage);
            resolve(fullMessage);
      });
      
}
module.exports = {
      addMessages,
};