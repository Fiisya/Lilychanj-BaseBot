module.exports = {
type: 'random',
command: ['ppcp'],
operate: async (context) => {
const { Risa, m, text, q, prefix, command } = context;

const fetch = require('node-fetch')

m.reply("Wait..")
try {
let ppcp = await(await fetch('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/ppcouple.json')).json()
let get = ppcp[Math.floor(Math.random() * ppcp.length)]

await Risa.sendMessage(m.chat, { image: { url: get.male }, caption: 'Done male' }, { quoted: m })

await Risa.sendMessage(m.chat, { image: { url: get.male }, caption: 'Done Female' }, { quoted: m })

} catch (err) {
m.reply('maaf kak error')
}
}
}
