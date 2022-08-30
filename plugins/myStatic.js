const fs = require('fs-extra')

function deepGetDirectories(distPath) {
  let FileList = []
  return fs.readdirSync(distPath).filter(file => {
    const isDir = fs.statSync(distPath + '/' + file).isDirectory()
    if (!isDir) FileList = [...FileList, file]
    return isDir
  }).reduce(function (all, subDir) {
    let subFileList = []
    const c = fs.readdirSync(distPath + '/' + subDir).map(e => subDir + '/' + e).filter(file => {
      const isDir = fs.statSync(distPath + '/' + file).isDirectory()
      if (isDir) {
        subFileList = [...subFileList, ...deepGetDirectories(distPath + '/' + file).map(e => file + '/' + e)]
      }
      return !isDir
    })
    return [...all, ...c, ...subFileList]
  }, FileList)
}

module.exports = { deepGetDirectories }
