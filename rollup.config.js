const defineConfig = require('rollup').defineConfig;
const babel = require('rollup-plugin-babel');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const pkg = require('./package.json');
const inputs = require('./inputs');
console.log('inputs', inputs);
// 动态设置打包名称
const libName = pkg.name;
const banner = `/*!
 * ${libName}
 * ${pkg.description}
 * Author: ${pkg.author.name}
 * Email: ${pkg.author.email}
 * Repository: ${pkg.homepage}
 * Version: ${pkg.version}
 * License: ${pkg.license}
 */`;

module.exports = defineConfig({
    input: inputs,
    output: [
        {
            dir: `dist`,
            format: 'cjs',
            banner,
            entryFileNames: 'cjs/[name].js'
            // sourcemap: true,
        },
        {
            dir: `dist`,
            format: 'es',
            banner,
            // sourcemap: true,
            entryFileNames: 'es/[name].js'
        },
        // {
        //     dir: `dist`,
        //     // UMD 格式，可以用于 Node 和浏览器等多个场景
        //     format: 'umd',
        //     name: libName,
        //     exports: 'named',
        //     banner,
        //     // sourcemap: true,
        //     entryFileNames: 'umd/[name].js'
        // },
    ],
    plugins: [
        babel(),
        typescript({
            sourceMap: true,
            tsconfig: "./tsconfig.json", // 指定 tsconfig.json 文件的位置
            // declarationDir: "./dist/types", // 声明文件将输出到这个目录，与 declarationDir
        }),
        resolve(),
        commonjs(),
        terser()
    ],
});