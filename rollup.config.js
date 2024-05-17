const defineConfig = require('rollup').defineConfig;
const babel = require('rollup-plugin-babel');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
// 多入口，模块化输出
const inputs = require('./inputs');

module.exports = defineConfig({
    input: inputs,
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            entryFileNames: 'cjs/[name].js',
            sourcemap: true,
        },
        {
            dir: 'dist',
            format: 'es',
            sourcemap: true,
            entryFileNames: 'es/[name].js'
        },
    ],
    plugins: [
        babel(),
        typescript(),
        resolve(),
        commonjs(),
        terser()
    ],
});