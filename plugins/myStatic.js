const fs = require('fs-extra')

function deepGetDirectories(distPath) {
  let FileList = []
  return fs.readdirSync(distPath).filter(function (file) {
    const isDir = fs.statSync(distPath + '/' + file).isDirectory()
    if (!isDir) FileList = [...FileList, file]
    return isDir
  }).reduce(function (all, subDir) {
    return [...all, ...fs.readdirSync(distPath + '/' + subDir).map(e => subDir + '/' + e)]
  }, FileList)
}

module.exports = { deepGetDirectories }
