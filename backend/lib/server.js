require('env2')('./config.env')
const fs = require('fs')
const port = process.env.PORT || 4000
const Hapi = require('hapi')

// helper methods
const handlePlugins = require('./helpers/server-helpers.js')

// server plugins
const Inert = require('inert')

const tls = {
  key: fs.readFileSync(`${__dirname}/../../key.pem`),
  cert: fs.readFileSync(`${__dirname}/../../cert.pem`)
}

const ConnectionSettings = {port, routes: {cors: true}, tls}


// server routes
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')

const Plugins = [ Inert ]
const Routes = [ Images, ReactUrls, Scripts ]

module.exports = (client) => {

  const server = new Hapi.Server()

  server.connection(ConnectionSettings)
  server.register(Plugins, handlePlugins)
  server.route(Routes)

  return server
}
