const { findPath } = require('../dist/cjs/find-path');

const tree = [
    { value: '1', children: [
        { value: '1-1', children: [
            { value: '1-1-1', children: []}
        ] },
        { value: '1-2', children: [] },
    ] },
    { value: '2', }
]

const a = findPath(tree,'1-2');

console.log(a);