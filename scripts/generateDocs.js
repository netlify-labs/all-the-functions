/* script for generating docs example table */
const fs = require('fs')
const path = require('path')
const url = require('url')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    /* In README.md the below comment block adds the list to the readme
    <!-- AUTO-GENERATED-CONTENT:START (EXAMPLES_TABLE)-->
      community examples list will be generated here
    <!-- AUTO-GENERATED-CONTENT:END -->
     */
    FUNCTIONS_LIST() {
      const exampleFile = path.join(__dirname, '..', 'src/data.json')
      const examples = JSON.parse(fs.readFileSync(exampleFile, 'utf8'))

      // Make table header
      let md = '| Functions |\n'
      md += '|:-------|\n'
      // Sort alphabetically
      examples.forEach((name) => { // eslint-disable-line
        // add table rows
        const url = `https://github.com/netlify-labs/all-the-functions/tree/master/functions/${name}`
        md += `| **[${name}](${url})** |\n`
      })
      return md.replace(/^\s+|\s+$/g, '')
    },
  },
}


const markdownPath = path.join(__dirname, '..', 'README.md')

// run md-magic
markdownMagic(markdownPath, config, () => {
  console.log('Docs updated!')
})

// util functions
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

function formatPluginName(string) {
  return toTitleCase(string.replace(/-/g, ' '))
}

function username(repo) {
  if (!repo) {
    return null
  }

  const o = url.parse(repo)
  var urlPath = o.path

  if (urlPath.length && urlPath.charAt(0) === '/') {
    urlPath = urlPath.slice(1)
  }

  urlPath = urlPath.split('/')[0]
  return urlPath
}
