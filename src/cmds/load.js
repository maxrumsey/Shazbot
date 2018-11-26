const fs = require('fs');
global.commands = {};
try {
  let files = fs.readdirSync('./src/cmds');
  for (var i = 0; i < files.length; i++) {
    if ((files[i] == 'src') || (files[i] == 'load.js')) continue;
    let file = require('./' + files[i]);
    global.commands = { ...global.commands, ...file };
  }
} catch (e) {
  console.log('Error Loading Messages.');
  console.log(e);
}
