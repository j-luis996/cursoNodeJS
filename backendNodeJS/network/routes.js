const message = require('../components/messages/network');

const routes = (server) => {
      server.use('/message', message);
      // server.use('/app', express.static('public'));
}

module.exports = routes;