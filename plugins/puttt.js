//scby put

let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let Putbotz = `𝕴𝖓𝖋𝖔𝖗𝖒𝖆𝖙𝖎𝖔𝖓 𝖀𝖕𝖉𝖆𝖙𝖊 𝕺𝖓 15 𝕱𝖊𝖇𝖗𝖚𝖆𝖗𝖞

❗New Fitur
 cek sendiri aja banh soalnya banyak gw tambahin 

© 𝕻𝖚𝖙𝖇𝖔𝖙𝖟

𝖑𝖆𝖘𝖙 𝖀𝖕𝖉𝖆𝖙𝖊 24 𝕱𝖊𝖇𝖗𝖚𝖆𝖗𝖞
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: Putbotz,
        sections:  [{title: "Silahkan di pilih © Putbotz", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Nomor Owner', description: "Owner Putbotz", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['updateee']
handler.command = /^(updateee)$/i
handler.help = ['info']
module.exports = handler
