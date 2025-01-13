/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

const {
  Function,
  isPrivate,
  getUrl,
  fromBuffer,
  Imgur,
  getBuffer,
  getJson,
  Fancy,
  AddMp3Meta,
  createMap,
  formatBytes,
  parseJid,
  isUrl,
  parsedJid,
  pinterest,
  wallpaper,
  wikimedia,
  quotesAnime,
  aiovideodl,
  umma,
  ringtone,
  styletext,
  FileSize,
  h2k,
  textpro,
  
  ytIdRegex,
  yta,
  ytv,
  runtime,
  clockString,
  sleep,
  jsonformat,
  Serialize,
  processTime,
  command,
} = require("../lib/");
const util = require("util");
const { yt } = require("../lib/scrappers/ytdl");
const config = require("../config");


command({pattern:'eval', on: "text", fromMe: true, desc: 'Runs a server code'}, async (message, match, m, client) => {
  if (match.startsWith(">")) {
    try {
      const code = `(async () => { ${match.replace(">", "")} })()`;
      let evaled = await eval(code);
      if (typeof evaled !== "string") evaled = util.inspect(evaled);
      await message.reply(evaled);
    } catch (err) {
      await message.reply(util.format(err));
    }
  }
});
