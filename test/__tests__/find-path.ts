// import { get } from 'lodash-es';
import { findPath, FindPathFieldKeys, FindPathItem } from "../../main/find-path";

const tree1 = [
  {
    value: "1",
    children: [
      { value: "1-1", children: [{ value: "1-1-1", children: [] }] },
      { value: "1-2", children: [] },
    ],
  },
  { value: "2" },
];
// test1
test("findPath", () => {
  expect(findPath(tree1, "1")).toEqual([0]);
  expect(findPath(tree1, "1-1")).toEqual([0, 'children', 0]);
  expect(findPath(tree1, "1-2")).toEqual([0, 'children', 1]);
  expect(findPath(tree1, "1-3")).toEqual([]);
  expect(findPath(tree1, "1-1-1")).toEqual([0, 'children', 0, 'children', 0]);
  expect(findPath(tree1, "1-1-2")).toEqual([]);
  expect(findPath(tree1, "2")).toEqual([1]);
});


const tree2 = [
  {
    key: "1",
    body: [
      { key: "1-1", body: [{ key: "1-1-1", body: [] }] },
      { key: "1-2", body: [] },
    ],
  },
  { key: "2" },
];

// // test2
test("findPath custome defined fieldKeys", () => {
  expect(findPath(tree2, "1")).toEqual([]);
  expect(findPath(tree2, "1-1")).toEqual([]);
  expect(findPath(tree2, "1-2")).toEqual([]);
  expect(findPath(tree2, "1-3")).toEqual([]);
  expect(findPath(tree2, "1-1-1")).toEqual([]);
  expect(findPath(tree2, "1-1-2")).toEqual([]);
  expect(findPath(tree2, "2")).toEqual([]);
  expect(findPath(tree2, "1", { value: 'key', children: 'body' })).toEqual([0]);
  expect(findPath(tree2, "1-1", { value: 'key', children: 'body' })).toEqual([0, 'body', 0]);
  expect(findPath(tree2, "1-2", { value: 'key', children: 'body' })).toEqual([0, 'body', 1]);
  expect(findPath(tree2, "1-3", { value: 'key', children: 'body' })).toEqual([]);
  expect(findPath(tree2, "1-1-1", { value: 'key', children: 'body' })).toEqual([0, 'body', 0, 'body', 0]);
  expect(findPath(tree2, "1-1-2", { value: 'key', children: 'body' })).toEqual([]);
  expect(findPath(tree2, "2", { value: 'key', children: 'body' })).toEqual([1]);
});


// const values = ['1', '1-1', '1-2', '1-1-1', '2'];
// const notExitValue = ['3', '1-3', '1-1-2', '1-3-1', '3-1', '2-1']

// function testCase(data: FindPathItem[], fieldKeys?: FindPathFieldKeys) {
//   values.forEach((v) => {
//     expect(get(data, findPath(data, v, fieldKeys))).toEqual(v);
//   });
//   notExitValue.forEach((v) => {
//     expect(findPath(data, v, fieldKeys)).toEqual([]);
//   });
// }

// test("findPath custome defined fieldKeys", () => {
//   testCase(tree1);
//   testCase(tree2, { value: 'key', children: 'body' });
// });