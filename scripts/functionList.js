const path = require('path')
const fs = require('fs')
const globby = require('globby');

(async () => {
  const findJSFiles = ['**.js', '**/*.js', '!node_modules', '!**/node_modules']
  const directory = path.join(__dirname, '..', 'functions')
	const funcs = await globby(findJSFiles, { cwd: directory })

  const data = funcs
    .filter(fn => {
      const name = path.basename(fn, '.js')
      return name !== 'index' && name.match(/^\d/)
    })
    .map((fn) => {
      const name = path.basename(fn, '.js')
      console.log('name', name)
      return name
    })
    .sort(sortAlphaNumeric)
    console.log('data', data)
    fs.writeFileSync(path.join(__dirname, '..', 'src/data.json'), JSON.stringify(data, null, 2))
})()


const regex = /^(\d*)([a-z]*)/
/* sort 1a, 1b, 1c, 2a, 2b ... */
function sortAlphaNumeric(A, B) {
  const a = A.match(regex)
  const b = B.match(regex)
  const anum = parseInt(a[1], 10)
  const bnum = parseInt(b[1], 10)
  if (anum === bnum) {
    return a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0
  }
  return anum - bnum
}
