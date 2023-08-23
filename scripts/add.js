const path = require('path')
const glob = require('glob')
const { spawn } = require('child_process')
const fs = require('node:fs/promises')
const chalk = require('chalk')
const Handlebars = require('handlebars')

/**
 * xyz-abc => XyzAbc
 * @param {string} str 
 * @returns string
 */
const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/g, m => m.toUpperCase())

/**
 * XyzAbc => xyz-abc
 * @param {string} str 
 * @returns string
 */
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-{1}/g, '')

function add() {
  const component = process.argv[2]
  const dirName = lowCase(component)
  const componentName = varCase(component)
  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${component}`)])
  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))
  tplFiles.forEach((async filePath => {
    const content = await fs.readFile(filePath, 'utf8')
    const template = Handlebars.compile(content);
    const result = template({ dirName, componentName })

    const newPath = filePath.replace('scripts/template', `src/${dirName}`)
      .replace('component', dirName)
      .replace('Component', componentName)
      .replace('.hbs', '')
    await fs.writeFile(newPath, result)
    console.log(chalk.green(`write ${newPath} success`))
  }))
}
add()