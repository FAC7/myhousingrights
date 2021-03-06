require('env2')('./config.env')
const port = process.env.PORT || 4000
const Hapi = require('hapi')

// helper methods
const handlePlugins = require('./helpers/server-helpers.js')

// server plugins
const Inert = require('inert')

// server routes
const Images = require('./routes/Images.js')
const ReactUrls = require('./routes/ReactUrls.js')
const Scripts = require('./routes/Scripts.js')
const Api = require('./routes/api/data/index.js')

const Plugins = [ Inert ]
const Routes = [ Images, ReactUrls, Scripts ].concat(Api)

module.exports = (client) => {

  const server = new Hapi.Server()

  server.connection({ port })
  server.register(Plugins, handlePlugins)
  server.route(Routes)

  return server
}
