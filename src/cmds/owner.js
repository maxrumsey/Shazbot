const config = require('../../config.json');
exports['owner:quiet'] = msg => {
  if (config.owner == msg.author) {
    global.shutdown = true;
    msg.reply('Bot has been muted');
  } else {
    msg.reply('No permission to issue this command.');
  }
};
exports['owner:unmute'] = msg => {
  if (config.owner == msg.author) {
    global.shutdown = false;
    msg.reply('Bot has been unmuted');
  } else {
    msg.reply('No permission to issue this command.');
  }
};
exports['owner:shutdown'] = msg => {
  if (config.owner == msg.author) {
    msg.reply('Shutting down. Night Night.');
    process.exit(0);
    global.shutdown = false;
  } else {
    msg.reply('No permission to issue this command.');
  }
};
exports['owner:cmdban'] = msg => {
  if (config.owner == msg.author) {
    let name = msg.content.split(' ')[1];
    global.commands[name] = undefined;
    msg.reply(`The ${name} command has been removed.`);
  } else {
    msg.reply('No permission to issue this command.');
  }
};
exports['owner:eval'] = msg => {
  if (config.owner == msg.author) {
    let cmd = msg.content.split(' ');
    cmd.shift();
    cmd = cmd.join(' ');
    console.log(cmd);
    try {
      var res = eval(''+cmd);
      msg.reply(res);
    } catch (e) {
      msg.reply(e.message);
    }
  } else {
    msg.reply('No permission to issue this command.');
    msg.reply('Further attempts to bypass and access this command will result in disciplinary action.');
  }
};
exports['owner:rename'] = (msg, client) => {
  if (config.owner == msg.author) {
    let name = msg.content.split(' ');
    name.shift();
    name = name.join(' ');


    client.renameconversation(msg.channel, name);
  } else {
    msg.reply('No permission to issue this command.');
  }
};
exports['owner:spam'] = (msg) => {
  if (config.owner == msg.author) {
    let name = msg.content.split(' ');
    name.shift();
    name = name.join(' ');

    let i = 0;
    let beanus = setInterval(function() {
      if (i < 20) {
        msg.reply(name);
      } else {
        clearInterval(beanus);
      }
    }, 500);
  } else {
    msg.reply('No permission to issue this command.');
  }
};
