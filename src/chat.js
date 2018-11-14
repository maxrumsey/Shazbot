exports.prehandle = (msg, modu) => {
  if (!check(msg)) return;
  let msgObj = construct(msg, { prefix: modu.config.prefix, client: modu.client });
  if (msgObj.content.split('')[0] != msgObj.prefix) return;
  return msgObj;
}
exports.handle = (msgObj, client) => {
  try {
    const command = getCommand(msgObj.content)
    if (!command || (command == '')) return;
    if (!global.commands[command]) return;
    global.commands[command](msgObj, client)
  } catch (e) {
    console.log('Error Handling Message');
    console.log(e);
  }
}
function check(evt) {
  if (global.shutdown == true) {
    if (evt.chat_message.message_content.segment[0].text != require('../config.json').prefix + 'owner:unmute') return;
  }
  if (!evt) return;
  if (!evt.chat_message.message_content) return;
  if (!evt.chat_message.message_content.segment) return;
  if (!evt.chat_message.message_content.segment[0]) return;
  if (!evt.chat_message.message_content.segment[0].text) return;
  if (!evt.chat_message.message_content.segment[0].type) return;
  if (evt.chat_message.message_content.segment[0].type != 'TEXT') return;
  if (evt.sender_id.chat_id == evt.self_event_state.user_id.chat_id) return;
  return true;
}
function construct(msg, extras) {
  return msgObj = new Message(msg, extras);
}
class Message {
  constructor(msg, {prefix, client}) {
    this.content = msg.chat_message.message_content.segment[0].text || '';
    this.channel = msg.conversation_id.id || '';
    this.author = msg.sender_id.chat_id || '';
    this.clientID = msg.self_event_state.user_id.chat_id || '';
    this.raw = msg;
    this.prefix = prefix;
  }
  reply(content) {
    client.sendchatmessage(this.channel, [[0, content]]);
  }
}
function getCommand(content) {
  let first = msgObj.content.split(' ')[0].split('');
  first.shift();
  let command = first.join('');
  return command;
}
