exports['ping'] = (msg) => {
  msg.reply(`🏓 Pong! I'm alive. 🙌'`);
}
exports['version'] = (msg) => {
  const package = require('../../package.json')
  msg.reply(`The bot version is ${package.version}`)
  console.log(msg)
}
exports['info'] = (msg) => {
  const package = require('../../package.json')
  msg.reply(`The bot's name is ${package.name}.`)
  msg.reply(`The bot version is ${package.version}.`)
  msg.reply(`The bot's author is ${package.author}.`)
  msg.reply(`The version of HangupsJS used is ${package.dependencies['@maxrumsey/hangupsjs']}.`)
  msg.reply(`The bot uses the ${package.license} license.`)
  msg.reply(`The version of Node running is ${process.version}.`)
}
exports['help'] = (msg) => {
  const cmds = Object.keys(global.commands)
  const prefix = require('../../config.json').prefix
  msg.reply('Commands: ')
  for (var i = 0; i < cmds.length; i++) {
    msg.reply(prefix + cmds[i]);
  }
}
