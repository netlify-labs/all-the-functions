const path = require('path')
const fs = require('fs')
const globby = require('globby')
const cp = require("child_process")

function installDeps(functionDir, cb) {
  cp.exec("npm i", { cwd: functionDir }, cb)
}

(async () => {
  const findJSFiles = ['*/package.json', '!node_modules', '!**/node_modules']
  const directory = path.join(__dirname, '..', 'functions')
	const foldersWithDeps = await globby(findJSFiles, { cwd: directory })

  const folders = foldersWithDeps.map(fnFolder => {
    return fnFolder.substring(0, fnFolder.indexOf("package.json"))
  }).map((folder) => {
    installDeps(path.join(__dirname, '..', 'functions', folder), () => {
      console.log(`${folder} dependencies installed`)
    })
  })

})()
