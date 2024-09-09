const { select, Separator } = require('@inquirer/prompts');
const { globSync } = require('glob')
const { $ } = require('zx');
const { sortBy } = require('lodash');

const testCaseFiles = globSync('./test/__tests__/**/*.ts', { ignore: ['node_modules/**', '**/*/index.ts'] })

const filesChoicesList = [];
testCaseFiles.forEach((file) => {
  const name = file.replace('test\\__tests__\\', '').replace('test/__tests__/', '').replace('.ts', '');
  filesChoicesList.push({ name, value: file });
})


async function testCase() {
  const testFileName = await select({
    message: 'Select a file to test',
    choices: [
      ...sortBy(filesChoicesList, ['name']),
      new Separator('------END------')
    ],
  });

  await $`pnpm run test ./${testFileName}`
}

testCase();
