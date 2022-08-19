const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')
const config = getDefaultConfig(__dirname)

const extraNodeModules = {
  Domain: path.resolve(__dirname + '/../Domain')
}

config.watchFolders = [path.resolve(__dirname + '/../Domain')]

config.resolver.extraNodeModules = new Proxy(extraNodeModules, {
  get: (target, name) =>
    //redirects dependencies referenced from common/ to local node_modules
    name in target
      ? target[name]
      : path.join(process.cwd(), `node_modules/${name}`)
})

module.exports = config