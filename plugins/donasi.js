let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Topap • Maxis* 」
├ 60147366955
└────
`.trim(), '© Putbotz', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
