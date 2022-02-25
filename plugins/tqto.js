let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
• Allah swt
• My ortu
• Nurutomo
• Putbotz
• Zeks
• Penyedia Layanan API
• Orang-orang yang Berdonasi
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*✧──────────···──────────✧*\n                   Putbotz Ganteng`, 'status@broadcast')
}
handler.help = ['tqto']
handler.tags = ['owner']
handler.command = /^(tqto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler