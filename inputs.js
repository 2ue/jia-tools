const { globSync } =require('glob')
const jsfiles = globSync('./main/**/*.ts', { ignore: 'node_modules/**' })
console.log('jsfiles', jsfiles);

const res = {};
jsfiles.forEach(file => {
    const arr = file.split('\\');
    res[file.replace('main\\', '').replace('.ts', '')] = file
})

module.exports = res;