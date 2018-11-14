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
  msg.reply(`Number 15: Burger king foot lettuce. The last thing you'd want in your Burger King burger is someone's foot fungus. But as it turns out, that might be what you get. A 4channer uploaded a photo anonymously to the site showcasing his feet in a plastic bin of lettuce. With the statement: "This is the lettuce you eat at Burger King." Admittedly, he had shoes on.
  But that's even worse.
  The post went live at 11:38 PM on July 16, and a mere 20 minutes later, the Burger King in question was alerted to the rogue employee. At least, I hope he's rogue. How did it happen? Well, the BK employee hadn't removed the Exif data from the uploaded photo, which suggested the culprit was somewhere in Mayfield Heights, Ohio. This was at 11:47. Three minutes later at 11:50, the Burger King branch address was posted with wishes of happy unemployment. 5 minutes later, the news station was contacted by another 4channer. And three minutes later, at 11:58, a link was posted: BK's "Tell us about us" online forum. The foot photo, otherwise known as exhibit A, was attached. Cleveland Scene Magazine contacted the BK in question the next day. When questioned, the breakfast shift manager said "Oh, I know who that is. He's getting fired." Mystery solved, by 4chan. Now we can all go back to eating our fast food in peace.`)
}
