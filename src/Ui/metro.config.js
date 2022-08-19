const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')
const config = getDefaultConfig(__dirname)

const domainPath = __dirname + '/../Domain'
const infraPath = __dirname + '/../Infrastructure'

const extraNodeModules = {
  Domain: path.resolve(domainPath), 
  Infrastructure: path.resolve(infraPath), 
}

config.watchFolders = [
    path.resolve(domainPath), 
    path.resolve(infraPath)
]

config.resolver.extraNodeModules = new Proxy(extraNodeModules, {
  get: (target, name) =>
    name in target
      ? target[name]
      : path.join(process.cwd(), `node_modules/${name}`)
})

module.exports = config