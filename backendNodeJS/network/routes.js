const message = require('../components/messages/network');
const user = require('../components/user/network');

const routes = (server) => {
      server.use('/message', message);
      server.use('/user', user);
      // server.use('/app', express.static('public'));
}

module.exports = routes;