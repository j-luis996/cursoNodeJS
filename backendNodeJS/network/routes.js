const express = require('express');
const message = require('../components/messages/network');

const routes = function (server){
      server.use('/message',message);
      server.use('/app', express.static('public'));
}

module.exports = routes;