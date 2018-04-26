module.exports = api => {
  api.registerCommand('ui', args => {
    api.setMode('production')

    let server = require('vue-cli-plugin-apollo/graphql-server')
    server = server.default || server

    const opts = {
      mock: false,
      apolloEngine: false,
      timeout: 999999999,
      paths: {
        typeDefs: require.resolve('@vue/cli-ui/src/graphql-api/type-defs.js'),
        resolvers: require.resolve('@vue/cli-ui/src/graphql-api/resolvers.js'),
        context: require.resolve('@vue/cli-ui/src/graphql-api/context.js'),
        pubsub: require.resolve('@vue/cli-ui/src/graphql-api/pubsub.js'),
        server: require.resolve('@vue/cli-ui/src/graphql-api/server.js')
      }
    }

    server(opts)
  })
}
