const list = [];  

const addMessage = (message) => {
      list.push(message);
}

const getMessage = () => {
      return list;
}

module.exports = {
      addMessage,
      getMessage,
      //get
      //update
      //delete
}