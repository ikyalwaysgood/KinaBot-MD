// Terima Kasih Telah Menggunakan Script Victoria
// Tolong jangan di hapus creditnya silakan saja isi nama kalian
import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `
Thanks Too :
> Nurutomo
> BochilGaming
> ImYanXiao
> ShirokamiRyzn
> Xyroinee
> Amelia Aubert (Story)
> Clara Aubert (Support)
> Iky Official (Recode)
> Clayza Aubert (Recode)
`;

conn.sendMessage(m.chat, {
	text: tqto,
	contextInfo: {
	externalAdReply: {
	title: 'Credit Bot Whatsapp',
	body: 'Jangan Di Hapus Atau ERROR',
	thumbnailUrl: global.thumb,
	sourceUrl: 'https://whatsapp.com/channel/0029VaACVbGDuMRk7zy6vI3a',
	mediaType: 1,
	renderLargerThumbnail: true
	}}})
  
}
handler.help = ['tqto']
handler.tags = ['main']
handler.command = /^(tqto)$/i;

export default handler;
