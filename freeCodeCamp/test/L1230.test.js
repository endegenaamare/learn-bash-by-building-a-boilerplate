const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand;
  before(async () => {
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(lastCommand[0] === 'mv' && lastCommand[1] === 'icons' && lastCommand[2] === 'client/assets' && cwd === '/home/strove/project/website');
  });
});
