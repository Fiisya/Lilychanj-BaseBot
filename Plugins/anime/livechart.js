module.exports = {
 type: 'anime',
 command: ['livechart'],
 operate: async (context) => {
const { Risa, m, text, q, prefix, command } = context;

const cheerio = require('cheerio');
const axios = require('axios');

const livechart = {
 search: async (query) => {
 try {
 const response = await axios.get(`https://www.livechart.me/search?q=${query}`, {
 headers: {
 "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
 "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
 "Referer": "https://www.livechart.me/search",
 }
 });

 const html = await response.data;
 const $ = cheerio.load(html);
 const animeList = [];
 $('.callout.grouped-list.anime-list li.grouped-list-item.anime-item').each((index, element) => {
 const title = $(element).find('.anime-item__body__title a').text().trim();
 const release = $(element).find('.info span[data-action="click->anime-item#showPremiereDateTime"]').text().trim();
 const rating = $(element).find('.info .fake-link').text().trim();
 const url = $(element).find('.anime-item__body__title a').attr('href');
 const type = $(element).find('.anime-item__body__title span.title-extra').text().trim();
 const imageUrl = $(element).find('.anime-item__poster-wrap img').attr('src');

 animeList.push({
 title,
 release,
 rating,
 url: `https://www.livechart.me${url}`,
 type,
 imageUrl
 });
 });

 return animeList;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message);
 }
 },
 detail: async (url) => {
 try {
 const urlParts = url.split('/');
 const animeId = urlParts[urlParts.length - 1];
 const response = await axios.get(url, {
 headers: {
 "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
 "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
 "Referer": url,
 }
 });

 const html = await response.data;
 const $ = cheerio.load(html);
 const animeDetails = {
 title: $(`div[data-anime-details-id="${animeId}"] .text-xl`).first().text().trim(),
 premiereDate: $(`div[data-anime-details-id="${animeId}"] .font-medium:contains("Premiere")`).next().text().trim(),
 rating: $(`div[data-anime-details-id="${animeId}"] .text-lg.font-medium`).first().text().trim(),
 imageUrl: $(`div[data-anime-details-id="${animeId}"] img`).attr('src'),
 synopsis: $(`div[data-anime-details-id="${animeId}"] .lc-expander-content`).text().trim(),
 source: $(`div[data-anime-details-id="${animeId}"] .text-xs:contains("Source")`).next().find('a').text().trim(),
 tags: [],
 studios: []
 };
 $(`div[data-anime-details-id="${animeId}"] .flex.flex-wrap.gap-2 a.lc-chip-button`).each((index, element) => {
 animeDetails.tags.push($(element).text().trim());
 });
 $(`div[data-anime-details-id="${animeId}"] .flex.flex-wrap.gap-2 a.lc-chip-button[href^="/studios"]`).each((index, element) => {
 animeDetails.studios.push($(element).text().trim());
 });
 return animeDetails;
 } catch (error) {
 return { success: false, message: error.message };
 console.error("Error:", error.response ? error.response.data : error.message);
 }
 }
}

if (!text) return m.reply('Nama Anime?')
m.reply(mess.wait)
let hasil = await livechart.search(text)
let no = 1
let captiona = `── *[ JAM - TAYANG - ANIME ]* ──
`
for (let i of hasil) {
captiona += `── *[ ${no++} / ${i.title} ]* ──
`

captiona += `│ ◦ RELEASE: ${i.release}\n`
captiona += `│ ◦ RATING: ${i.rating}\n`
captiona += `│ ◦ TYPE: ${i.type}\n`
captiona += `│ ◦ URL: ${i.url}\n`
captiona += `────────── \n\n`
}

let lepii = hasil[0]

await Risa.sendMessage(m.chat, {
text: captiona,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: lepii.title,
mediaType: 1,
previewType: 1,
body: `rating: ${lepii.rating} / release: ${lepii.release}`,
thumbnailUrl: lepii.imageUrl,
renderLargerThumbnail: true,
mediaUrl: lepii.url,
sourceUrl: lepii.url
},
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
serverMessageId: -1,
newsletterName: `LiveChart By: ${botname}`
}
}
},{ quoted: m });
}
}
