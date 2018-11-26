if (!process.env.TOKEN) {
  let result = require('dotenv').config();
  if (result.error) throw result.error;
}
if (process.env.RTOKEN) {
  global.rtoken = process.env.RTOKEN;
}
const Hangups = require('@maxrumsey/hangupsjs-tokencopy');
const client = global.client = new Hangups();
const modu = {
  chat: require('./src/chat.js'),
  config: require('./config.json'),
  client: client,
};
require('./src/cmds/load.js');
//client.loglevel('debug');

const credsfunc = async function() {
  return {
    auth: async function() {
      return process.env.TOKEN;
    }
  };
};
client.on('chat_message', msg => {
  console.log(msg);
  var msgObj;
  try {
    msgObj = modu.chat.prehandle(msg, modu);
  } catch (e) {
    console.log('Error Prehandling Command');
    console.log(e);
  }
  if (!msgObj) return;
  modu.chat.handle(msgObj, client);
});

client.connect(credsfunc).then(() => {
  console.log('Client logged in.');
  client.setpresence(true, '👋');
  if (modu.config.home) {
    setInterval(() => {
      client.setfocus(modu.config.home, Hangups.FocusStatus.FOCUSED, 20);
    }, 19000);
  }
}).catch(function(e) {
  console.log(e);
});
