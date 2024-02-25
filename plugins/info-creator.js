import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ`, `hmm.. apapun itu yasudahlah..`, `Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ`, `Indonesia`, `!`, `🗿`]
  ], m)
  } 

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler