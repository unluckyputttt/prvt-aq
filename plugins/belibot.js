let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _Rn5/grup (1 minggu)_
║┊ ⌲ Sewa = _Rm15/grup (1 bulan)_
║┊ ⌲ Sewa = _Rm20/grup (2 bulan)_
║┊ ⌲ Sewa = _Rn30/grup (8 bulan)_                                                                      ║┊ ⌲ Sewa = _Rm50/grup (12 bulan)_
╰═ ┅ ═══════
╭═══ *〘 PAKET HEMAT 〙*
║ ┅ ๑————————————๑
║┊ ⌲ _Rm20 (Sewa 1 bulan, premium 1 Bulan)_
║┊ ⌲ _Rm30 (Sewa 2 bulan, premium 1.5 bulan)_
║┊ ⌲  _Rm45 (8 Bulan sewa, 5 Bulan premium)_
║┊ ⌲  _Rm50 (all permanent)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/EGwXft3tf1z3VhKfx0W379_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `Putbotz`, 'Payment', '#payment', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm