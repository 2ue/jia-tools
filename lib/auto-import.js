
const { globSync } = require('glob')
const path = require('path')
const { ensureFileSync, writeFileSync } = require('fs-extra')

const funcFiles = globSync(path.join(__dirname, '../main/**/*.ts'), { ignore: ['node_modules/**', '**/*/index.ts'] })
const rootDir = path.join(__dirname, '../');
const importFileList = [];
const inputs = {
  index: path.join(__dirname, '../main/index.ts')
}

funcFiles.forEach((file) => {
  const name = file
  .replace(rootDir, '')
  .replace('main/', '')
  .replace('.ts', '');
  inputs[name] = file;
  importFileList.push(`export * from './${name}'`);
})

const autoImportFilePath = path.join(__dirname, '../main/index.ts')

ensureFileSync(autoImportFilePath)
writeFileSync(autoImportFilePath, importFileList.join('\n'), 'utf-8')

module.exports = inputs;