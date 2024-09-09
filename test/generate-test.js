const { globSync } = require('glob')
const { camelCase } = require('lodash')
const { pathExistsSync, ensureFileSync, writeFile, readFileSync } = require('fs-extra')
const path = require('path');

const templateStr = readFileSync(path.join(__dirname, './template.txt'), 'utf-8');

// console.log('path', path);

const jsfiles = globSync('./main/**/*.ts', { ignore: ['node_modules/**', '**/*/index.ts'] })

const content = (funName, filePath) => {
  return templateStr
  .replaceAll('${funName}', funName)
  .replaceAll('${filePath}', filePath)
};

const files = {};
jsfiles.forEach((file) => {
  const name = file.replace('main\\', '').replace('main/', '').replace('.ts', '');
  files[camelCase(name)] = file
})
Object.keys(files).forEach(name => {
  const filePath = path.join(__dirname, '../', files[name].replace('main', 'test/__tests__/'));
  if (pathExistsSync(filePath)) {
    return;
  }
  const importFilePath = path.join('../', files[name]).replace('.ts', '');
  ensureFileSync(filePath);
  writeFile(filePath, content(name, importFilePath), 'utf-8')
})
