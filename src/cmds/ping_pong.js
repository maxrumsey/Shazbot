const builder = require('@maxrumsey/hangupsjs').MessageBuilder;


exports['loss'] = (msg) => {
  msg.reply(`| || || |_`);
}
exports['declarationindependence'] = (msg) => {
  msg.reply(`https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence`);
}
exports['pizzatime'] = (msg) => {
  msg.reply(require('./src/pizzatime.json').msg);
}
exports['oof'] = (msg) => {
  msg.reply(`Big Oof!`);
}
exports['defaultdance'] = (msg) => {
  msg.reply("https://www.youtube.com/watch?v=8pU7d_XzQa4")
}
exports['number15'] = (msg) => {
  msg.reply(`Removed so people stop having a whinge about Shazbot.`)
}
