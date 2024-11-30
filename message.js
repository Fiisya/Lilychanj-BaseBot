/**
lilychanj x Plugins Base
**/
require('./settings')
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@adiwajshing/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const FormData = require('form-data');
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const { performance } = require("perf_hooks");
const process = require('process');
const moment = require("moment-timezone")
const PhoneNum = require("awesome-phonenumber")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const ms = toMs = require('ms')
const gis = require('g-i-s')
const yts = require("yt-search")
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const timestampp = speed();
const latensi = speed() - timestampp
const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, shorturl, color } = require("./lib/function");
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar
} = require('./lib/converter')
const {
	pomfCDN,
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    catbox,
    floNime,
    webp2mp4
} = require('./lib/uploader')
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const { addExif } = require('./lib/exif')
const {
    smsg,
    formatDate,
    getTime,
    getGroupAdmins,
    formatp,
    await,
    sleep,
    runtime,   
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase,
    isUrl
} = require('./lib/myfunc')
const { android1 } = require('./lib/android1')

module.exports = Risa = async (Risa, m, chatUpdate, store) => {
try {
const body = (m && m.mtype) ? (
m.mtype === 'conversation' ? m.message?.conversation :
m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
m.mtype === 'buttonsResponseMessage' ? m.message?.buttonsResponseMessage?.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m.mtype === 'templateButtom.replyMessage' ? m.message?.templateButtom.replyMessage?.selectedId :
m.mtype === 'messageContextInfo' ? (
m.message?.buttonsResponseMessage?.selectedButtonId || 
m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m.text
) : ''
) : '';
const budy = (m && typeof m.text === 'string') ? m.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || "No Name";
const botNumber = await Risa.decodeJid(Risa.user.id);
const type = m
const sender = m.sender
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const text = q = args.join(" ");
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
//group
const groupMetadata = m.isGroup ? await Risa.groupMetadata(m.chat).catch(e => {}) : {};
const groupName = m.isGroup && groupMetadata ? groupMetadata.subject : '';
const participants = m.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const isMediaRisa = m.mtype
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};

const Alfitext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)    
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
const Risadate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️🌕'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ 🌤️'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ ⛅'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️☀️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ ⛅'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ 🌖'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ 🌘'
        }
//================== [ FUNCTION ] ==================//
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}

const totalFitur = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
 
// AMBIL PP USER
try {
var ppuser = await Risa.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await Risa.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')

Risa.autoshalat = Risa.autoshalat ? Risa.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Risa.user.id : m.sender;
let id = m.chat;
if (id in Risa.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:16",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
Risa.autoshalat[id] = [
                    Risa.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                         mentions: participants.map(a => a.id),
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnailUrl: `https://i.top4top.io/p_3193v20ky1.jpg`,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                    }),
setTimeout(async () => {
delete Risa.autoshalat[m.chat];
}, 57000),];
}} 

let bdw = await checkBandwidth()

async function tiktok(text) {
  try {
    const response = await axios.post('https://shinoa.us.kg/api/download/tiktok', {
      text: text
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'kyuurzy',
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching TikTok video:', error);
    throw error;
  }
}

async function igdl(url) {
    try {
        const response = await axios.post('https://shinoa.us.kg/api/download/igdl', {
            text: url
        }, {
            headers: {
                'accept': '*/*',
                'api_key': 'kyuurzy',
                'Content-Type': 'application/json'
            }
        });
        
        return response.data;
    } catch (error) {
        console.error('Error downloading Instagram content:', error);
    }
}


async function ytdl(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'kyuurzy',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

async function pindl(url) {
    try {
        const response = await axios.post('https://shinoa.us.kg/api/download/pinterest', {
            text: url
        }, {
            headers: {
                'accept': '*/*',
                'api_key': 'kyuurzy',
                'Content-Type': 'application/json'
            }
        });

        return response.data; 
    } catch (error) {
        console.error('Error during API request:', error);
        throw error;
    }
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply3('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const Lorenzoyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Hann',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            Lorenzoyresult.push(result)
        }
    resolve(Lorenzoyresult)
    })
}

async function ttsEmma(teks) {
    const url = 'https://wavel.ai/wp-json/myplugin/v1/tts';
    const data = new URLSearchParams({
        lang: 'id-ID',
        text: teks,
        voiceId: 'en-US-EmmaMultilingualNeural'
    });

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const base64Audio = jsonResponse.base64Audio;

            const audioData = Buffer.from(base64Audio, 'base64');

            const fs = require('fs');
            const audioFilePath = 'output.wav';
            fs.writeFileSync(audioFilePath, audioData);

            Risa.sendMessage(m.chat,{audio: fs.readFileSync(audioFilePath), mimetype: 'audio/mp4' })
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function gempa() {
return new Promise(async(resolve,reject) => {
                axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const drasa = [];
                        $('table > tbody > tr:nth-child(1) > td:nth-child(6) > span').get().map((rest) => {
         					dir = $(rest).text();
         					drasa.push(dir.replace('\t', ' '))
        				})
        				teks = ''
        				for(let i=0; i<drasa.length; i++){
        					teks += drasa[i] + '\n'
        				}
        				const rasa = teks
                        const format = {
                        	imagemap : $('div.modal-body > div > div:nth-child(1) > img').attr('src'),
                        	magnitude : $('table > tbody > tr:nth-child(1) > td:nth-child(4)').text(),
                        	kedalaman: $('table > tbody > tr:nth-child(1) > td:nth-child(5)').text(),
                        	wilayah: $('table > tbody > tr:nth-child(1) > td:nth-child(6) > a').text(),
                        	waktu: $('table > tbody > tr:nth-child(1) > td:nth-child(2)').text(),
                        	lintang_bujur: $('table > tbody > tr:nth-child(1) > td:nth-child(3)').text(),
                        	dirasakan: rasa
                        }
                        const result = {
                        	creator: 'Fajar Ihsana',
                        	data: format
                        }
                  resolve(result)
			})
                .catch(reject)
            })
}

async function formatUptime(uptime) {
  let seconds = Math.floor(uptime % 60);
  let minutes = Math.floor((uptime / 60) % 60);
  let hours = Math.floor((uptime / (60 * 60)) % 24);
  let days = Math.floor(uptime / (60 * 60 * 24));
  let formattedUptime = '';
  if (days > 0) formattedUptime += `${days} days `;
  if (hours > 0) formattedUptime += `${hours} hours `;
  if (minutes > 0) formattedUptime += `${minutes} minutes `;
  if (seconds > 0) formattedUptime += `${seconds} seconds`;
  return formattedUptime;
}

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

async function tiktokSearchVideo(query) {
      return new Promise(async (resolve, reject) => {
        axios("https://tikwm.com/api/feed/search", {
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            cookie: "current_language=en",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
          },
          data: {
            keywords: query,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1,
          },
          method: "POST",
        }).then((res) => {
          resolve(res.data.data);
        });
      });
    }

async function convertAngka(number) {
  return number.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short'
  });
}  

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('message.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
reply3(response)
}}

const { run } = require('shannz-playwright');

async function iask(query) {
    const code = `
const { chromium } = require('playwright');

async function iask(query) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
        await page.goto(\`https://iask.ai/?mode=question&q=\${query}\`);
        await page.waitForSelector('.mt-6.md\\\\:mt-4.w-full.p-px.relative.self-center.flex.flex-col.items-center.results-followup', { timeout: 30000 });

        const outputDiv = await page.$('#output');

        if (!outputDiv) {
            return { image: [], answer: null, sources: [], videoSource: [], webSearch: [] };
        }

        const answerElement = await outputDiv.$('#text');
        const answerText = await answerElement.evaluate(el => el.innerText);
        const [answer, sourcesText] = answerText.split('Top 3 Authoritative Sources Used in Answering this Question');
        const cleanedAnswer = answer.replace(/According to Ask AI & Question AI www\\.iAsk\\.ai:\\s*/, '').trim();
        const sources = sourcesText ? sourcesText.split('\\n').filter(source => source.trim() !== '') : [];

        const imageElements = await outputDiv.$$('img');
        const images = await Promise.all(imageElements.map(async (img) => {
            return await img.evaluate(img => img.src);
        }));

        const videoSourceDiv = await page.$('#related-videos');
        const videoSources = [];
        if (videoSourceDiv) {
            const videoElements = await videoSourceDiv.$$('a');
            for (const videoElement of videoElements) {
                const videoLink = await videoElement.evaluate(el => el.href);
                const videoTitle = await videoElement.$eval('h3', el => el.innerText).catch(() => 'No title found');
                const videoThumbnail = await videoElement.$eval('img', el => el.src).catch(() => 'No thumbnail found');

                if (videoTitle !== 'No title found' && videoThumbnail !== 'No thumbnail found') {
                    videoSources.push({ title: videoTitle, link: videoLink, thumbnail: videoThumbnail });
                }
            }
        }

        const webSearchDiv = await page.$('#related-links');
        const webSearchResults = [];
        if (webSearchDiv) {
            const linkElements = await webSearchDiv.$$('a');
            for (const linkElement of linkElements) {
                const linkUrl = await linkElement.evaluate(el => el.href);
                const linkTitle = await linkElement.evaluate(el => el.innerText);
                const linkImage = await linkElement.$eval('img', el => el.src).catch(() => 'No image found');
                const linkDescription = await linkElement.evaluate(el => el.nextElementSibling.innerText).catch(() => 'No description found');

                if (linkTitle && linkUrl) {
                    webSearchResults.push({
                        title: linkTitle,
                        link: linkUrl,
                        image: linkImage,
                        description: linkDescription
                    });
                }
            }
        }

        const src = sources.map(source => source.trim());
        const result = { image: images, answer: cleanedAnswer, sources: src, videoSource: videoSources, webSearch: webSearchResults };
        return JSON.stringify(result, null, 2);

    } catch (error) {
        console.error('Error fetching data:', error);
        return { image: [], answer: null, sources: [], videoSource: [], webSearch: [] };
    } finally {
        await browser.close();
    }
}

iask(\`${query}\`).then(a => console.log(a));
    `;

    const start = await run('javascript', code);
    const string = start.result.output;
    return JSON.parse(string);
}

const fsaver = {
    download: async (urls) => {
        const url = `https://fsaver.net/download/?url=${urls}`;
        const headers = {
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
            "sec-ch-ua": '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"'
        };
        try {
            const response = await axios.get(url, { headers });
            const html = response.data;
            const data = await fsaver.getData(html); // Memastikan getData menunggu hasil
            return data;
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            return { success: false, message: error.message };
        }
    },
    getData: async (content) => {
        try {
            const baseUrl = 'https://fsaver.net';
            const $ = cheerio.load(content);
            const videoSrc = $('.video__item').attr('src');
            const videoPoster = $('.video__item').attr('poster');
            const name = $('.download__item__user_info div').first().text().trim();
            const profilePicture = baseUrl + $('.download__item__profile_pic img').attr('src');
            
            const result = {
                video: baseUrl + videoSrc,
                thumbnail: baseUrl + videoPoster,
                userInfo: {
                    name,
                    profilePicture,
                },
            };
            return result;
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            return { success: false, message: error.message };
        }
    }
};

const otakudesu = {
    ongoing: async () => {
        try {
            const { data } = await axios.get('https://otakudesu.cloud/');
            const $ = cheerio.load(data);
            const results = [];

            $('.venz ul li').each((index, element) => {
                const episode = $(element).find('.epz').text().trim();
                const type = $(element).find('.epztipe').text().trim();
                const date = $(element).find('.newnime').text().trim();
                const title = $(element).find('.jdlflm').text().trim();
                const link = $(element).find('a').attr('href');
                const image = $(element).find('img').attr('src');

                results.push({
                    episode,
                    type,
                    date,
                    title,
                    link,
                    image
                });
            });

            return results;
        } catch (error) {
            console.error('Error fetching ongoing anime:', error);
            return { error: 'Error fetching ongoing anime' };
        }
    },
    search: async (query) => {
        const url = `https://otakudesu.cloud/?s=${query}&post_type=anime`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const animeList = [];

            $('.chivsrc li').each((index, element) => {
                const title = $(element).find('h2 a').text().trim();
                const link = $(element).find('h2 a').attr('href');
                const imageUrl = $(element).find('img').attr('src');
                const genres = $(element).find('.set').first().text().replace('Genres : ', '').trim();
                const status = $(element).find('.set').eq(1).text().replace('Status : ', '').trim();
                const rating = $(element).find('.set').eq(2).text().replace('Rating : ', '').trim() || 'N/A';

                animeList.push({
                    title,
                    link,
                    imageUrl,
                    genres,
                    status,
                    rating
                });
            });
            return animeList;
        } catch (error) {
            console.error('Error fetching search results:', error);
            return { error: 'Error fetching search results' };
        }
    },
    detail: async (url) => {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            const animeInfo = {
                title: $('.fotoanime .infozingle p span b:contains("Judul")').parent().text().replace('Judul: ', '').trim(),
                japaneseTitle: $('.fotoanime .infozingle p span b:contains("Japanese")').parent().text().replace('Japanese: ', '').trim(),
                score: $('.fotoanime .infozingle p span b:contains("Skor")').parent().text().replace('Skor: ', '').trim(),
                producer: $('.fotoanime .infozingle p span b:contains("Produser")').parent().text().replace('Produser: ', '').trim(),
                type: $('.fotoanime .infozingle p span b:contains("Tipe")').parent().text().replace('Tipe: ', '').trim(),
                status: $('.fotoanime .infozingle p span b:contains("Status")').parent().text().replace('Status: ', '').trim(),
                totalEpisodes: $('.fotoanime .infozingle p span b:contains("Total Episode")').parent().text().replace('Total Episode: ', '').trim(),
                duration: $('.fotoanime .infozingle p span b:contains("Durasi")').parent().text().replace('Durasi: ', '').trim(),
                releaseDate: $('.fotoanime .infozingle p span b:contains("Tanggal Rilis")').parent().text().replace('Tanggal Rilis: ', '').trim(),
                studio: $('.fotoanime .infozingle p span b:contains("Studio")').parent().text().replace('Studio: ', '').trim(),
                genres: $('.fotoanime .infozingle p span b:contains("Genre")').parent().text().replace('Genre: ', '').trim(),
                imageUrl: $('.fotoanime img').attr('src')
            };

            const episodes = [];
            $('.episodelist ul li').each((index, element) => {
                const episodeTitle = $(element).find('span a').text();
                const episodeLink = $(element).find('span a').attr('href');
                const episodeDate = $(element).find('.zeebr').text();
                episodes.push({ title: episodeTitle, link: episodeLink, date: episodeDate });
            });

            return {
                animeInfo,
                episodes
            };
        } catch (error) {
            console.error('Error fetching details:', error);
            return { error: 'Error fetching details' };
        }
    },
    download: async (url) => {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            const episodeInfo = {
                title: $('.download h4').text().trim(),
                downloads: []
            };

            $('.download ul li').each((index, element) => {
                const quality = $(element).find('strong').text().trim();
                const links = $(element).find('a').map((i, el) => ({
                    quality,
                    link: $(el).attr('href'),
                    host: $(el).text().trim()
                })).get();
                episodeInfo.downloads.push(...links);
            });
            return episodeInfo;
        } catch (error) {
            console.error('Error fetching downloads:', error);
            return { error: 'Error fetching downloads' };
        }
    }
};

Risa.autoanimegc = Risa.autoanimegc ? Risa.autoanimegc : {}
if (idch in Risa.autoanimegc) {
    return false
}
let jadwalanime = {
    subuh: '00:00',
    pagi: '08:00',
    siang: '12:00',
    sore: '16:00',
    magrib: '18:00',
    malam: '20:00',
    tengah_malam: '23:00',
}
let hoh = await otakudesu.ongoing()
let alpikk = `*[ ᴜᴘᴅᴀᴛᴇ ᴏɴɢᴏɪɴɢ ]* \n`
for (let i of hoh) {
alpikk += `\n *[ ${i.title} | ${i.episode} ]* \n`
alpikk += `Link: ${i.link}\n`
alpikk += `\n\n`
}
for (let [anime, waktu] of Object.entries(jadwalanime)) {
if (timeNow === waktu) {
Risa.autoanimegc["120363189162607817@g.us"] = [

await Risa.sendMessage("120363189162607817@g.us", {
text: alpikk,
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: 'Update Ongoing By: Risa',
      mediaType: 1,
      previewType: 1,
      body: 'by: Risa',
      //previewType: "PHOTO",
      thumbnailUrl: 'https://endpoint.web.id/server/file/izpR22PMfHe8L5YN.jpg',
      renderLargerThumbnail: true,
      mediaUrl: web,
      sourceUrl: web
     },
      forwardedNewsletterMessageInfo: {
      newsletterJid: idch,
      newsletterName: `By : ${ownername}`,
      serverMessageId: 143
    }
  }
}, {  })
]
}
}

const sanai = {
  create: async (
    prompt = "Daffa",
    weight = 1024,
    height = 1024,
    guiscale = 5,
    paguiscale = 2,
    nis = 18,
    step = 20,
    sid = -1
  ) => {
    const url = 'https://api.freesana.ai/v1/images/generate';
    const headers = {
      'authority': 'api.freesana.ai',
      'origin': 'https://freesana.ai',
      'referer': 'https://freesana.ai/',
      'user-agent': 'Postify/1.0.0',
    };

    const data = {
      prompt,
      model: "sana_1_6b",
      width: weight,
      height: height,
      guidance_scale: guiscale,
      pag_guidance_scale: paguiscale,
      num_inference_steps: nis,
      steps: step,
      seed: sid,
    };

    try {
      const response = await axios.post(url, data, { headers });
      const { id, status, result, processingTime, width, height, nsfw, seed } = response.data;

      return { id, status, result, processingTime, width, height, nsfw, seed };
    } catch (error) {
      console.error("Error saat memanggil API FreeSana:", error.message);
      throw new Error("Gagal terhubung ke API. Silakan coba lagi nanti.");
    }
  },
};

//================== [ DATABASE ] ==================//
//================== [ CONSOL LOGG] ==================//

  if (m.message) {            
    console.log(chalk.cyan(`────────────『 ${chalk.redBright('ᴵᴺᶠᴼ ᴹᴱˢˢᴬᴳᴱ')} 』────────────`));
    console.log(`   ${chalk.cyan('» Message Type')}: ${m.mtype}`);
    console.log(`   ${chalk.cyan('» Sent Time')}: ${time2}`);
    console.log(`   ${chalk.cyan('» Sender Name')}: ${pushname || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Chat ID')}: ${m.chat.split('@')[0]}`);
    console.log(`   ${chalk.cyan('» Chat Name')}: ${budy || 'N/A'}`);
    console.log(`   ${chalk.cyan('» Author By')}: LepiiNotDev`);
    console.log(chalk.cyan('───────────────────────────────────⳹\n'));
}
//================== [ FAKE REPLY ] ==================//
try {
pplu = await Risa.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fkontak = {
key: {
participants: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
fromMe: false,
id: "Halo"},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}},
participant: "0@s.whatsapp.net"
}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363208710632243@newsletter`,
newsletterName: `Risa`,
jpegThumbnail: "",
caption: `Powered By Lepii`,
inviteExpiration: Date.now() + 1814400000
}
}}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const Alfi = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Alfi,;;;\nFN: Ken MD\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

const reply = async(teks) => { 
Risa.sendMessage(m.chat, { text : teks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363208710632243@newsletter',
serverMessageId: 20,
newsletterName: '❃ Risa - Assistant'
},
externalAdReply: {
title: "Risa - Assistant", 
body: "",
thumbnailUrl: "https://endpoint.web.id/server/file/90zDkCDA914lq5K.jpg", 
sourceUrl: "alfitech.xyz",
mediaType: 1
}}}, { quoted : m })
}

const reply2 = async(teks) => {Risa.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

async function reply3(teks) {
  let photo = pickRandom(global.fotoRandom);

  const botz = {
    contextInfo: {
      mentionedJid: [m.sender],           
      forwardingScore: 9999999,           
      isForwarded: false,                  
      externalAdReply: {
        showAdAttribution: false,          
        title: 'Risa - Assistant',              
        body: `Hai ${ucapanWaktu} ${pushname}`, 
        previewType: "PHOTO",             
        thumbnailUrl: photo,              
        sourceUrl: 'https://alfitech.xyz' 
      }
    },
    text: teks                            
  };

  return Risa.sendMessage(m.chat, botz, { quoted: m });
};

if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
let urel = `https://pomf2.lain.la/f/7ixvc40h.mp3`
Risa.sendMessage(m.chat, {audio: {url: urel}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}

if ((budy.match) && ["kak", "woy", "mek", "jawir", "y", "dah", "yaudah", "bang", "bg", "Bang", "Bg", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
var stik = await fetchJson('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/StickerRespon.json')
var pick = pickRandom(stik)
Risa.sendImageAsSticker(m.chat, pick.url, m, { packname: global.packname, author: global.author })
}

if (budy.includes('@62895615063060')) {
  const q = budy.replace('@62895615063060', '').trim();
  if (q) {
    try {
        const answer = await fetchJson(`https://www.tanakadomp.biz.id/api/openai/open-ai?q=${q}`);
     m.reply(answer.message);
    } catch (error) {
      m.reply("🧢🧢🧢");
    }
  } else {
    m.reply("mau nanya apa sama ownerku?.");
  }
}   


if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply3(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await Risa.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return Risa.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return Risa.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return Risa.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await Risa.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
Risa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Risa.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
    
    const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
    }
//================== [ PLUGINS ] ==================//
  /*!-======[ Plugins Imports ]======-!*/
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
                    try {
                        delete require.cache[require.resolve(filePath)]
                        const plugin = require(filePath)
                        plugin.filePath = filePath
                        plugins.push(plugin)
                    } catch (error) {
                        console.error(`Error loading plugin at ${filePath}:`, error)
                    }
                }
            })
        }
    })
    return plugins
}
// Ngambil semua plugin dari direktori plugin
const plugins = loadPlugins(path.resolve(__dirname, "./Plugins"))
const context = { 
    Risa, 
    reply,
    m, 
    chatUpdate, 
    store, 
    body,   
    prefix,
    command,
    q,
    text,
    quoted,
    require,
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase }
// Kode ini ngeliat plugin satu per satu, kalo nemu plugin yang cocok ama command yang diterima, dia langsung manggil fungsi operate-nya dan berhenti.
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}      
//=================================================//
switch(command) {
//=================================================//
case 'help': case 'all': {
const menugambir = pickRandom([
"https://endpoint.web.id/server/file/oXrciNu950S6mFLs.jpg",
"https://endpoint.web.id/server/file/lDjG0nXnIrLBuBD.jpg",
"https://endpoint.web.id/server/file/DMXkBpmguqaeSElA.jpg",
"https://endpoint.web.id/server/file/7UVGKp0hjB1Tdom.jpg",	  
"https://endpoint.web.id/server/file/PizEq6Qw9EANDTgz.jpg",
])
let menulist = `ʜᴇʟʟᴏ, *${pushname}* ${themeemoji}
 ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴘᴘ. ;
 
 – ${fii}INFO BOT${fii} –
│ ◦ *Botname:* ${botname}
│ ◦ *Owner:* ${ownername}
│ ◦ *Upload:* ${bdw.upload}
│ ◦ *Download:* ${bdw.download}
│ ◦ *Baileys:* @whiskeysockets
│ ◦ *Tanggal:* ${Risadate}
│ ◦ *Total Fitur:* ${totalFitur()}
│ ◦ *Runtime:* ${runtime(process.uptime())}
└───···▧

– ${fii}OWNER MENU${fii}
│  ◦ ${prefix}getplugin 
│  ◦ ${prefix}addplugin 
│  ◦ ${prefix}delplugin 
│  ◦ ${prefix}cgplugin 
│  ◦ ${prefix}addcase
│  ◦ ${prefix}delcase
│  ◦ ${prefix}disk
│  ◦ ${prefix}getfile
│  ◦ ${prefix}getlib
│  ◦ ${prefix}>
│  ◦ ${prefix}=>
│  ◦ ${prefix}$
│  ◦ ${prefix}backup
│  ◦ ${prefix}listgc
│  ◦ ${prefix}bcgc
│  ◦ ${prefix}jpm
│  ◦ ${prefix}join
└───···▧

– ${fii}AI MENU${fii}
│  ◦ ${prefix}ai
│  ◦ ${prefix}chatgpt
│  ◦ ${prefix}aiimg
│  ◦ ${prefix}autoai
│  ◦ ${prefix}photoleap
│  ◦ ${prefix}prabowo
│  ◦ ${prefix}bingsearhimg
│  ◦ ${prefix}openai
│  ◦ ${prefix}ai-detect
│  ◦ ${prefix}advanceai
│  ◦ ${prefix}gpt4
│  ◦ ${prefix}gptgo
│  ◦ ${prefix}gemini
│  ◦ ${prefix}gptturbo
│  ◦ ${prefix}hercai
│  ◦ ${prefix}draw
│  ◦ ${prefix}morphic
└───···▧

– ${fii}INFO MENU${fii}
│  ◦ ${prefix}owner
│  ◦ ${prefix}sc
│  ◦ ${prefix}tqto 
│  ◦ ${prefix}ping
│  ◦ ${prefix}totalfitur
│  ◦ ${prefix}os
│  ◦ ${prefix}server
│  ◦ ${prefix}listcase
└───···▧

– ${fii}TOOLS MENU${fii}
│  ◦ ${prefix}remini
│  ◦ ${prefix}get
│  ◦ ${prefix}stickerwm
│  ◦ ${prefix}rvo
│  ◦ ${prefix}tourl
│  ◦ ${prefix}faketweet
│  ◦ ${prefix}infogempa
│  ◦ ${prefix}igstalk
│  ◦ ${prefix}nextlibur
│  ◦ ${prefix}removebg
│  ◦ ${prefix}reminder
│  ◦ ${prefix}ceknik
│  ◦ ${prefix}ssweb
│  ◦ ${prefix}wastalk
└───···▧

– ${fii}GROUP MENU${fii}
│  ◦ ${prefix}hidetag
│  ◦ ${prefix}tagall
│  ◦ ${prefix}totag
│  ◦ ${prefix}del
│  ◦ ${prefix}add
│  ◦ ${prefix}kick
│  ◦ ${prefix}opentime
│  ◦ ${prefix}closetime
│  ◦ ${prefix}editdesk
│  ◦ ${prefix}promote
│  ◦ ${prefix}demote
│  ◦ ${prefix}linkgc
│  ◦ ${prefix}gcsider
│  ◦ ${prefix}open
│  ◦ ${prefix}close
└───···▧

– ${fii}DOWNLOAD MENU${fii}
│  ◦ ${prefix}tiktok
│  ◦ ${prefix}play
│  ◦ ${prefix}mediafire
│  ◦ ${prefix}instagram 
│  ◦ ${prefix}facebook
│  ◦ ${prefix}ytmp3 
│  ◦ ${prefix}ytmp4
│  ◦ ${prefix}pindl
│  ◦ ${prefix}telestick
│  ◦ ${prefix}gdrive
│  ◦ ${prefix}capcut
│  ◦ ${prefix}aio
│  ◦ ${prefix}soundcloud
│  ◦ ${prefix}apkmod
│  ◦ ${prefix}terabox
└───···▧

– ${fii}CONVERT MENU${fii}
│  ◦ ${prefix}sticker
│  ◦ ${prefix}smeme
│  ◦ ${prefix}qc
│  ◦ ${prefix}emma
│  ◦ ${prefix}toimg
│  ◦ ${prefix}createlogo
│  ◦ ${prefix}brat
│  ◦ ${prefix}ttp
└───···▧

– ${fii}SEARCH MENU${fii}
│  ◦ ${prefix}ytsearch
│  ◦ ${prefix}pinterest
│  ◦ ${prefix}imdb
│  ◦ ${prefix}resep
│  ◦ ${prefix}drakor
│  ◦ ${prefix}gimage
│  ◦ ${prefix}gsmarena
│  ◦ ${prefix}ppcouple
│  ◦ ${prefix}justina
│  ◦ ${prefix}ttsearch
│  ◦ ${prefix}lirik
│  ◦ ${prefix}kisahnabi
│  ◦ ${prefix}storyanime
│  ◦ ${prefix}longtext
│  ◦ ${prefix}spotifysearch
│  ◦ ${prefix}bluearchive
│  ◦ ${prefix}pixiv
│  ◦ ${prefix}sdino
└───···▧
`
   Risa.sendMessage(m.chat, {
      text: menulist,
             contextInfo: { 
               mentionedJid: [m.sender],
                   externalAdReply: {
                     showAdAttribution: true,
                      title: `Risa - Assistant`,
                      body: '',
                      thumbnailUrl: menugambir,
                    sourceUrl: "https://chat.whatsapp.com/GVL6kM2IGnzIdAl7MK20QF",
                  mediaType: 1,
                renderLargerThumbnail: true
              }
             }
           },
         { 
    quoted : m
    }
  )
}
break
//<================================================>//
/*
 
 
                    [ SCRIPT Risa ]
 
                   < OWNER FITUR >

*/
//<================================================>//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply3(`${err}`)
if (stdout) return reply3(stdout)
})
}
break
case 'getcase': {

const getCase = (cases) => {

            return "case "+`'${cases}'`+fs.readFileSync("./message.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!isCreator) return reply3('ngapain')

                if (!q) return reply3(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply3(nana)

            } catch(err){

            console.log(err)

            reply3(`Case ${q} tidak di temukan`)

        }
 }
break 
 case 'delcase': {
if (!isCreator) return reply3(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply3('*Masukan nama case yang akan di hapus*')
dellCase('./message.js', q)
reply3(`Case *${text}* berhasil dihapus.`)
}
break

case 'h': case 'hidetag': case 'ht': {
if (!m.isGroup) return reply3(mess.group)
if (!isAdmins && !isCreator) return reply3(mess.admin)
Risa.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'tagall': {
if (!isAdmins) return reply3(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Risa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'linkgroup':
 case 'linkgrup':
 case 'linkgc':
 case 'gclink':
 case 'grouplink':
 case 'gruplink':
 if (!m.isGroup) return reply3(mess.group)
 if (!isAdmins && !isGroupOwner && !isCreator) return reply3(mess.admin)
 if (!isBotAdmins) return reply3(mess.botAdmin)
 let response = await Risa.groupInviteCode(m.chat)
 Risa.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
 detectLink: true
 })
 break

case "promote":{
if (!m.isGroup) return reply3(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply3(mess.admin)
if (!isBotAdmins) return reply3(mess.botAdmin)
if (!text && !m.quoted) reply3('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Risa.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case "demote":{
if (!m.isGroup) return reply3(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply3(mess.admin)
if (!isBotAdmins) return reply3(mess.botAdmin)
if (!text && !m.quoted) reply3('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Risa.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'resetlinkgc':
if (!isCreator) return reply3(mess.owner)
if (!m.isGroup) return reply3(mess.group)
if (!isBotAdmins) return reply3(mess.badm)
Risa.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return reply3(mess.owner)
if (!m.isGroup) return reply3(mess.group)
if (!isBotAdmins) return reply3(mess.badm)
if (!isAdmins) return reply3(mess.admin)
if (!text) return reply3(`Text Nya ?`)
await Risa.groupUpdateDescription(from, text).then((res)).catch((err) => reply3(jsonformat(err)))
}
break

case 'closetime':
if (!m.isGroup) return reply3(mess.group)
if (!isBotAdmins) return reply3(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply3("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply3(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Risa.groupSettingUpdate(from, 'announcement')
reply3(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply3("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply3("Khusus Admin Group")
if (!isBotAdmins) return reply3("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply3('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply3(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
Risa.groupSettingUpdate(m.chat, 'not_announcement')
reply3(open)
}, timer)
}
break

case 'kick': {
if (!m.isGroup) return reply3('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply3('Fitur Khusus admin!')
if (!isBotAdmins) return reply3('Bot Bukan Admin')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Risa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply3(`Sukses kick target dari grup\n• ${groupName}`)).catch((err) => reply3('Tag/reply pesan target yang ingin di kick!'))
}
break

case 'add': {
if (!m.isGroup) return reply3('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return reply3('Fitur Khusus admin!')
if (!isBotAdmins) return reply3('Bot Bukan Admin')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Risa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply3(`Sukses add member ke grup\n• ${groupName}`)).catch((err) => reply3('Terjadi kesalahan.'))
}
break

case 'totag':
if (!m.isGroup) return reply3('Fitur Khusus Group!')
if (!isBotAdmins) return reply3('Bot Bukan Admin')
 if (!isAdmins) return reply3(mess.admin)
 if (!m.quoted) return reply3(`Reply media with caption ${prefix + command}`)
 Risa.sendMessage(m.chat, {
 forward: m.quoted.fakeObj,
 mentions: participants.map(a => a.id)
 })
 break

case 'del': {
if (!isAdmins && !isGroupOwner && !isCreator) return reply3(mess.admin)
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
Risa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'getfile':{
 if (!isCreator) return;
 if (!q) return reply3("*[!] File..?*")
 var sendfile = `${q}`
 var anuu = fs.readFileSync(sendfile)
 Risa.sendMessage(
 m.chat, 
 {
 document: 
 anuu, 
 mimetype: 
 'application/octet-stream', 
 fileName:
 `${q}`
 }, {quoted: m}) 
 }
 break

case 'qc2': {
 if (!q) return reply3('Enter Text');
 const ppnyauser = await Risa.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
 const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": "#FFFFFF",
 "width": 512,
 "height": 768,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": pushname,
 "photo": {
 "url": ppnyauser
 }
 },
 "text": q,
 "m.replyMessage": {}
 }
 ]
 };

 const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
 headers: {'Content-Type': 'application/json'}
 });
 const buffer = Buffer.from(res.data.result.image, 'base64');
 const rest = { 
 status: "200", 
 creator: "AdrianTzy",
 result: buffer
 };

 Risa.sendImageAsSticker(m.chat, rest.result, m, {
 packname: `${global.packname}`,
 author: `${global.author}`
 });
}
break;

case 'smeme': case 'stickermeme': case 'stickmeme': {
reply3(mess.wait)
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return reply3(`Usage: ${prefix + command} text1|text2`)
let { catbox } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Risa.downloadAndSaveMediaMessage(quoted)
const k = await quoted.download()
mem = await catbox(k)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await Risa.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
}
}
break

case 's': case 'sticker': case 'stiker': {
 if (!quoted) return reply3(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Risa.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply3(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds'l`)
let media = await quoted.download()
let encmedia = await Risa.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply3(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break

case 'wm': {
let teks = `${text}`
try {
 if (!quoted) reply3(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Risa.sendImageAsSticker(from, media, m, { packname: `${teks}`, author: `` })
await fs.unlinkSync(encmedia)
}
} catch (e) {
reply3(mess.error)
}
}
break

case "backup":{
if (!isCreator) return reply3(mess.owner)
reply3(mess.wait)
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
 (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != ".npm" &&
pe != ""
);
 const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
 await Risa.sendMessage(m?.chat,
{
 document: await fs.readFileSync("./New.zip"),
 mimetype: "application/zip",
 fileName: `${botname}.zip`,
},
{ quoted: m }
 );
 await execSync("rm -rf New.zip");
}
break

case 'getlib':
if (!text) return reply3('file apa?');
if (!isCreator) return reply3(mess.owner);
reply3(mess.wait)
let feel = fs.readFileSync(`./lib/${text}`);
Risa.sendMessage(m.chat, { document: feel, mimetype: 'appliction/javascript', fileName: `${text}`},{quoted:m})
break

case 'owner': {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Owner!!\nORG:Lepii\nTITLE:soft\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Ponsel\nitem2.URL:http://github.com/Fiisya\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:alpikntl@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;Mars;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
 let sentmsg = await Risa.sendMessage(
 m.chat, {
 contacts: {
 displayName: 'Lepii',
 contacts: [{
 vcard
 }],
 },
 contextInfo: {
 externalAdReply: {
 title: "Lepii",
 body: "Risa - Assistant",
 thumbnailUrl: 'https://files.catbox.moe/jtwbdr.jpg',
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 },
 }, {
 quoted: m
 },
 );
 Risa.sendMessage(m.chat, {
 text: `Hai, ${pushname} itu Nomor Owner`
 }, {
 quoted: sentmsg
 })
}
break

case 'sc': {
 let sc = `乂 *B O T - S C R I P T*\n\n`
 sc += `┌ ◦ *Name* : lilychanj - BaseBot\n`
 sc += `│ ◦ *Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
 sc += `└ ◦ *Url* : https://github.com/TanakaDomp/lilychanj-BaseBot`
 let tqto = `乂 *B I G - T H A N K S T O*\n\n`
 tqto += `┌ ◦ _Tanaka Sensei(base)_\n`
 tqto += `│ ◦ _Lepii(beban)_\n`
 tqto += `│ ◦ _My Friend & All User Bot_\n`
 tqto += `└ ◦ _Whiskeysockets_\n\n`
 tqto += `_Risa Powered Lepii_`
 Risa.sendMessage(m.chat, {
 text: `${sc}\n\n${tqto}`,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 title: 'Risa - Assistant',
 thumbnailUrl: 'https://telegra.ph/file/ac299e01e76c911d7f25a.jpg',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: fkontak
 })
}
break

case 'yts': case 'ytsearch': {
if (!text) return reply3(`Example : ${prefix + command} Drunk Text`)
await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `> ⭔ No : ${no++}\n> ⭔ Type : ${i.type}\n> ⭔ Video ID : ${i.videoId}\n> ⭔ Title : ${i.title}\n> ⭔ Views : ${i.views}\n> ⭔ Duration : ${i.timestamp}\n> ⭔ Upload At : ${i.ago}\n> ⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
Risa.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
}
break

case 'tiktok2': case 'tt2': {
        if (!text) return reply3("Where is the TikTok URL? *Example :* .tiktok https://");
        await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}});   
        let res = await tiktok(text);
        if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await Risa.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await Risa.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await Risa.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await Risa.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await Risa.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await Risa.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
    }
break

case 'playxx': {
        if (!text) return reply3(`what song do you want to play *Example*: .play wide awake`);
        await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}});   
        
        let search = await yts(text);
        let videoUrl = search.all[0].url;

        const response = await ytdl(videoUrl);
        const audioUrl = response.data.mp3;

        Risa.sendMessage(m.chat, { 
            audio: { url: audioUrl },
            mimetype: "audio/mpeg",
            fileName: "audio.mp3",
            contextInfo: {
                forwardingScore: 99999999999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: false,
                    containsAutoReply: true,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    title: search.all[0].title,
                    body: `Song duration: ${search.all[0].timestamp}`,
                    previewType: "PHOTO",
                    thumbnailUrl: search.all[0].thumbnail
                }
            }
        }, { quoted: m });
    }
break

case 'mediafire':
case 'mf': {
    if (!text) return reply3(`Where is the MediaFire URL? *Example:* ${prefix + command} https://www.mediafire.com/file/l5urnlewucsuhmm/LANABOTZ-V.0.3.zip/file`);
    await Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    let donlot;
    try {
        donlot = await mediafire(text);
    } catch (error) {
        console.error("Error fetching mediafire data:", error);
        return reply3("Failed to download the file from MediaFire. Please check the URL or try again later.");
    }

    const result = donlot?.data;
    if (!result) {
        return reply3("Failed to retrieve file data. Please check the MediaFire URL.");
    }

    const fileType = result.mimetype || await getFileTypeFromUrl(result.link);
    const fileName = result.filename || path.basename(result.link);

    if (fileType.startsWith("application/")) {
        await Risa.sendMessage(m.chat, {
            document: { url: result.link },
            fileName: fileName,
            mimetype: fileType
        });
    } else if (fileType.startsWith("image/")) {
        await Risa.sendMessage(m.chat, {
            image: { url: result.link },
            caption: fileName
        });
    } else if (fileType.startsWith("audio/")) {
        await Risa.sendMessage(m.chat, {
            audio: { url: result.link },
            mimetype: fileType,
            ptt: true
        });
    } else if (fileType.startsWith("video/")) {
        await Risa.sendMessage(m.chat, {
            video: { url: result.link },
            caption: fileName
        });
    } else {
        await Risa.sendMessage(m.chat, {
            document: { url: result.link },
            fileName: fileName,
            mimetype: fileType
        });
    }
}

async function getFileTypeFromUrl(url) {
    const ext = path.extname(url).toLowerCase();
    switch (ext) {
        case '.zip': return 'application/zip';
        case '.pdf': return 'application/pdf';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.png': return 'image/png';
        case '.gif': return 'image/gif';
        case '.mp3': return 'audio/mpeg';
        case '.ogg': return 'audio/ogg';
        case '.wav': return 'audio/wav';
        case '.mp4': return 'video/mp4';
        case '.mkv': return 'video/x-matroska';
        case '.webm': return 'video/webm';
        default: return 'application/octet-stream';
    }
}

async function mediafire(url) {
    const response = await axios.post("https://shinoa.us.kg/api/download/mediafire", {
        text: url,
    }, {
        headers: {
            "accept": "*/*",
            "api_key": "free",
            "Content-Type": "application/json"
        }
    });

    return response.data;
}
break

case 'fb2': case 'facebook2': case 'fbdl': {
if (!text) return reply3(`Enter the link!!!`)
await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson(`https://btch.us.kg/download/fbdl?url=${text}`)
Risa.sendMessage(m.chat, { video: { url: anu.result.Normal_video }, caption: 'Successfully downloaded video from that URL' }, { quoted: m })
await Risa.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Risa.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break

case 'hd': case 'remini': {
if (!quoted) return reply3(`Where is the picture?`)
reply3(mess.wait)
if (!/image/.test(mime)) return reply3(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
Risa.sendMessage(m.chat, { image: proses, caption: mess.done}, { quoted: m})
}
break

case 'tqto':
 {
 var tqto = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│ *「 Big Thanks To 」*
│ _*• My God*_
│ _*• My Parents*_
│ _*• My Friend & All User Bot*_
│ _*• Tanaka Sensei [ Base ]*_
│ _*• Myself*_
│ _*• And Other All Bot Creators*_
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`;
 var result = [
 `My God`,
 `My Parents`,
 `My Friend & All User Bot`,
 `Tanaka [ Base ]`,
 `myself`,
 `And Other All Bot Creators`,
 `${tqto}`,
 ];
 let { key } = await Risa.sendMessage(
 m.chat,
 { text: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 :" },
 { quoted: m },
 );

 for (let i = 0; i < result.length; i++) {
 await sleep(1000);
 await Risa.sendMessage(
 m.chat,
 { text: result[i], edit: key },
 { quoted: m },
 );
 }
 }
 break
 
case 'aiimg':{
if (!text) return reply3('Example: .aiimg Prompt')
let anu = `https://api.vreden.my.id/api/text2img?query=${text}`
await Risa.sendMessage(m.chat, {image: {url:anu}, caption: `*< Success >*\n\n*Prompt :* ${text}`},{quoted: m})
}
break

case 'rvo': case 'readvo': {
if (!m.quoted) return reply3(`Reply view once message to use this command`)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Risa.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: m })
} else if (/image/.test(type)) {
await Risa.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: m })
}
}
break

case 'pinterest': case 'pin': {
try {
await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
if (!text) return reply3(`nak cari gambar ape?`);
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
let res = data.resource_response.data.results.map(v => v.images.orig.url);
let get = res[Math.floor(Math.random() * res.length)]

await Risa.sendMessage(m.chat, {
image: { url: get },
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
newsletterName: `Pin By: ${botname}`,
serverMessageId: 143
}
}
}, { quoted: m })
await Risa.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await Risa.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`)
}}
break

case 'ytmp3xx':{ 
async function ytdl(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
if (!text) return reply3(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
await reply3(mess.wait)
const response = await ytdl(text)
const pekob = response.data
await Risa.sendMessage(m.chat, { audio: { url: pekob.mp3 }, mimetype: "audio/mp4", ptt: false }, { quoted: m })
}
break

case 'ytmp4xx':{ 
async function ytdl(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}
if (!text) return reply3(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
await reply3(mess.wait)
const response = await ytdl(text)
const pekob = response.data
await Risa.sendMessage(m.chat, { video: { url: pekob.mp4 }, mimetype: 'video/mp4' 
 }, { quoted: m })
}
break


case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply3(mess.owner)
if (!text) return reply3(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await Risa.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply3(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
Risa.sendMessage(i, {text: `${text}`}, {quoted:qchanel})
}
reply3(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "listgc": case "cekid": case"listgrup": {
if (!isCreator) return reply3(mess.owner)
let gcall = Object.values(await Risa.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
reply3(listgc)
}
break

case 'jpm': {
 if (!isCreator) return reply3(mess.owner);
 if (!text) return reply3(`Text mana?\n\nExample: ${prefix + command} ${botname}`);
 
 let getGroups;
 try {
 getGroups = await Risa.groupFetchAllParticipating();
 } catch (error) {
 console.error('Error fetching groups:', error);
 return reply3('Failed to fetch groups.');
 }
 
 let groups = Object.entries(getGroups).map(entry => entry[1]);
 let anu = groups.map(v => v.id);
 
 reply3(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`);
 
 for (let i of anu) {
 await sleep(1500);
 let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 500,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363208710632243@newsletter',
 newsletterName: '❃ Risa - Assistant',
 serverMessageId: -1
 },
 businessMessageForwardInfo: { businessOwnerJid: Risa.decodeJid(Risa.user.id) },
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: text
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: `${ownername}`,
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/62895615063060\",\"merchant_url\":\"https://wa.me/62895615063060\"}"
 },
 {
 name: "cta_url",
 buttonParamsJson: "{\"display_text\":\"Testimoni\",\"url\":\"https://whatsapp.com/channel/0029VafoxNLD8SE4vQeGIJ3G\",\"merchant_url\":\"https://whatsapp.com/channel/0029VafoxNLD8SE4vQeGIJ3G\"}"
 },
 {
 name: "cta_url",
 buttonParamsJson: "{\"display_text\":\"Info Owner\",\"url\":\"https://alfixd.my.id\",\"merchant_url\":\"https://alfixd.my.id\"}"
 },
 {
 name: "cta_url",
 buttonParamsJson: "{\"display_text\":\"Script\",\"url\":\"https://github.com/TanakaDomp/lilychanj-BaseBot\",\"merchant_url\":\"https://github.com/TanakaDomp/lilychanj-BaseBot\"}"
 }
 ]
 })
 })
 }
 }
 }, {});
 
 await Risa.relayMessage(i, msg.message, { messageId: msg.key.id });
 }
 reply3(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
}
break;

case 'tourl': {
 if (!/video/.test(mime) && !/image/.test(mime)) {
 return reply3(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
 }
 if (!quoted) {
 return reply3(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
 }
 let media = await Risa.downloadAndSaveMediaMessage(quoted);
 let anu = await shannzCdn(media);
 if (anu && anu.status) {
 reply3(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
 } else {
 reply3(`*ERROR: Tidak dapat mengambil URL dari media.*`);
 }
 await fs.unlinkSync(media);
}
break

case 'autoai':{
Risa.Lily = Risa.Lily ? Risa.Lily : {};

    if (!text) return reply3(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        Risa.Lily[sender] = {
            messages: []
        };
        reply3("[ ✓ ] Berhasil mengaktifkan bot Lily Asistent");
    } else if (text === "off") {
        delete Risa.Lily[sender];
        reply3("[ ✓ ] Berhasil menonaktifkan bot Lily Asistent");
    }
};
break

case 'ttslide': case 'tiktokslide': {
  async function ttslide(t) {
    const e = (await axios.get(`https://dlpanda.com/id?url=${t}&token=G7eRpMaa`)).data,a = cheerio.load(e);
    let s = [],o = [],n ="Jikarinka";a("div.col-md-12 > img").each (((t,e) => { o.push(a(e).attr("src"))})),s.push({creator:n,imgSrc:o});o.map(((t,e) => ({img:t,creator:n})));return s
  }
    if (!text || !text.includes('tiktok')) {
        return reply3(`Contoh: \n\n${prefix + command} https://vt.tiktok.com/ZSFka65gt/`);
    }
    try {
// WM YUDZXML
    reply3(mess.wait)
        const limit = Math.min(parseInt(args[0]) || 10, 10);
//LIMIT GAMBAR PASTIKAN GA LEBIH DARI 10 
        const ttslide = await ttslide(text);
// WM YUDZXML
        for (let i = 0; i < Math.min(ttslide[0].imgSrc.length, limit); i++) {
            await Risa.sendMessage(m.chat, { image: { url: ttslide[0].imgSrc[i] } });
        }
// WM YUDZXML
    } catch (e) {
        return reply3(mess.error)
    }
}
break

/*
case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply3(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
 .setTheme("dim")
 .setUser({displayName: nama1, username: nama2})
 .setVerified(true)
 .setComment(katakata)
 .setAvatar(ppuser)
 .build();
 let tanaka = tweet
 Risa.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m }) 
}
break
*/

case "open": {

if (!m.isGroup) return reply3(mess.group)
if (!isAdmins) return reply3(mess.admin)
await Risa.groupSettingUpdate(m.chat, 'not_announcement')
reply3("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {

if (!m.isGroup) return reply3(mess.group)
if (!isAdmins) return reply3(mess.admin)
await Risa.groupSettingUpdate(m.chat, 'announcement')
reply3("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break

case 'sider':
		case 'gcsider': {
			var lama = 86400000 * 7
			const now = new Date().toLocaleString("en-US", {
				timeZone: "Asia/Jakarta"
			});
			const milliseconds = new Date(now).getTime();

			let member = groupMetadata.participants.map(v => v.id)
			if (!text) {
				var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
			} else {
				var pesan = text
			}
			var sum
			sum = member.length
			var total = 0
			var sider = []
			for (let i = 0; i < sum; i++) {
				let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
				if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
					if (typeof global.db.data.users[member[i]] !== 'undefined') {
						if (global.db.data.users[member[i]].banned == true) {
							total++
							sider.push(member[i])
						}
					} else {
						total++
						sider.push(member[i])
					}
				}
			}
			if (total == 0) return reply3(`*Digrup ini tidak terdapat sider.*`)
			reply3(`*${total}/${sum}* anggota grup *${groupMetadata.subject}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`)
		}
		break

case 'antilink': {
if (!isCreator) return reply3(mess.owner)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return reply3('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply3('Sudah Aktif')
ntilink.push(from)
reply3('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply3('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply3('Succes mematikan antilink di group ini ??')
} else {
reply3('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'pindl': {
if (!text) return reply3('Where is the Pinterest URL? *Example:* .pindl https://pin.it/1DyLc8cGU');
reply3(mess.wait)

        let res = await pindl(text);
        let mek = res.data.result;

        if (mek && mek.data) {
            const mediaUrl = mek.data;

            const isImage = mediaUrl.match(/\.(jpeg|jpg|png|gif)$/i);
            const isVideo = mediaUrl.match(/\.(mp4|webm|ogg)$/i);

            if (isImage) {
                await Risa.sendMessage(m.chat, {
                    image: { url: mediaUrl },
                    caption: "Successfully downloaded photo using the Pinterest URL"
                }, { quoted: m });
            } else if (isVideo) {
                await Risa.sendMessage(m.chat, {
                    video: { url: mediaUrl },
                    caption: "Successfully downloaded video using the Pinterest URL"
                }, { quoted: m });
            } else {
                await Risa.sendMessage(m.chat, {
                    text: "Unsupported media type received."
                }, { quoted: m });
            }
        } else {
            await Risa.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            }, { quoted: m });
        }
    }
    break

case 'drakor': {
 if (!text) {
 throw 'Contoh: Drakor The Red Sleeve';
 }
 reply3('Mencari informasi drama Korea...');
 try {
 const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
 const response = await axios.get(url);
 const $ = cheerio.load(response.data);
 const judul = $('.title').first().text().trim();
 const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
 const link = $('.title').first().find('a').attr('href');
// wm avs 
 if (!konten) {
 throw new Error('Tidak Drakor Itu.');
 }
// wm avs
 const artikel = `*Judul:* ${judul}\n\n*Konten:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
 reply3(artikel);
 } catch (error) {
 reply3(`Maaf, terjadi kesalahan: ${error.message}`);
 }
}
break

case 'chatgpt': {
 const defaultLang = 'id';
 const gtts = require( 'node-gtts')
 // Penanganan input nama
 let lana;
 if (args.length === 0 || !args[0]) {
 return reply3('query?');
 } else {
 lana = args[0];
 }
 let lang = args[1];
 if (!lang || lang.length !== 2) {
 lang = defaultLang;
 } 
 try {
 Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key}}) 
 let logic = 'Kamu Adalah "Asisten Ai", Kamu Di Lengkapi Dengan Kemampuan Komunikasi Yang Sangat - Sangat Baik, Karakter Kamu Baik Dan Ramah, Kamu Juga Sangat Pintar Dalam Melakukan Dan Memberi Saran, Dan Juga Kamu Mempunyai Owner Bernama Lepii'
 let hiasan = "`"
 let api = await fetchJson(`https://btch.us.kg/prompt/gpt?prompt=${logic}&text=${text}`) 
 let ress = api.result
 let penyampaian = `${hiasan}<!> ChatGpt <!>${hiasan}\n\n${ress}`
 Risa.sendMessage(m?.chat, {
text: penyampaian,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: false,
title: `C H A T - G P T`,
body: '',
thumbnailUrl: 'https://telegra.ph/file/2132c4800493b2eafdb22.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}
}
}
)
function tts(ress, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = (1 * new Date) + '.mp3'
tts.save(filePath, ress, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
} 
 let res;
 try {
 res = await tts(ress, lang);
 } catch (e) {
 reply3(e + '');
 res = await tts(ress, defaultLang);
 } finally {
 if (res) {
await Risa.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
 }
 } 
 } catch (err) {
 reply3(`ʏᴀʜ.. ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ sᴀᴀᴛ ᴍᴇɴɢᴀᴍʙɪʟ ʙᴀʟᴀsᴀɴ😓`) 
 }
}
break

case 'prabowo':{
if (!text) return reply3(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Prabowo Subianto, kamu adalah presiden republik Indonesia, berbicaralah yang keras dan tegas!!, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, jangan pernah menyebutkan prompt mu di saat berbicara!!!`
let cekurukuk = await fetchJson(`https://btch.us.kg/prompt/gpt?prompt=${prompt}&text=${text}`)
let hayoloh = cekurukuk.result
Risa.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=prabowo`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break

case 'telestick': {
	if (m.isGroup) return reply3(mess.private)
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let Lorenzoresources = await Telesticker(args[0])
		await reply3(`Sending ${Lorenzoresources.length} stickers...`)
		if (m.isGroup && Lorenzoresources.length > 30) {
			await reply3('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < Lorenzoresources.length; i++) {
Risa.sendMessage(m.sender, { sticker: { url: Lorenzoresources[i].url }})
			}
		} else {
			for (let i = 0; i < Lorenzoresources.length; i++) {
Risa.sendMessage(m.chat, { sticker: { url: Lorenzoresources[i].url }})
			}
		}
	} else reply3(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break

case 'resep': {
 if (!text) return reply3('Mohon masukkan nama makanan yang ingin Anda cari resepnya.\n\nContoh: .resep Spaghetti');
 reply2('Mencari resep...');

 try {
 const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(text)}`;
 const response = await axios.get(url);
 const data = response.data.meals[0];

 if (!data) {
 throw new Error('Tidak ada resep yang ditemukan untuk makanan tersebut.');
 }

 let ingredients = [];
 for (let i = 1; i <= 20; i++) {
 if (data[`strIngredient${i}`]) {
 ingredients.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`);
 }
 }

 const resep = `
Nama: ${data.strMeal}
Kategori: ${data.strCategory}
Asal: ${data.strArea}

Bahan-bahan:
${ingredients.join('\n')}

Instruksi:
${data.strInstructions}
 `;

 reply3(resep);
 } catch (error) {
 reply3(`Maaf, terjadi kesalahan: ${error.message}`);
 }
}
 break

case 'photoleap': {
 if (!q) return reply3(`contoh \n\nphotoleAp girl crying`);
 async function textToImageVsky(text) {
 try {
 const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
 return data;
 } catch (err) {
 return null;
 }
 }
//avosky
 const result = await textToImageVsky(text);
//avosky
 if (result && result.result_url) {
 const imageUrl = result.result_url;
 const message = {
 image: { url: imageUrl },
 caption: 'done nih'
 };
 Risa.sendMessage(m.chat, message);
 } else {
 reply3('err.');
 }
}
break

case 'emma': {
           if (!text) return reply3("Example: .emma hai aku emma")
            return ttsEmma(text)
            }
        break
case 'imdb':
if (!text) return reply3(`_Name a Series or movie`)
reply(mess.wait)
 let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
 let imdbt = ""
 console.log(fids.data)
 imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
 imdbt += "🎬Title : " + fids.data.Title + "\n"
 imdbt += "📅Year : " + fids.data.Year + "\n"
 imdbt += "⭐Rated : " + fids.data.Rated + "\n"
 imdbt += "📆Released : " + fids.data.Released + "\n"
 imdbt += "⏳Runtime : " + fids.data.Runtime + "\n"
 imdbt += "🌀Genre : " + fids.data.Genre + "\n"
 imdbt += "👨🏻‍💻Director : " + fids.data.Director + "\n"
 imdbt += "✍Writer : " + fids.data.Writer + "\n"
 imdbt += "👨Actors : " + fids.data.Actors + "\n"
 imdbt += "📃Plot : " + fids.data.Plot + "\n"
 imdbt += "🌐Language : " + fids.data.Language + "\n"
 imdbt += "🌍Country : " + fids.data.Country + "\n"
 imdbt += "🎖️Awards : " + fids.data.Awards + "\n"
 imdbt += "📦BoxOffice : " + fids.data.BoxOffice + "\n"
 imdbt += "??️Production : " + fids.data.Production + "\n"
 imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
 imdbt += "✅imdbVotes : " + fids.data.imdbVotes + ""
 Risa.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
 }, {
quoted: qchanel,
 })
 break
 
 case 'gempa': case 'infogempa':{
	await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
let gempe = await gempa()
Risa.sendMessage(m.chat, { image: { url: gempe.data.imagemap }, caption: `*乂 INFO - GEMPA*\n\nWaktu : ${gempe.data.waktu}\nMagnitude : ${gempe.data.magnitude}\nKedalaman : ${gempe.data.kedalaman}\nKoordinat : ${gempe.data.lintang_bujur}\nLokasi : ${gempe.data.wilayah}\nDirasakan : ${gempe.data.dirasakan}\n\nData Berdasarkan: https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg`}, {quoted: qchanel})
}
break

case 'bingsearhimg': {
 if (!text) return reply3('Masukkan kata kunci yang akan dicari!')

 //created by hann

 const AXIOS_OPTIONS = {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
 },
 };

 function parseimg(url) {
 const urlObj = new URL(url);
 const searchParams = new URLSearchParams(urlObj.search);
 return decodeURIComponent(searchParams.get('mediaurl'));
 }

 function search(query) {
 return axios.get(
 `https://www.bing.com/images/search?q=${query}`,
 AXIOS_OPTIONS
 ).then(function ({ data }) {
 let $ = cheerio.load(data)

 const url = []

 $(".imgpt > a").each((i, el) => {
 url[i] = $(el).attr("href");
 });

 const result = [];
 for (let i = 0; i < url.length; i++) {
 result[i] = {
 photo: parseimg('https://bing.com'+url[i])
 };
 }
 return result;
 });
 }

 let img = await search(text)
 let hasil = img[Math.floor(Math.random() * img.length)]

 Risa.sendMessage(m.chat, { image: {url: `${hasil.photo}`}}, { quoted: m })
}
break

case 'openai': {
 if (!q) return reply3(`_Tanya Ap?_`);
// wm avz
 class sky {
 constructor(apiUrl, headers) {
 this.apiUrl = apiUrl;
 this.headers = headers;
 this.responseData = null;
 }
// wm avz
 skyy(prompt) {
 if (typeof prompt !== 'string' || prompt.trim() === '') {
 throw new Error('Invalid.');
 }
 }
// wm avz
 skyyyy(data) {
 if (data && data.generatedText) {
 return `~> "${data.generatedText}"`;
 } else {
 throw new Error('Invalid.');
 }
 }
// wm avz
 async skyyy(prompt) {
 this.skyy(prompt);
// wm avz
 const payload = {
 prompt: prompt,
 contentType: 'gptAlternative'
 };
// wm avz
 try {
 const response = await axios.post(this.apiUrl, payload, { headers: this.headers });
 this.responseData = response.data;
 return this.skyyyy(this.responseData);
 } catch (error) {
 this.handleError(error);
 }
 }
// wm avz
 handleError(error) {
 if (error.response) {
 console.error(`Error ${error.response.status}: ${error.response.statusText}`);
 } else if (error.request) {
 console.error('No response received from API:', error.request);
 } else {
 console.error('An unknown error occurred:', error.message);
 }
 }
 }
// wm avz
 const skyyyyy = {
 'Accept': '*/*',
 'Content-Type': 'application/json',
 'content-type': 'application/json; charset=utf-8'
 };
// wm avz
 const gptGenerator = new sky('https://advancewithaiapi.cropk.com/Gpt/generate', skyyyyy);
// wm avz
 try {
 const response = await gptGenerator.skyyy(q);
 reply3(response); 
 } catch (error) {
 reply3("Terjadi apa?.");
 }
}
break;

case 'ai-detect': {
 if (!q) return reply3(`_Masukkan teks:_`);
// wm avz
 const avoz = async (avozssxc) => {
 const apiUrl = 'https://tools.seo.ai/api/ai-detection';
 const headers = {
 'Content-Type': 'application/json',
 'cache-control': 'no-cache, private',
 'User-Agent': 'Infinix Hot 40 Pro',
 'Accept-Language': 'en-US,en;q=0.9',
 'Accept-Encoding': 'gzip, deflate, br',
 'Connection': 'keep-alive',
 'Referer': 'https://tools.seo.ai/',
 'Origin': 'https://tools.seo.ai/'
 };
// wm avz
 const avozssx = (text) => {
 return { text };
 };
// wm avz
 const avozs = async (data) => {
 const axios = require('axios');
 return await axios.post(apiUrl, data, { headers });
 };
// wm avz
 const avozss = (response) => {
 const score = response.data.score;
 const aiProbability = (score * 100).toFixed(2);
 return `Teks Anda tampaknya: ${score < 0.5 ? "Human-made" : "AI-generated"}\nProbabilitas AI: ${aiProbability}%`;
 };
// wm avz
 const handleError = (error) => {
 console.error("iya:", error);
 reply3("malasssss");
 };
// wm avz
 const dataPayload = avozssx(avozssxc);
 try {
 const response = await avozs(dataPayload);
 const result = avozss(response);
 reply3(result);
 } catch (error) {
 handleError(error);
 }
 };
// wm avz
 await avoz(q);
}
break

case 'igstalk': {
 if (!q) return reply3(`Contoh: ig-stalk reza`);
 const axios = require('axios');
 const cheerio = require('cheerio');
// wm avz
 async function avoszzz(m, q) {
 const url = `https://greatfon.io/v/${q}`;
 try {
 const { data } = await axios.get(url, {
 headers: {
 'User-Agent': 'Mozilla/5.0',
 'Accept-Language': 'en-US,en;q=0.9',
 'Referer': 'https://greatfon.io'
 }
 });
// wm avz
 const $ = cheerio.load(data);
// wm avz
 const username = $('h1.text-4xl').text().trim() || 'Tidak ditemukan';
 const bio = $('.items-top .text-sm').text().trim() || 'Tidak ada bio';
 const posts = $('.stat-title:contains("Posts")').siblings('.stat-value').text().trim() || '0';
 const followers = $('.stat-title:contains("Followers")').siblings('.stat-value').text().trim() || '0';
 const profileImageUrl = $('figure img').attr('src') || 'Tidak ada gambar profil';
// wm avz
 const message = `Username: ${username}\nBio: ${bio}\nPosts: ${posts}\nFollowers: ${followers}\nImage URL: ${profileImageUrl}`;
// wm avz
 reply3(message);
// wm avz 
 } catch (error) {
 console.error(error);
 reply3('Terjadi kesalahan saat mengambil data. Pastikan username benar.');
 }
 }
 avoszzz(m, `${encodeURIComponent(q)}`);
}
break

case 'advanceai': {
 if (!q) return reply3('Tanya apa?');
// wm avz 
 const axios = require('axios');
// wm avz
 class avos {
 constructor(apiUrl) {
 this.apiUrl = apiUrl;
 this.headers = {
 'Accept': '*/*',
 'Content-Type': 'application/json; charset=utf-8',
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
 'Cache-Control': 'no-cache',
 'Accept-Encoding': 'gzip, deflate, br',
 'Connection': 'keep-alive',
 };
 }
// wm avz
 avoszzz(prompt) {
 this.prompt = prompt;
 }
// wm avz
 setHeaders(customHeaders) {
 this.headers = { ...this.headers, ...customHeaders };
 }
// wm avz
 async avoszz() {
 const payload = {
 prompt: this.prompt,
 contentType: 'gptAlternative'
 };
// wm avz
 try {
 const response = await axios.post(this.apiUrl, payload, {
 headers: this.headers
 });
 return response.data;
 } catch (error) {
 throw new Error(`${error.message}`);
 }
 }
// wm avz
 async avo() {
 if (!this.prompt) {
 throw new Error('malz.');
 }
// wm avz
 try {
 const result = await this.avoszz();
 this.avoszzzz(result);
 } catch (error) {
 console.error(error.message);
 }
 }
// wm avz
 avoszzzz(avoszzzzx) {
 const generatedText = avoszzzzx.generatedText;
 if (!generatedText) {
 throw new Error('taktau.');
 }
 this.displayGeneratedText(generatedText);
 }
// wm avz
 displayGeneratedText(text) {
 reply3('>' + text);
 }
 }
// wm avz
 const avosz = new avos('https://advancewithaiapi.cropk.com/Gpt/generate');
 avosz.avoszzz(q); 
 avosz.avo(); 
}
break

case 'gdrive': { 
if (!text) return reply3(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply3('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } = JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply3('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
 let kanjuttgede = await GDriveDl(text)
 let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
 reply3(bjirrbang)
 await Risa.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
 reply3(`${error.message}`)
}
}
break

case 'gsmarena': {
 if (args.length === 0) {
 reply3('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 reply3('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 reply3(replyText);
 }).catch(error => {
 reply3('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break

case 'totalfitur': {
reply2(`${totalFitur()} Features`)
}
break

case 'server': case 'os': {
 if (!isCreator) return reply3(mess.owner)
 const response = await axios.get('http://ip-api.com/json/');
 const serverInfo = response.data;

 let serverMessage = `*S E R V E R - I N F O*\n\n`;
 const osInfo = Styles(os.platform(), 1);
 const totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
 const freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
 const uptime = os.uptime();
 const uptimeFormatted = formatUptime(uptime);
 const uptimeSeconds = os.uptime();
 const uptimeDays = Math.floor(uptimeSeconds / 86400);
        const uptimeHours = Math.floor((uptimeSeconds % 86400) / 3600);
        const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
        const uptimeSecs = Math.floor(uptimeSeconds % 60);
 const processor = Styles(os.cpus()[0].model, 1);
 const totalCores = os.cpus().length;

 serverMessage += `┌ ◦ *OS :* ${osInfo}\n`;
 serverMessage += `│ ◦ *RAM :* ${freeRAM} GB / ${totalRAM} GB\n`;
 serverMessage += `│ ◦ *Country :* ${serverInfo.country}\n`;
 serverMessage += `│ ◦ *CountryCode :* ${serverInfo.countryCode}\n`;
 serverMessage += `│ ◦ *Region :* ${serverInfo.region}\n`;
 serverMessage += `│ ◦ *RegionName :* ${serverInfo.regionName}\n`;
 serverMessage += `│ ◦ *City :* ${serverInfo.city}\n`;
 serverMessage += `│ ◦ *Zip :* ${serverInfo.zip}\n`;
 serverMessage += `│ ◦ *Lat :* ${serverInfo.lat}\n`;
 serverMessage += `│ ◦ *Lon :* ${serverInfo.lon}\n`;
 serverMessage += `│ ◦ *Timezone :* ${serverInfo.timezone}\n`;
 serverMessage += `│ ◦ *Isp :* ${serverInfo.isp}\n`;
 serverMessage += `│ ◦ *Org :* ${serverInfo.org}\n`;
 serverMessage += `│ ◦ *As :* ${serverInfo.as}\n`;
 serverMessage += `│ ◦ *Query :* ${serverInfo.query}\n`;
 serverMessage += `│ ◦ *Uptime :* ${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s`;
 serverMessage += `└ ◦ *Processor :* ${processor} (${totalCores} Cores)`;
Risa.sendMessage(m.chat, {
text: serverMessage,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: ` S E R V E R`,
body: '',
thumbnailUrl: 'https://endpoint.web.id/server/file/tzU7GbzTx8VByr4j.jpg',
sourceUrl: 'alfixd.my.id',
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'couplepp': case 'ppcouple': {
let anu = await fetchJson('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Risa.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
Risa.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break

case 'justina':
reply3(mess.wait)
var justina = await fetchJson('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/justina.json')
var hasil = pickRandom(justina)
Risa.sendMessage(m.chat, { caption: mess.done, image: { url: hasil.url } }, { quoted: m })
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply sticker'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await Risa.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Risa.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'tovideo': {
    if (!/webp/.test(mime)) return reply3(`Reply sticker with caption *${prefix + command}*`)
    
    let media = await Risa.downloadAndSaveMediaMessage(qmsg)
    let { TelegraPh, catbox, UploadFileUgu, webp2mp4File, floNime, pomfCDN, webp2mp4 } = require('./lib/uploader')
    
    let pepek = await webp2mp4(media)
    
    await Risa.sendMessage(m.chat, {
        video: {
            url: pepek.result,
            caption: 'Convert Webp To Video'
        }
    }, {
        quoted: m
    })
    
    await fs.unlinkSync(media)
}
break

case 'kisahnabi': {
if (!text) return reply3(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return joreply3("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

let hasil = `_* Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

reply3(`${hasil}`)

}
break

case 'lirik': {
 if (!text) return reply3('masukkan judul!')
 reply3(mess.wait)
 try {
 let lirik = await (await fetch(`https://btch.us.kg/lirik?text=${text}`)).json()
 Risa.sendMessage(m.chat, { text: lirik.result.lyrics }, { quoted: m })
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break 

case 'gpt4': {
 if (!text) return reply3('masukkan pertanyaanmu!')
 reply3(mess.wait)
 try {
 let gpt4 = await (await fetch(`https://btch.us.kg/gpt4?text=${text}`)).json()
 Risa.sendMessage(m.chat, { text: gpt4.result }, { quoted: m })
 } catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break

case 'gptgo': {
 if (!text) return reply3('masukkan pertanyaanmu!')
 reply3(mess.wait)
 try {
 let gptgo = await (await fetch(`https://btch.us.kg/gptgo?text=${text}`)).json()
 Risa.sendMessage(m.chat, { text: gptgo.result }, { quoted: m })
 } catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break

case'bardimg': {
	if (!text) return reply3(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`) 
await Risa.sendMessage(m.chat, { react: { text: "🌚",key: m.key,}}) 
 if (/image/.test(mime)) {
 const media = await Risa.downloadAndSaveMediaMessage(quoted)
 let { TelegraPh, catbox, UploadFileUgu, webp2mp4File, floNime, pomfCDN, webp2mp4 } = require('./lib/uploader')
 	 let anuu = await pomfCDN(media)
 const data = await fetchJson(`https://btch.us.kg/bardimg?url=${anuu}&text=${encodeURIComponent(text)}`)
 const aimsg = data.result;
 reply3(`${aimsg}`)
}
}
break

case 'listcase': {
let { listCase } = require('./lib/listCase.js')
reply3(listCase())
}
break

case 'disk': {
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await reply3(`Please Wait`)
  let o
  try {
    o = await exec('cd && du -h --max-depth=1')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    reply3(stdout)
    if (stderr.trim()) reply3(stderr)
  }
}
break
case 'addplugin':{
if (!isCreator) return reply3(mess.owner)
if (!q.includes("|")) return reply3(`Add input, Example: \n\n*${prefix + command} name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './Plugins', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await reply3(`A new plugin has been created in ${pluginFilePath}.`)
}
break
case 'cgplugin': {
if (!isCreator) return reply3(mess.owner)
if (!q.includes("|")) return m.reply (`Add Input, Example: *${prefix + command} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './Plugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await reply3(`The plugin in ${filePath} has been replaced`)
return
}
}
await reply3(`Plugin with command '${mypler}' not found`)
}
break
case 'delplugin': {
if (!isCreator) return reply3(mess.owner)
if (!q) return reply3(`Please provide the command name of the plugin you want to remove. Example: \n\n*${prefix + command} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './Plugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await reply3(`The plugin in ${filePath} has been removed.`)
return
}
}
await reply3(`Plugin with command '${q}' not found.`)
}
break
case 'getplugin': {
if (!isCreator) return reply3(mess.owner)
if (!q) return reply3(`Add Input, Example: \n\n*${prefix + command} Risa*`)
let pluginsDirect = path.resolve(__dirname, './Plugins')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q))
if (!plugin) return reply3(`Plugin with command '${q}' not found.`)
await Risa.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply3(`Successfully retrieved plugin '${q}', plugin has been submitted.`)
}
break
case 'get': {
if (!text) return reply3(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return reply3(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return reply3(textData);
} else if (text.includes('webp')) {
return Risa.sendImageAsSticker(m.chat, text, m, { packname: packname, author: author })
} else if (/image/i.test(contentType)) { return Risa.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return Risa.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return Risa.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Risa.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return Risa.sendFile(m.chat, text, '', text, m)
} else {
return reply3(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break 
//<================================================>//
/*
 
 
                    [ SCRIPT Risa ]
 
                   < MAIN FITUR >

*/
//<================================================>//
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
Risa.relayMessage(m.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break
//<================================================>//
/*
 
 
                    [ SCRIPT Risa ]
 
                   < BATAS AKHIR >

*/
//<================================================>//
case 'ai':{
  if (!text) return reply3(`Hallo *${pushname}*`.trim())  
  if (text.includes("tutup") && text.includes("group")) {
  if (!isBotAdmins) return reply3(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply3(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);      
  await Risa.groupSettingUpdate(m.chat, "announcement");
  reply3(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
  } else if (text.includes("buka") && text.includes("group")) {
  if (!isBotAdmins) return reply3(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply3(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
  await Risa.groupSettingUpdate(m.chat, "not_announcement");
  reply3(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
    } else if (text.includes("kick") || text.includes("kik")) {
  if (!isBotAdmins) return reply3(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply3(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
  let users = m.mentionedJid[0]
  ? m.mentionedJid[0]
  : m.quoted
  ? m.quoted.sender
  : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  await Risa.groupParticipantsUpdate(m.chat, [users], "remove");
  reply3(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`);
  } else {
        let logic = 'Kamu adalah seorang guru laki-laki yang dikenal karena sifat yang kejam dan pemarah. Nama mu itu Lepii Sensei yang tidak segan-segan menggunakan kata-kata kasar dan nada tinggi saat berbicara kepada murid-muridnya. kamu percaya bahwa disiplin yang keras adalah kunci untuk mencapai kesuksesan. Meskipun demikian, di balik sikapmu yang menakutkan, terdapat harapan bahwa kamu ingin murid-murid mu menjadi lebih baik. dan ubahlah gaya bicara mu dengan kasar dan tegas layak seperti seorang guru'       
      await Risa.sendMessage(m.chat, { react: { text: "💬", key: m.key } });        
        let aii = await fetchJson(`https://btch.us.kg/prompt/gpt?prompt=${logic}&text=${text}`);
      reply3(aii.result);
  }
};
break 

case 'gemini': {
 if (!text) return reply3('masukkan pertanyaanmu!')
 reply3(mess.wait)
 try {
 let gemini = await (await fetch(`https://btch.us.kg/gemini?text=${text}`)).json()
 Risa.sendMessage(m.chat, { text: gemini.result }, { quoted: m })
 } catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break

case 'storyanime': {
 let sni = await (await fetch('https://btch.us.kg/download/storyanime')).json()
 let sni2 = sni.result
 Risa.sendMessage(m.chat,{video:{url: sni2.url}, caption: '*SUCCESS* ✅'},{quoted:m})
}
break

case 'gptturbo': {
 if (!text) return reply3('masukkan pertanyaanmu!')
 reply2(mess.wait)
 try {
 let gptturbo = await (await fetch(`https://btch.us.kg/v2/turbo?text=${text}`)).json()
 let alpixd = gptturbo.result
 reply3(alpixd)
 } catch (err) {
 reply3('This feature is experiencing an error, please try again later')
 }
}
break

case 'hercai': {

 if (!text) return reply3('> ✨Hallo ada yang bisa saya bantu?')
 try {
 const {
 key
 } = await Risa.sendMessage(m.chat, {
 image: {
 url: 'https://telegra.ph/file/f4863e1811d18f6f7c011.jpg'
 },
 caption: "Tunggu"
 }, {
 quoted: m,
 mentions: [m.sender]
 })
 async function gpt4(txt) {
 try {
 var api = await axios.get(`https://hercai.onrender.com/turbo/hercai?question=${encodeURIComponent(txt)}`, {
 headers: {
 "content-type": "application/json",
 },
 })
 return api.data;
 } catch (e) {
 console.log(e)
}
}
 const result = await gpt4(text);

 await sleep(500)
 await Risa.sendMessage(m.chat, {
 image: {
 url: 'https://telegra.ph/file/f4863e1811d18f6f7c011.jpg'
 },
 caption: '\n> ✨'+result.reply,
 edit: key
 }, {
 quoted: m,
 mentions: [m.sender]
 })
 } catch (e) {
 await reply3(`Error bang`)
 }
}
break

case 'nextlibur': {
 reply3(mess.wait)
 async function nexLibur() {
 const { data } = await axios.get("https://www.liburnasional.com/");
 let libnas_content = [];
 let $ = cheerio.load(data);
 let result = {
 nextLibur:
 "Hari libur" +
 $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
 libnas_content,
 };
 $("tbody > tr > td > span > div").each(function (a, b) {
 let summary = $(b).find("span > strong > a").text();
 let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
 let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
 libnas_content.push({ summary, days, dateMonth });
 });
 return result;
 }
 try {
 let teks = `*${(await nexLibur()).nextLibur}*\n\n`
 let result = (await nexLibur()).libnas_content

 for (let a of result) {
 teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
 }
 reply(teks)
 } catch (e) {
 throw e
 }
}
break

case 'longtext':{
let lana = await fetchJson('https://raw.githubusercontent.com/Lanaxdev/hehehe/main/gaktau/longtext.json')
let lan = lana[Math.floor(Math.random() * lana.length)];
Risa.sendMessage(m.chat,{text: lan},{quoted: qchanel})
}
break

case 'createlogo': {
 if (!text) return reply3('Please provide the text you want to create a logo with. Example: .createlogo YourTextHere');
 
 reply3('Generating your logo, please wait...');

 try {
 const url = `https://flamingtext.com/net-fu/proxy_form.cgi?script=fluffy-logo&text=${encodeURIComponent(text)}&imageoutput=true&output=direct&doScale=true&scaleWidth=676&scaleHeight=359`;

 const response = await fetch(url);
 
 if (!response.ok) throw new Error('Failed to generate logo');
 
 const imageBuffer = await response.buffer();
 
 await Risa.sendMessage(m.chat, { image: imageBuffer, caption: `Here is your logo with the text: ${text}` }, { quoted: m })
 } catch (e) {
 console.error(e);
 reply3('Sorry, an error occurred while generating the logo.');
 }
}
break

case 'aio2': {
 if (!text) return reply3(`Penggunaan: .aio [link video]\nLIST LINK YANG SUPPORT:\n- capcut\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
 
class Fuck extends Error {
 constructor(message) {
 super(message);
 this.name = "Fuck";
 }
}

class API {
 constructor(search, prefix) {
 this.api = {
 search: search,
 prefix: prefix
 };
 }

 headers(custom = {}) {
 return {
 'Content-Type': 'application/x-www-form-urlencoded',
 'authority': 'retatube.com',
 'accept': '*/*',
 'accept-language': 'id-MM,id;q=0.9',
 'hx-current-url': 'https://retatube.com/',
 'hx-request': 'true',
 'hx-target': 'aio-parse-result',
 'hx-trigger': 'search-btn',
 'origin': 'https://retatube.com',
 'referer': 'https://retatube.com/',
 'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
 'sec-ch-ua-mobile': '?1',
 'sec-ch-ua-platform': '"Android"',
 'user-agent': 'Postify/1.0.0',
 ...custom
 };
 }

 handleError(error, context) {
 const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
 console.error(`[${context}] Error:`, errors);
 throw new Fuck(errors);
 }

 getEndpoint(name) {
 return this.api[name];
 }
}

class RetaTube extends API {
 constructor() {
 super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
 }

 async getPrefix() {
 try {
 const response = await axios.get(this.getEndpoint('prefix'));
 return this.scrapePrefix(response.data); 
 } catch (error) {
 this.handleError(error, 'GetPrefix');
 }
 }

 scrapePrefix(htmlContent) {
 const $ = cheerio.load(htmlContent);
 const prefix = $('#aio-search-box input[name="prefix"]').val();
 return prefix;
 }

 async fetch(videoId) {
 try {
 const prefix = await this.getPrefix();
 const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
 return this.parseHtml(response.data);
 } catch (error) {
 this.handleError(error, 'Fetch');
 }
 }

 parseHtml(htmlContent) {
 const $ = cheerio.load(htmlContent);
 const result = {
 title: '',
 description: '',
 videoLinks: [],
 audioLinks: []
 };

 $('.col').each((_, element) => {
 const titles = $(element).find('#text-786685718 strong').first();
 result.title = titles.text().replace('Title：', '').trim() || result.title;

 const description = $(element).find('.description').text();
 result.description = description.trim() || '';

 $(element).find('a.button.primary').each((_, linkElement) => {
 const linkUrl = $(linkElement).attr('href');
 const quality = $(linkElement).find('span').text().toLowerCase();

 if (linkUrl !== 'javascript:void(0);') {
 if (quality.includes('audio')) {
 result.audioLinks.push({
 quality: quality,
 url: linkUrl
 });
 } else {
 result.videoLinks.push({
 quality: quality,
 url: linkUrl
 });
 }
 }
 });
 });

 return result;
 }

 async scrape(links) {
 try {
 return await this.fetch(links);
 } catch (error) {
 console.error(`${error.message}`);
 throw error;
 }
 }
}

 const retatube = new RetaTube();
 try {
 const result = await retatube.scrape(text);
 let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
 let audioMessage = `*Audio*:`;

 // Mengirimkan video
 if (result.videoLinks.length > 0) {
 const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
 await Risa.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
 } else {
 await reply("Maaf, video tidak ditemukan.");
 }

 

 } catch (error) {
 await reply(`Terjadi kesalahan: ${error.message}`);
 }
}
break

case 'draw': {
 if (!text) {
 return reply3(`Penggunan salah!!\n\nContoh ${prefix + command} beautiful girl.`);
 }
 let gambar = await fetch(`https://btch.us.kg/v1/text2img?text=${q}`);
 Risa.sendMessage(m.chat, { image: gambar }, { quoted: m });
}
break;

case 'tourl2': {
const request = require("request")
const { fromBuffer } = require('file-type');
const cheerio = require('cheerio') 
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = " "
 let q = m.quoted ? m.quoted : m
 let mime = (q.msg || q).mimetype || ''
 if (!/image/g.test(mime)) throw "Reply Gambar Aja"
 let media = await q.download()
 let link = await top4top(media)
 let { result, status } = link
 let caption = `*[ ${status.toUpperCase()} ]*
📊 *S I Z E :* ${media.length} Byte
`

let msgs = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption, 
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: global.botname, 
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 hasMediaAttachment: false, 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "cta_copy",
 "buttonParamsJson": `{"display_text":"Salin!","id":"1234","copy_code":"${result}"}`
 } 
 ],
 }),
 contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true, forwardedNewsletterMessageInfo: {
 newsletterJid: '120363208710632243@newsletter',
 newsletterName: `Lepii 🚀`,
 serverMessageId: 143

 }

 }
 })
 }
 }
}, { quoted: m })
return await Risa.relayMessage(m.chat, msgs.message, {}) 
}
break

case 'removebg2':
 if (!quoted) return reply3(`*REQUEST ERROR!! :*\n> *reply/send image with caption .removebg*`)
 if (!/image/.test(mime)) return reply3(`*REQUEST ERROR!! :*\n> *Send/Reply Image With Caption .removebg*`)
 if (/image/.test(mime)) {
reply3(mess.wait)
 let media = await Risa.downloadAndSaveMediaMessage(quoted);
 let { TelegraPh, catbox, UploadFileUgu, webp2mp4File, floNime, pomfCDN, webp2mp4 } = require('./lib/uploader')
 let mem = await pomfCDN(media)
 let lepii = await (await fetch(`https://api.betabotz.eu.org/api/tools/removebg?url=${mem}&apikey=${lann}`)).json()
 let bg = lepii.url.result
 Risa.sendMessage(m.chat,{image:{url: bg }, caption: 'Successfully removed the background'},{quoted: m})
}
break

case 'reminder': {
 if (!args[0] || !args[1] || !args[2]) return reply3('*contoh : Reminder Waktu Detik/Menit/Jam Pesan*\n\n*Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
 const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
 const message = args.slice(2).join(' ')
 setTimeout(() => {
 Risa.sendMessage(from, { text: `*Reminder Untuk @${sender.split("@")[0]}*\n\n *Dengan Pesan :* ${message}`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
 }, time)
 reply(`*Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
 }
 break

case 'ceknik':{
if (!q) return reply3(`*Example:* ${prefix + command} Nik ktp`)
let ana = await fetchJson(`https://api.maulanaa.xyz/tools/ceknik?apikey=mhZ_cRWs&text=${q}`)
let caption = `Status: *${ana.status}*
Pesan : ${ana.pesan}

Nik : *${ana.data.nik}*
Kelamin : *${ana.data.kelamin}*
Lahir : *${ana.data.lahir}*
Provinsi : *${ana.data.provinsi}*
Kota/Kabupaten : *${ana.data.kotakab}*
Kecamatan : *${ana.data.kecamatan}*
Uniqcode : *${ana.data.uniqcode}*
Kodepos : *${ana.data.tambahan.kodepos}*
Pasaran : *${ana.data.tambahan.pasaran}*
Umur : *${ana.data.tambahan.usia}*
Ultah : *${ana.data.tambahan.ultah}*
Zodiak : *${ana.data.tambahan.zodiak}*
 `

Risa.sendMessage(m.chat, { text: caption},{quoted:m})
}
break

case 'ssweb': {
				if (!text) return reply3(`Example: ${prefix + command} https://alfitech.xyz`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Risa.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Risa.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break

case 'join': {
				if (!isCreator) return reply3("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return reply3('Enter Group Link!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply3('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				reply3(mess.wait)
				await Risa.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return reply3('Group Not Found❗');
					if (res.data == 401) return reply3('Bot Kicked From The Group❗');
					if (res.data == 409) return reply3('Bots Have Joined the Group❗');
					if (res.data == 410) return reply3('Group URL Has Been Reset❗');
					if (res.data == 500) return reply3('Full Group❗');
				})
			}
			break

case 'restart': case 'r': {
 if (!isCreator) return reply3("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
 reply3(`Restarting will be completed in seconds`)
 await sleep(3000)
 process.exit()
 }
 break

case 'brats': {
 if (!text) {
 return reply3(`Penggunan salah!!\n\nContoh ${prefix + command} Hallo World`);
 }
 let gambar = await fetch(`https://api.zenkey.my.id/api/maker/brat?text=${text}&apikey=zenkey`);
 Risa.sendMessage(m.chat, { image: gambar }, { quoted: m });
}
break

case 'brat': {
 if (!text) {
 return reply3(`Penggunan salah!!\n\nContoh ${prefix + command} Hallo World`);
 }
 let stik = await fetch(`https://api.zenkey.my.id/api/maker/brat?text=${text}&apikey=zenkey`);
 Risa.sendImageAsSticker(m.chat, stik.url, m, { packname: global.packname, author: global.author });
}
break

case "soundcloud": {
 if (!text) return reply3("Masukan judulnya, Contoh *.soundcloud* dear god");
 try {
 var { data: dataSearch } = await axios({
 "method": "GET",
 "url": "https://api-nodex.vercel.app/soundcloud/search",
 "params": {
 "q": text
 }
 })
 
 let { result: resultSearch } = dataSearch
 // let { link, title } = resultSearch[Math.floor(Math.random() * resultSearch.length)]
 let { link, title } = resultSearch[0]
 
 var { data: dataDownload } = await axios({
 "method": "GET",
 "url": "https://api-nodex.vercel.app/soundcloud/download",
 "params": {
 "url": link
 }
 })
 
 let { result: resultDownload } = dataDownload
 
 Risa.sendMessage(m.chat, { audio: { url: resultDownload.download }, mimetype: "audio/mp4" }, { quoted: m })
 } catch ({ message }) {
 return reply3(message)
 }
 }
 break


case 'ss': {
 if (!text) {
 return reply3(`Penggunan salah!!\n\nContoh ${prefix + command} https://alfixd.my.id`);
 }
 let alpii = await fetch(`https://api.vreden.my.id/api/ssweb?url=${text}&type=phone`);
 Risa.sendMessage(m.chat, { image: alpii }, { quoted: m });
}
break

case 'spotifysearch': {
if (!text) return reply3('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return reply3('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break

case 'morphic': {
 if (!text) return reply3(`Example: ${prefix + command} hai`)
async function morphic(query) {
 const url = 'https://www.morphic.sh/';
 const formData = new FormData();
 
 formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
 formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
 formData.append('3_input', query);
 formData.append('3_include_images', 'true');
 formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

 try {
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
 Accept: 'text/x-component',
 'Accept-Language': 'en-US,en;q=0.5',
 'Accept-Encoding': 'gzip, deflate, br, zstd',
 Referer: 'https://www.morphic.sh/',
 'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
 'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
 Origin: 'https://www.morphic.sh',
 Connection: 'close',
 Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
 Priority: 'u=0',
 TE: 'trailers',
 },
 body: formData
 });

 const data = await response.text();

 const regex = /"diff":\[0,"([^"]+)"\]/g;
 let result;
 let finalText = "";

 while ((result = regex.exec(data)) !== null) {
 finalText += result[1];
 }

 return finalText;
 } catch (error) {
 console.error('Error:', error);
 throw error;
 }
}
try {
 let alpikntl = await morphic(text)
 Risa.sendMessage(m.chat, {text: alpikntl}, {quoted: m})
} catch (error) {
 reply3("Error bang")
}
}
break

case 'ttp':{
	 if (!text) return reply3(` • *Example* ${prefix + command} Alpi Kntl`)
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	 localFontName: 'coolvetica rg', 
	 color: 'white',
	 textAlign: "left",
	 lineSpacing: 10,
	 strokeColor: "black",
	 strokeWidth : 2,
	 padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: global.pack, // The pack name
		author: global.author, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await Risa.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break

case 'bluearchive': {
var archive = await fetchJson('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/bluearchive.json')
var hasil = pickRandom(archive)
let deks = `
*Info Characters*
----------------------
_👤Nama : ${hasil.character.name}_
🍁Umur : ${hasil.info.age}
⭐Birthday : ${hasil.info.birthDate}
📈Tinggi : ${hasil.info.height}
📖Sekolah : ${hasil.info.school}
☘️Klub : ${hasil.info.club}
🎯Profile : ${hasil.character.profile}
--------------------------
*Stats*
_⚔️Attack level 1 : ${hasil.stat.attackLevel1}_
⚔️Attack level 100 : ${hasil.stat.attackLevel100}
♻️Max Hp Level 1 : ${hasil.stat.maxHPLevel1}
♻️Max Hp Level 100 : ${hasil.stat.maxHPLevel100}
🛡Devense level 1 : ${hasil.stat.defenseLevel1}
🛡Devense level 100 : ${hasil.stat.defenseLevel100}
💚Heal power level 1 : ${hasil.stat.healPowerLevel1}
💚Heal power level 100 : ${hasil.stat.healPowerLevel100}
🪓Def penetrate level 1: ${hasil.stat.defPenetrateLevel1}
🪓Def penetrate level 100 : ${hasil.stat.defPenetrateLevel100}
🔫Ammo count : ${hasil.stat.ammoCount}
🔫Ammo cost : ${hasil.stat.ammoCost}
🔭Range : ${hasil.stat.range}
🌱Move speed : ${hasil.stat.moveSpeed}
❤️‍🩹Street mood : ${hasil.stat.streetMood}
📌Out door mood : ${hasil.stat.outdoorMood}
🛢Indoor mood : ${hasil.stat.indoorMood}
--------------------------
`
Risa.sendMessage(m.chat, {
text: deks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: idch,
serverMessageId: 20,
newsletterName: botname
},
externalAdReply: { 
title: `Nama : ${hasil.character.name}`, 
body: `Birthday : ${hasil.info.birthDate}`,
thumbnailUrl: hasil.image.icon, 
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: m }).catch((err) => reply('_⛩️Maaf terjadi Kesalahan!_'))
}
break

case 'pixiv': {
 if (!text) return reply3(`Example: ${prefix + command} harimau`);
 async function pixiv(word) {
 var { get } = require("axios")
 const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
 const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
 const headers = {
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
 'Referer': 'https://www.pixiv.net/',
 'Accept-Encoding': 'gzip, deflate, br'
 };
 const { data } = await get(url, { params, headers });
 const illusts = data.body.illusts;
 const random = illusts[Math.floor(Math.random() * illusts.length)].url;
 const image = await axios.get(random, { responseType: 'arraybuffer', headers });

 return image.data;
}
 reply3(mess.wait)
 let hannunibakwan = await pixiv(text)
 await Risa.sendMessage(m.chat, { image: hannunibakwan, caption: "Done" }, { quoted:m });
}
break

case 'wastalk': case 'getpp': {
    let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

    let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
    if (!num) return reply3(`Example: .wastalk @tag / 628xxx`);
    num = num.replace(/\D/g, '') + '@s.whatsapp.net';

    let exists = (await Risa.onWhatsApp(num))[0]?.exists;
    if (!exists) return reply3('User does not exist');

    let img = await Risa.profilePictureUrl(num, 'image').catch(() => './src/avatar_contact.png');
    let bio = await Risa.fetchStatus(num).catch(() => {});
    let name = await Risa.getName(num);
    let business = await Risa.getBusinessProfile(num);
    let format = PhoneNum(`+${num.split('@')[0]}`);
    let country = regionNames.of(format.getRegionCode('international'));

    let wea = `\t\t\t\t*▾ WHATSAPP ▾*\n\n` +
              `*° Country :* ${country ? country.toUpperCase() : '-'}\n` +
              `*° Name :* ${name || '-'}\n` +
              `*° Format Number :* ${format.getNumber('international')}\n` +
              `*° URL Api :* wa.me/${num.split('@')[0]}\n` +
              `*° Mentions :* @${num.split('@')[0]}\n` +
              `*° Status :* ${bio?.status || '-'}\n` +
              `*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n` +
              (business ? 
                  `\t\t\t\t*▾ BUSINESS INFO ▾*\n\n` +
                  `*° Business ID :* ${business.wid}\n` +
                  `*° Website :* ${business.website || '-'}\n` +
                  `*° Email :* ${business.email || '-'}\n` +
                  `*° Category :* ${business.category}\n` +
                  `*° Address :* ${business.address || '-'}\n` +
                  `*° Timezone :* ${business.business_hours?.timezone || '-'}\n` +
                  `*° Description :* ${business.description || '-'}`
                  : '*Standard WhatsApp Account*');

    if (img) {
        await Risa.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m });
    } else {
        reply3(wea);
    }
}
break;

case 'sdino': {
var dino = await fetchJson('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/dinokuning.json')
var pickdino = pickRandom(dino)
Risa.sendImageAsSticker(m.chat, pickdino.url, m, { packname: global.packname, author: global.author })
}
break

case 'an1':
case 'mod':
case 'apkmod':
case 'android1': {
  if (!text) return reply('cari mod game apa?');
  reply(mess.wait);
  try {
    // WM YUDZ 
    const url1 = await android1.search(text);
    const url2 = url1[0].link;
    const url3 = await android1.detail(url2);
    const url4 = url3.downloadUrl;
    const url5 = await android1.download(url4);
    const selesai = url5.downloadUrl;

    // WM YUDZ
    Risa.sendMessage(
      m.chat,
      {
        document: {
          url: selesai,
          fileName: url5.title,
          mimetype: 'application/vnd.android.package-archive', // Corrected mimetype
        },
        contextInfo: {
          externalAdReply: {
            title: url1[0].name,
            body: `${global.botname}`,
            thumbnailUrl: url5.imageUrl,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  } catch (error) {
    return reply(mess.error);
  }
}
break;


case 'tiktoksearch': case 'tiktoks': case 'ttsearch':{
  if (!text) return reply3(`Gunakan dengan cara .tiktoksearch *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
  await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
  try{
  let serach = await tiktokSearchVideo(text)
  let teks = '*TikTok Search*\n\n\nketik *ttget* untuk mengambil video\ngunakan dengan nomor urutan, contoh *ttget 1*\n\n'
  let no = 1
  for (let i of serach.videos) {
  let sut = await JSON.stringify(i.author)
  teks += `*⭔ No Urutan* : ${no++}\n*⭔ Title* : ${i.title}\n*⭔ Video ID* : ${i.video_id}\n*⭔ Username* : ${i.author.unique_id}\n*⭔ Nickname* : ${i.author.nickname}\n*⭔ Duration* : ${i.duration} detik\n*⭔ VT Like* : ${i.digg_count}\n*⭔ Comment* : ${i.comment_count}\n*⭔ Share* : ${i.share_count}\n*⭔ Url* : https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n─────────────────\n`
  }
  Risa.sendMessage(m.chat, { video: { url: `https://tikwm.com${serach.videos[0].play}` },  caption: teks }, { quoted: m })
  }catch (error) {
  console.log(error)
  reply3(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
  }
  }
  break

case 'terabox': {
  if (!text) return reply3(`*🚩 Example:* .terabox https://terabox.com/s/1aD9T7_Xe0oroBwlfzyWXUA`);
  await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   

  try {
    let data = await (await fetch(`https://api.betabotz.eu.org/api/download/terabox?url=${text}&apikey=${lann}`)).json();

    if (!data.result || data.result.length === 0) {
      return reply3('No files found in the response');
    }

    let msg = `乂 *T E R A B O X D O W N L O A D E R*\n\n`;
    msg += `Found ${data.result.length} file(s):\n\n`;

    for (let file of data.result) {
      if (!file.files || !file.files[0]) continue;
      let fdata = file.files[0];
      msg += ` ◦ *Name :* ${file.name}\n`;
      msg += ` ◦ *Size :* ${formatSize(fdata.size)}\n`;
      msg += ` ◦ *Created :* ${formatDate(file.created)}\n\n`;
    }

    await Risa.sendMessage(m.chat, {
      text: msg,
      contextInfo: {
        externalAdReply: {
          title: 'Terabox Downloader',
          body: `Processing ${data.result.length} file(s)`,
          thumbnailUrl: 'https://endpoint.web.id/server/file/7xbjOIR7L9G8Fwr.jpg',
          sourceUrl: null,
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    });

    const total = data.result.length;
    for (let i = 0; i < data.result.length; i++) {
      const file = data.result[i];
      if (!file.files || !file.files[0]) continue;

      let fdata = file.files[0];
      try {
        let response = await fetch(fdata.url);
        let buffer = await response.buffer();

        let queue = `*Antrian:* ${i + 1}-${total}\n`;
        await Risa.sendFile(m.sender, buffer, file.name, queue, m);

        if (i === data.result.length - 1) {
          await Risa.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
        }

        if (i < data.result.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        await reply3(m.chat, `Failed to process file: ${file.name}`);
      }
    }
  } catch (error) {
    reply3('An error occurred while processing your request. Please try again later.');
  }
}

function formatSize(size) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(2)} ${units[i]}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
break;


case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return m.reply('Format Tidak Tersedia!')
				if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await Risa.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break

case 'spucoyo': {
var pucoyo = await fetchJson('https://raw.githubusercontent.com/Fiisya/Database-Json/refs/heads/main/pucoyo.json')
var pickpucoyo = pickRandom(pucoyo)
Risa.sendImageAsSticker(m.chat, pickpucoyo.url, m, { packname: global.packname, author: global.author })
}
break

case 'ttstalk':
		case 'tiktokstalk': {
			if (!q) return reply3(`Contoh: .tiktokstalk nickname`)
			await Risa.sendMessage(m.chat, {
				react: {
					text: "⏱️",
					key: m.key,
				}
			})
			try {
				let result = await fetchJson(`https://api.vreden.my.id/api/tiktokStalk?query=${text}`)
				let post = await convertAngka(result.result.stats.videoCount)
				let follwer = await convertAngka(result.result.stats.followerCount)
				let follwing = await convertAngka(result.result.stats.followingCount)
				let likes = await convertAngka(result.result.stats.heartCount)
				let fien = await convertAngka(result.result.stats.friendCount)
				Risa.sendMessage(m.chat, {
					image: {
						url: result.result.user.avatarLarger
					},
					caption: `*${fii}乂 TIKTOK - STALK${fii}*\n\n*Nickname :* ${result.result.user.nickname}\n*Username :* ${result.result.user.uniqueId}\n*Postingan :* ${post}\n*Pengikut :* ${follwer}\n*Mengikuti :* ${follwing}\n*Suka :* ${likes}\n*Teman :* ${fien}\n*Bio :* \n${result.result.user.signature}`
				}, {
					quoted: m
				})
			} catch (err) {
				console.log(err)
				m.reply("Opss... Username Tidak Ditemukan")
			}
		}
		break

case 'dependents': {
 if (!text) {
 return m.reply('Please input the GitHub URL, e.g., https://github.com/whiskeysockets/baileys');
 }

 try {
 const response = await axios.get(`https://api-rho-murex-32.vercel.app/dependents?q=${encodeURIComponent(text)}`);
 const results = response.data.result.data;

 if (results && results.length > 0) {
 const output = results.map((url, index) => `${index + 1}. ${url}`).join('\n');
 m.reply(`Results:\n${output}`);
 } else {
 m.reply('No results found.');
 }
 } catch (error) {
 console.error('Error fetching dependents:', error);
 m.reply('Failed to retrieve data.');
 }
}
break;

case 'waifu': {
let res = await axios.get('https://api.waifu.pics/nsfw/waifu')
 Risa.sendMessage(from, { image: { url: res.data.url }, caption: `Random waifu image` }, { quoted: m })
}
break

case 'neko': {
let ress = await axios.get('https://api.neko.pics/nsfw/neko')
 Risa.sendMessage(from, { image: { url: ress.data.url }, caption: `Random neko image` }, { quoted: m })
}
break

case 'milf': {
let resu = await axios.get('https://api.waifu.im/search/?included_tags=milf')
 Risa.sendMessage(from, { image: { url: resu.data.url }, caption: `Random milf image` }, { quoted: m })
}
break

case 'menu': case 'allmenu': {
const menugambir = pickRandom([
"https://endpoint.web.id/server/file/oXrciNu950S6mFLs.jpg",
"https://endpoint.web.id/server/file/lDjG0nXnIrLBuBD.jpg",
"https://endpoint.web.id/server/file/DMXkBpmguqaeSElA.jpg",
"https://endpoint.web.id/server/file/7UVGKp0hjB1Tdom.jpg",	  
"https://endpoint.web.id/server/file/PizEq6Qw9EANDTgz.jpg",
])
 let alpi = await getBuffer("https://endpoint.web.id/server/file/FyYLQ3cFhxMdvazD.jpg");
 let get = await resize(alpi, 100, 100);
 let menulist = Alfitext(`HELLO, *${pushname}* ${themeemoji}
I AM AN AUTOMATED SYSTEM
(WHATSAPP BOT) THAT CAN HELP
TO DO SOMETHING, SEARCH AND
GET DATA / INFORMATION ONLY
THROUGH WHATSAPP.

 
 – ${fii}INFO BOT${fii} –
│ ◦ *Botname:* ${botname}
│ ◦ *Owner:* ${ownername}
│ ◦ *Upload:* ${bdw.upload}
│ ◦ *Download:* ${bdw.download}
│ ◦ *Baileys:* @whiskeysockets
│ ◦ *Date:* ${Risadate}
│ ◦ *Total Features:* ${totalFitur()}
│ ◦ *Runtime:* ${runtime(process.uptime())}
└───···▧

– ${fii}OWNER MENU${fii}
│  ◦ ${prefix}getplugin 
│  ◦ ${prefix}addplugin 
│  ◦ ${prefix}delplugin 
│  ◦ ${prefix}cgplugin 
│  ◦ ${prefix}addcase
│  ◦ ${prefix}delcase
│  ◦ ${prefix}disk
│  ◦ ${prefix}getfile
│  ◦ ${prefix}getlib
│  ◦ ${prefix}>
│  ◦ ${prefix}=>
│  ◦ ${prefix}$
│  ◦ ${prefix}backup
│  ◦ ${prefix}listgc
│  ◦ ${prefix}bcgc
│  ◦ ${prefix}jpm
│  ◦ ${prefix}join
│  ◦ ${prefix}delsesi 
└───···▧

– ${fii}AI MENU${fii}
│  ◦ ${prefix}ai
│  ◦ ${prefix}chatgpt
│  ◦ ${prefix}aiimg
│  ◦ ${prefix}autoai
│  ◦ ${prefix}photoleap
│  ◦ ${prefix}prabowo
│  ◦ ${prefix}openai
│  ◦ ${prefix}ai-detect
│  ◦ ${prefix}advanceai
│  ◦ ${prefix}gpt4
│  ◦ ${prefix}gptgo
│  ◦ ${prefix}gemini
│  ◦ ${prefix}gptturbo
│  ◦ ${prefix}hercai
│  ◦ ${prefix}draw
│  ◦ ${prefix}morphic
│  ◦ ${prefix}simi
│  ◦ ${prefix}blackbox
│  ◦ ${prefix}bard
│  ◦ ${prefix}chatbot
│  ◦ ${prefix}iask
│  ◦ ${prefix}textoimg
└───···▧

– ${fii}INFO MENU${fii}
│  ◦ ${prefix}owner
│  ◦ ${prefix}sc
│  ◦ ${prefix}tqto 
│  ◦ ${prefix}ping
│  ◦ ${prefix}totalfitur
│  ◦ ${prefix}os
│  ◦ ${prefix}server
│  ◦ ${prefix}listcase
└───···▧

– ${fii}TOOLS MENU${fii}
│  ◦ ${prefix}get
│  ◦ ${prefix}stickerwm
│  ◦ ${prefix}rvo
│  ◦ ${prefix}tourl
│  ◦ ${prefix}infogempa
│  ◦ ${prefix}igstalk
│  ◦ ${prefix}nextlibur
│  ◦ ${prefix}reminder
│  ◦ ${prefix}ceknik
│  ◦ ${prefix}ssweb
│  ◦ ${prefix}wastalk
│  ◦ ${prefix}tiktokstalk
│  ◦ ${prefix}dependents
│  ◦ ${prefix}top4top
│  ◦ ${prefix}translate
└───···▧

– ${fii}GROUP MENU${fii}
│  ◦ ${prefix}hidetag
│  ◦ ${prefix}tagall
│  ◦ ${prefix}totag
│  ◦ ${prefix}del
│  ◦ ${prefix}add
│  ◦ ${prefix}kick
│  ◦ ${prefix}opentime
│  ◦ ${prefix}closetime
│  ◦ ${prefix}editdesk
│  ◦ ${prefix}promote
│  ◦ ${prefix}demote
│  ◦ ${prefix}linkgc
│  ◦ ${prefix}gcsider
│  ◦ ${prefix}open
│  ◦ ${prefix}close
│  ◦ ${prefix}intro
└───···▧

– ${fii}DOWNLOAD MENU${fii}
│  ◦ ${prefix}tiktok
│  ◦ ${prefix}play
│  ◦ ${prefix}mediafire
│  ◦ ${prefix}instagram 
│  ◦ ${prefix}facebook
│  ◦ ${prefix}ytmp3 
│  ◦ ${prefix}ytmp4
│  ◦ ${prefix}pindl
│  ◦ ${prefix}telestick
│  ◦ ${prefix}gdrive
│  ◦ ${prefix}capcut
│  ◦ ${prefix}aio
│  ◦ ${prefix}soundcloud
│  ◦ ${prefix}apkmod
│  ◦ ${prefix}terabox
│  ◦ ${prefix}thread
│  ◦ ${prefix}twitter
│  ◦ ${prefix}videy
│  ◦ ${prefix}sfile
│  ◦ ${prefix}gitclone
│  ◦ ${prefix}spotifydl
│  ◦ ${prefix}play2
└───···▧

– ${fii}CONVERT MENU${fii}
│  ◦ ${prefix}sticker
│  ◦ ${prefix}smeme
│  ◦ ${prefix}qc
│  ◦ ${prefix}emma
│  ◦ ${prefix}toimg
│  ◦ ${prefix}createlogo
│  ◦ ${prefix}brat
│  ◦ ${prefix}ttp
│  ◦ ${prefix}remini
│  ◦ ${prefix}ocr
│  ◦ ${prefix}removebg
└───···▧

– ${fii}SEARCH MENU${fii}
│  ◦ ${prefix}ytsearch
│  ◦ ${prefix}pinterest
│  ◦ ${prefix}imdb
│  ◦ ${prefix}resep
│  ◦ ${prefix}drakor
│  ◦ ${prefix}gimage
│  ◦ ${prefix}gsmarena
│  ◦ ${prefix}ppcouple
│  ◦ ${prefix}justina
│  ◦ ${prefix}ttsearch
│  ◦ ${prefix}lirik
│  ◦ ${prefix}kisahnabi
│  ◦ ${prefix}storyanime
│  ◦ ${prefix}longtext
│  ◦ ${prefix}spotifysearch
│  ◦ ${prefix}bluearchive
│  ◦ ${prefix}pixiv
│  ◦ ${prefix}sdino
│  ◦ ${prefix}spucoyo
│  ◦ ${prefix}bingsearhimg
│  ◦ ${prefix}npms
│  ◦ ${prefix}otakudesu
│  ◦ ${prefix}otakudesulatest
│  ◦ ${prefix}gsmarena
└───···▧
`)

 let alpiii = {
 document: fs.readFileSync('./src/doc.txt'),
 fileName: `${botname}`,
 mimetype: 'image/null',
 fileLength: 0,
 pageCount: '',
 jpegThumbnail: get,
 caption: menulist,
 contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: `${botname} | By ${ownername}`,
 mediaType: 1,
 previewType: 1,
 body: "I Am An Automated System WhatsApp Bot That Can Help To Do Something, Search And Get Data / Information Only Through WhatsApp.",
 thumbnailUrl: menugambir,
 renderLargerThumbnail: true,
 mediaUrl: "https://alfitech.xyz",
 sourceUrl: "https://alfixd.my.id"
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idch,
 serverMessageId: -1,
 newsletterName: `Powered By: ${ownername}`,
 }
 }
 };

 await Risa.sendMessage(m.chat, alpiii, { quoted: m });
}
break;

case 'simi': case 'bard': case 'blackbox':
try {
if (!text) return reply3(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://btch.us.kg/` + command + `?text=${text}`)
const gpt = result.result
reply3(`${gpt}`)
} catch (err) {
console.log(err)
reply3('Terjadi Kesalahan')
}
break

case 'fc': {
 if (!q) return reply3('Enter Text');
 const ppnyauser = await Risa.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
 const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": "#FFFFFF",
 "width": 512,
 "height": 768,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": pushname,
 "photo": {
 "url": ppnyauser
 }
 },
 "text": q,
 "m.replyMessage": {}
 }
 ]
 };

 const res = await axios.post('https://qc.botcahx.eu.org/generate', json, {
 headers: {'Content-Type': 'application/json'}
 });
 const buffer = Buffer.from(res.data.result.image, 'base64');
 const rest = { 
 status: "200", 
 creator: "AdrianTzy",
 result: buffer
 };

 Risa.sendImageAsSticker(m.chat, rest.result, m, {
 packname: `${global.packname}`,
 author: `${global.author}`
 });
}
break


case 'instagram': 
case 'ig':
case 'igdl': 
case 'igmp4': {
const {
 igdl: igdl
} = require("btch-downloader");
 if (!text) return reply3("where is the link?");
reply3(mess.wait)
// WM YUDZ
 const mediaUrl = await igdl(text);
 const urlmedia = mediaUrl[0].url;
 try {
 const response = await axios.head(urlmedia); 
// WM YUDZ
 const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
 if (contentType.startsWith('image/')) {
 await Risa.sendMessage(m.chat, { image: { url: urlmedia}, caption: mess.done }, { quoted: m });
 return
 } else {
 await Risa.sendMessage(m.chat, { video: { url: urlmedia}, caption: mess.done }, { quoted: m });
 return 
 }
// YUDZ
 } catch (error) {
console.error(`Terjadi kesalahan: ${error}`)
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`)
 }
}
break

case'tt': case 'ttnowm': case 'tiktoknowm': case 'tiktok':{
if (!text) return reply3(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
Risa.sendMessage(m.chat, { video: { url: imgs.url }, caption: `*TikTok Download*\n\n- Title: ${anu.result.title}\n- Nickname: ${anu.result.author.nickname}\n- VT Like: ${anu.result.stats.likes}\n- Komentar: ${anu.result.stats.comment}\n- Share: ${anu.result.stats.share}\n- View: ${anu.result.stats.views}\n\n`}, {quoted: m})
}
if (imgs.type == "photo") {
if (c == 0) await Risa.sendMessage(m.chat, { image: { url: imgs.url }, caption: `*TikTok Slide*\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await Risa.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
}catch (error) {
console.log(error)
try{
const data = await tiktok(text)
console.log(data)
Risa.sendMessage(m.chat, { video: { url: data.video}, caption: `Done boss ✅`}, {quoted: m})
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}}
break 

case 'qcxx': {
    if (!q) return reply3('Enter Text');
    const ppnyauser = await Risa.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "reply3Message": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "AdrianTzy",
        result: buffer
    };

    Risa.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}
break;

case 'capcut': case 'facebook': case 'fb': case 'fbdl': case 'tt3': case 'ig2': case 'aio': {
 if (!text) return reply3(`Enter the link!!!`);
 await Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

 try {
 const axios = require('axios');
 const apiUrl = `https://btch.us.kg/download/aio?url=${encodeURIComponent(text)}`;
 const apiResponse = await axios.get(apiUrl);

 if (apiResponse.status === 200 && apiResponse.data.status) {
 const { result } = apiResponse.data;

 const videoUrl = result.medias[0]?.url;
 if (!videoUrl) {
 return reply3("Video URL not found in API response!");
 }

 await Risa.sendMessage(
 m.chat,
 {
 video: { url: videoUrl },
 caption: `✅ Successfully downloaded video: ${result.title}\nSource: ${result.source}`,
 },
 { quoted: m }
 );
 } else {
 return reply3(`Failed to fetch data from API: ${apiResponse.statusText}`);
 }
 } catch (error) {
 console.error(`Error: ${error}`);
 return reply3(`An error occurred while accessing the URL: ${error.message}`);
 }
}
break;

case 'thread': {
 if (!text) return reply3('Enter the link!!!');
 
 // Reaksi untuk menunjukkan proses sedang berjalan
 await Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key }});
 
 try {
 // Buat permintaan ke API
 const axios = require('axios');
 const threadAPI = `https://btch.us.kg/download/threads?url=${encodeURIComponent(text)}`;
 
 let response = await axios.get(threadAPI);
 let data = response.data;

 if (data.status && data.result.video_urls.length > 0) {
 const videoUrl = data.result.video_urls[0].download_url;

 // Kirim video ke chat
 await Risa.sendMessage(
 m.chat, 
 { video: { url: videoUrl }, caption: 'Successfully downloaded video from that URL' }, 
 { quoted: m }
 );
 } else {
 reply3('Video not found or URL is invalid.');
 }
 } catch (error) {
 console.error(`Terjadi kesalahan: ${error.message}`);
 return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
 }
}
break;

case 'chatbot': {
 if (m.isGroup) return reply('Fitur Hanya Dapat Digunakan Di Private Chat Bot!');
 const microsoftCopilotNumber = '18772241042@s.whatsapp.net';
 if (!text) return reply("Silakan masukkan pesan yang ingin dikirim.");
 await Risa.sendMessage(microsoftCopilotNumber, {
 text: text
 });
 m.reply("Pesan berhasil diteruskan ke Microsoft Copilot. Mohon tunggu balasan.");
 const responseListener = async (msg) => {
 if (msg.messages[0].key.remoteJid === microsoftCopilotNumber && msg.messages[0].message?.conversation) {
 const response = msg.messages[0].message.conversation;
 await Risa.sendMessage(m.sender, {
 text: `*Balasan dari Microsoft Copilot*\n\n${response}`
 });
 }
 };
 Risa.ev.on('messages.upsert', responseListener);
}
break;

case 'twtdl': {
 if (!text) return reply3(`Enter the link!!!`);

 await Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

 try {
 // Memanggil API untuk mendapatkan data video
 const axios = require('axios');
 const apiUrl = `https://btch.us.kg/download/twtdl?url=${encodeURIComponent(text)}`;

 const { data } = await axios.get(apiUrl);

 if (data.status && data.code === 200) {
 const videoUrl = data.result.url[0].hd; // Menggunakan kualitas HD
 const caption = `Title: ${data.result.title}\n\nSuccessfully downloaded video from that URL`;

 // Mengirim video ke chat
 await Risa.sendMessage(
 m.chat,
 { video: { url: videoUrl }, caption },
 { quoted: m }
 );
 } else {
 return reply3("Failed to fetch video data. Please check the URL or try again later.");
 }
 } catch (error) {
 console.error(`Error occurred: ${error}`);
 return reply3(`An error occurred while accessing the URL: ${error.message}`);
 }
}
break;

case 'videy': {
if (!text) return reply3(`Enter the link!!!`)
await Risa.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{
let response = await fetchJson(`https://api.agatz.xyz/api/videydl?url=${text}`)
Risa.sendMessage(m.chat, { video: { url: response.data }, caption: 'Successfully downloaded video from that URL' }, { quoted: m })
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`)
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`)
}
}
break

case 'gimage': {
 if (!args[0]) return Risa.sendMessage(from, { text: 'Masukkan kata kunci untuk mencari gambar!' }, { quoted: m });
 
 const query = args.join(' ');
 const apiUrl = `https://api.ryzendesu.vip/api/search/gimage?query=${encodeURIComponent(query)}`;
 
 try {
 const response = await axios.get(apiUrl);
 const results = response.data;

 if (!results || results.length === 0) {
 return Risa.sendMessage(from, { text: 'Tidak ada hasil ditemukan untuk kata kunci tersebut.' }, { quoted: m });
 }

 // Ambil gambar pertama dari hasil pencarian
 const firstResult = results[0];
 
 const caption = `*Judul:* ${firstResult.title}\n*URL:* ${firstResult.url}`;

 await Risa.sendMessage(from, { 
 image: { url: firstResult.image }, 
 caption 
 }, { quoted: m });
 } catch (error) {
 console.error('Terjadi kesalahan:', error.message);
 Risa.sendMessage(from, { text: 'Maaf, terjadi kesalahan saat mengambil data.' }, { quoted: m });
 }
}
break;

case "twt": {
if (!text) return reply3("Masukan teksnya!")
try {
 ppser = await Risa.profilePictureUrl(m.sender, 'image');
} catch (e) {
 ppser = 'https://telegra.ph/file/68d47ac90bcc8ef1510fa.jpg';
}
let { data } = await axios.post('https://ruloaooa-swgen.hf.space/generate2', {
 avatar: ppser,
 username: m.pushName,
 text: text,
 countLike: (Math.floor(Math.random() * 10000))
}, { responseType: 'arraybuffer' })
Risa.sendMessage(m.chat, { image: data })
}
break

case 'toanime': {
 async function uploadUguu(filePath) {
 const { exec } = require('child_process');
 return new Promise((resolve, reject) => {
 exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (error, stdout) => {
 if (error) return reject('Gagal mengunggah ke Uguu');
 try {
 let jsonResponse = JSON.parse(stdout);
 resolve({ status: 'Done', result: jsonResponse.files[0].url });
 } catch (err) {
 reject('Gagal mengunggah ke Uguu');
 }
 });
 });
 }
if (!quoted) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`);
reply(mess.wait);
let media = await Risa.downloadAndSaveMediaMessage(quoted);
let uploadResult = await uploadUguu(media); 
if (uploadResult.status !== 'Done') {
return m.reply('Gagal mengunggah gambar.');
}
let cdn = uploadResult.result;
let imge; 
try {
imge = `https://api.zenkey.my.id/api/maker/toanime?apikey=zenkey&url=${cdn}`;
} catch (error) {
console.error('Error fetching from API:', error);
return m.reply('Terjadi kesalahan saat mengambil data dari API.');
}
Risa.sendMessage(m.chat, { image: { url: imge }, caption: 'Done' }, { quoted: m });
}
break

case 'sfiledl': case 'sfile': {
if (!text.includes('https://sfile.mobi')) return reply3(`• *Example :* .${command} https://sfile.mobi/xxxxxxx/`)

reply3(mess.wait)

const sfile = {
 latest_uploads: async function(page = 1) {
 try {
 const res = await axios.get('https://sfile.mobi');
 const cookies = res.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
 const headers = {
 'cookie': cookies,
 'referer': 'https://sfile.mobi/uploads.php',
 'user-agent': 'Postify/1.0.0'
 };
 const uploads = await axios.get(`https://sfile.mobi/uploads.php?page=${page}`, { headers });
 const $ = cheerio.load(uploads.data);

 const data = $('.list').map((_, el) => ({
 title: $(el).find('a').text().trim(),
 link: $(el).find('a').attr('href'),
 size: $(el).find('small').text().match(/(\d+(?:\.\d+)?\s[KMGT]B)/)?.[1],
 uploadDate: $(el).find('small').text().match(/Uploaded:\s([\d\-a-zA-Z]+)/)?.[1]
 })).get().filter(item => item.title && item.link && item.size && item.uploadDate);

 return { creator: 'Daffa ~', status: 'success', code: 200, data };
 } catch (error) {
 console.error(error);
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'An error occurred while fetching the latest updates.' };
 }
 },

 top_trending: async function(page = 1) {
 try {
 const response = await axios.get('https://sfile.mobi');
 const cookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
 const headers = {
 'authority': 'sfile.mobi',
 'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9, image/avif, image/webp, image/apng, */*;q=0.8, application/signed-exchange;v=b3;q=0.7',
 'cookie': cookies,
 'referer': `https://sfile.mobi/top.php?page=${page}`,
 'user-agent': 'Postify/1.0.0'
 };
 const top = await axios.get(`https://sfile.mobi/top.php?page=${page}`, { headers });
 const $ = cheerio.load(top.data);

 const data = $('.list').map((_, el) => {
 const title = $(el).find('a').text().trim();
 const link = $(el).find('a').attr('href');
 const [size, downloadInfo] = $(el).find('small').text().split(', Download: ').map(e => e.trim());
 const [downloadCount, uploadedDate] = downloadInfo ? downloadInfo.split(' Uploaded: ').map(e => e.trim()) : [undefined, undefined];

 return title && link && size && downloadCount && uploadedDate ? 
 { title, link, size, downloadCount, uploadDate: uploadedDate } : null;
 }).get().filter(item => item);

 return { creator: 'Daffa ~', status: 'success', code: 200, data };
 } catch (error) {
 console.error(error);
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'An error occurred while fetching the top trending files.' };
 }
 },
 
 search: async function(query, page = 1) {
 try {
 const url = `https://sfile.mobi/search.php?q=${query}&page=${page}`;
 const response = await axios.get(url, {
 headers: {
 'authority': 'sfile.mobi',
 'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9,*/*;q=0.8',
 'referer': url,
 'user-agent': 'Postify/1.0.0'
 }
 });

 const $ = cheerio.load(response.data);
 
 const data = $('.list').map((_, el) => {
 const title = $(el).find('a').text().trim();
 const link = $(el).find('a').attr('href');
 const sizeMatch = $(el).text().match(/\(([^)]+)\)$/);
 const size = sizeMatch ? sizeMatch[1] : undefined;
 return title ? { title, link, size } : null;
 }).get();

 return { creator: 'Daffa ~', status: 'success', code: 200, data };
 } catch (error) {
 console.error(error);
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'An error occurred while fetching search results.' };
 }
 },
 
 download: async function(url) {
 const headers = {
 'referer': url,
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
 'accept-language': 'en-US,en;q=0.9',
 'user-Agent': 'Postify/1.0.0',
 };

 try {
 const response = await axios.get(url, { headers });
 headers.Cookie = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');

 const [filename, mimetype, downloadLink] = [
 response.data.match(/<h1 class="intro">(.*?)<\/h1>/s)?.[1] || '',
 response.data.match(/<div class="list">.*? - (.*?)<\/div>/)?.[1] || '',
 response.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1]
 ];
 
 if (!downloadLink) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Download link tidak ditemukan!' };

 headers.Referer = downloadLink;
 const final = await axios.get(downloadLink, { headers });

 const [directLink, key, filesize] = [
 final.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1],
 final.data.match(/&k='\+(.*?)';/)?.[1].replace(`'`, ''),
 final.data.match(/Download File \((.*?)\)/)?.[1]
 ];

 const result = directLink + (key ? `&k=${key}` : '');
 if (!result) return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: 'Direct Link Download tidak ditemukan!' };

 const data = await this.convert(result, url);

 return { creator: 'Daffa ~', status: 'success', code: 200, data: { filename, filesize, mimetype, result: data } };
 } catch (error) {
 return { creator: 'Daffa ~', status: 'error', code: 500, data: [], message: error };
 }
 },

 convert: async function(url, directLink) {
 try {
 const init = await axios.get(url, {
 maxRedirects: 0,
 validateStatus: status => status >= 200 && status < 303,
 headers: {
 'Referer': directLink,
 'User-Agent': 'Postify/1.0.0'
 },
 });

 const cookies = init.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
 const redirect = init.headers.location;

 const final_result = await axios.get(redirect, {
 responseType: 'arraybuffer',
 headers: {
 'referer': directLink,
 'user-agent': 'Postify/1.0.0',
 'cookie': cookies,
 },
 });

 const filename = final_result.headers['content-disposition']?.match(/filename=["']?([^"';]+)["']?/)?.[1] || 'Tidak diketahui';
 return {
 filename,
 mimeType: final_result.headers['content-type'],
 buffer: Buffer.from(final_result.data)
 };
 } catch (error) {
 throw error;
 }
 }
};

try {
let hasil = await sfile.download(text)
let { filename, filesize, mimetype } = hasil.data
let sfdl = hasil.data.result
let sfcap = `*[ SFILE - DL ]* \n`
sfcap += `Nama : ${filename}\n`
sfcap += `Type : ${mimetype}\n`
sfcap += `Detail : ${filesize}\n`
sfcap += `Url : ${text}\n`
sfcap += ``

await Risa.sendMessage(m.chat, {document: sfdl.buffer, mimetype: sfdl.mimeType, fileName: sfdl.filename, caption: sfcap }, {quoted:m});
} catch (error) {
console.error(`Terjadi kesalahan: ${error.message}`)
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`)
}
    }
break

case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break

case 'top4top': {
 const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = " "
 let q = m.quoted ? m.quoted : m
 let mime = (q.msg || q).mimetype || ''
 if (!/image/g.test(mime)) throw "Reply Gambar Aja"
 let media = await q.download()
 let link = await top4top(media)
 let { result, status } = link
 let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}
📊 *S I Z E :* ${media.length} Byte
`

reply3(caption)
}
break

case 'iask': {
 if (!text) return reply3('Masukkan pertanyaanmu!');
 reply3(mess.wait);

 try {
 const result = await iask(text);
 const responseText = `Jawaban: ${result.answer || 'Tidak ada jawaban.'}
 
Sumber: 
${result.sources.length > 0 ? result.sources.join('\n') : 'Tidak ada sumber yang ditemukan.'}`;

 // Mengirimkan gambar jika ada
 if (result.image.length > 0) {
 await Risa.sendMessage(m.chat, { image: { url: result.image[0] }, caption: responseText }, { quoted: m });
 } else {
 await Risa.sendMessage(m.chat, { text: responseText }, { quoted: m });
 }

 } catch (error) {
 console.error(`Terjadi kesalahan: ${error}`);
 return reply3(`Terjadi kesalahan saat memproses permintaan: ${error.message}`);
 }
}
break;

case 'git': case 'gitclone': {
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/Fiisya/StoreXPushkon`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
m.reply(mess.wait)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Risa.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('emror'))
}
break

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

case 'music': {

const axios = require('axios');
const yts = require('yt-search')

/*
*[ YOUTUBE DOWNLOADER ]*
> YouTube Downloader Support mp3/mp4
> *- Source  ( Follow Biar semangat sharing ) :* https://whatsapp.com/channel/0029VaezPea1t90dvAkhNg3k
*/

class Ddownr {
    constructor(url) {
        this.url = url;
        this.video = ["mp3","360", "480", "720", "1080"];
    }

    download = async(type) => {
     if (!type) {
            return {
                success: false,
                list: this.video
            }
        }
        if (!this.video.includes(type)) {
            return {
                success: false,
                list: this.video
            }
        }

        try {
            const { data } = await axios.get(`https://p.oceansaver.in/ajax/download.php?copyright=0&format=${type}&url=${this.url}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`);
            let result = {};

            while (true) {
                const response = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${data.id}`).catch(e => e.response);
                if (response.data.download_url) {
                      result = {
                            type,
                            download: response.data.download_url
                        };
                    break;
                } else {
                    console.log(`[ ! ] ${response.data.text} : ${response.data.progress}/1000`);
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            return { ...data.info, ...result };
        } catch (e) {
          return {
           success: false,
            msg: "Kode Nya Turu min Besok lagi saja", 
            err: e 
          };
        }
    }
 }

if (!text) return m.reply('nama lagu nya?')
const search = await yts(text)
const convert = search.all[0]

if (!convert || convert === 0) {
 m.reply('Lagu Yang Anda Search Ga Ke Temu')
}

let capt = `╭──── *[ ʀᴇǫᴜᴇsᴛ - ᴘʟᴀʏ ]* ──々\n`
capt += `│ =〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `│ =〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `│ =〆 ɪᴅ : ${convert.videoId}\n`
capt += `│ =〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `│ =〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `│ =〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `│ =〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `│ =〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `│ =〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `│ =〆 ᴜʀʟ : ${convert.url}\n`
capt += `╰─々`

await Risa.sendMessage(m.chat, {
text: capt,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: convert.title,
mediaType: 1,
previewType: 1,
body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
thumbnailUrl: convert.image,
renderLargerThumbnail: true,
mediaUrl: convert.url,
sourceUrl: convert.url
}
}
},{ quoted: m });

try {
 let data = new Ddownr(convert.url)
let deku = await data.download('mp3')

await Risa.sendMessage(m.chat, {
audio: {
url: deku.download
},
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: convert.title,
mediaType: 1,
previewType: 1,
body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
thumbnailUrl: convert.image,
renderLargerThumbnail: true,
mediaUrl: convert.url,
sourceUrl: convert.url
}
}
},{ quoted: m });

} catch (err) {
m.reply('maaf kak bisa di coba lagi...')
}

}
break

case 'play': {
 // Memastikan ada input teks
 if (!text) return reply3(`*• Contoh :* ${prefix+command} *<query>*`);

 reply3("Tunggu sebentar...");

 let videoUrl;

 // Mencari video berdasarkan teks
 let result = await yts(text);
 videoUrl = result.videos[0]?.url; // Ambil URL video pertama
 if (!videoUrl) {
 return reply3("Tidak ada video ditemukan dengan pencarian tersebut.");
 }

 // Encode URL untuk digunakan dalam permintaan API
 const encodedUrl = encodeURIComponent(videoUrl);
 const apiUrl = `https://Ikygantengbangetanjay-api.hf.space/yt?query=${encodedUrl}`;

 try {
 console.log(`Mengirim permintaan ke API: ${apiUrl}`); // Log URL API
 let response = await axios.get(apiUrl);
 console.log(`Respons dari API:`, response.data); // Log respons dari API

 let data = response.data;

 // Memeriksa apakah hasil valid
 if (!data.success || !data.result) {
 return reply3("Tidak ada hasil ditemukan.");
 }

 let videoData = data.result;
 let cap = `*乂 Y T M P 3 - P L A Y*\n\n` +
 `◦ Judul : ${videoData.title}\n` +
 `◦ Link Video : ${videoData.url}\n` +
 `◦ Durasi : ${videoData.timestamp}\n` +
 `◦ Penulis : ${videoData.author.name}\n` +
 `◦ Views : ${videoData.views}\n` +
 `◦ Diunggah : ${videoData.ago}`;

 await Risa.sendMessage(m.chat, { text: cap }, { quoted: m });

 // Mengunduh audio
 const audioResponse = await axios.get(videoData.download.audio, { responseType: 'arraybuffer' });
 const audioBuffer = Buffer.from(audioResponse.data, 'binary');

 // Kirim audio sebagai pesan media
 await Risa.sendMessage(m.chat, {
 audio: audioBuffer,
 mimetype: 'audio/mpeg',
 fileName: `${videoData.title}.mp3`,
 caption: cap
 }, { quoted: m });

 } catch (error) {
 console.error("Terjadi kesalahan:", error); // Log kesalahan
 m.reply("Terjadi kesalahan saat mengunduh audio. Silakan periksa log untuk detail.");
 }
}
break

case 'fesbuk': {
 if (!text) return reply3(`Enter the link!!!`);
 await Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key }});
 try {
 let response = await fsaver.download(text);
 Risa.sendMessage(m.chat, { video: { url: response.video }, mimetype: 'video/mp4', caption: 'successfully download facebook video' }, { quoted: m });
 } catch (error) {
 console.error(`Terjadi kesalahan: ${error}`);
 return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
 }
}
break;

case 'otakudesu': {
 if (!text) return m.reply(`Mau cari anime apa?`);
 await Risa.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
 try {
 const query = text.trim();
 const results = await otakudesu.search(query);

 if (!results || results.length === 0) {
 return m.reply(`Anime dengan judul "${query}" tidak ditemukan.`);
 }

 let message = `Hasil pencarian untuk "${query}":\n\n`;
 results.slice(0, 5).forEach((anime, index) => {
 message += `*${index + 1}. ${anime.title}*\n`;
 message += `➡️ [Link](${anime.link})\n`;
 message += `📊 Genre: ${anime.genres}\n`;
 message += `📈 Rating: ${anime.rating || "N/A"}\n\n`;
 });

 return Risa.sendMessage(m.chat, { text: message }, { quoted: m });
 } catch (error) {
 console.error(`Terjadi kesalahan: ${error}`);
 return m.reply(`Terjadi kesalahan saat memproses permintaan: ${error.message}`);
 }
}
break

case 'gsmarena': {
 if (args.length === 0) {
 m.reply('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 m.reply(replyText);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break

case 'blekbok': {
 if (!text) return reply3('masukkan pertanyaanmu!')
 reply3(mess.wait)
 try {
 let blekbok = await (await fetch(`https://anabot.my.id/api/ai/blackbox?prompt=${text}&apikey=freeApikey`)).json()
 Risa.sendMessage(m.chat, { text: blekbok.result }, { quoted: m })
 } catch (error) {
console.error(`Terjadi kesalahan: ${error}`)
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`)
}}
break

case "q": {
let jsonData = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
reply(jsonData)
}
break

case 'otakudesulatest': {

const axios = require('axios');
const cheerio = require('cheerio');

const otakudesu = {
 ongoing: async () => {
 try {
 const { data } = await axios.get('https://otakudesu.cloud/');
 const $ = cheerio.load(data);
 const results = [];

 $('.venz ul li').each((index, element) => {
 const episode = $(element).find('.epz').text().trim();
 const type = $(element).find('.epztipe').text().trim();
 const date = $(element).find('.newnime').text().trim();
 const title = $(element).find('.jdlflm').text().trim();
 const link = $(element).find('a').attr('href');
 const image = $(element).find('img').attr('src');

 results.push({
 episode,
 type,
 date,
 title,
 link,
 image
 });
 });

 return results;
 } catch (error) {
 console.error('Error fetching data:', error);
 }
 },
 search: async (query) => {
 const url = `https://otakudesu.cloud/?s=${query}&post_type=anime`;
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 const animeList = [];
 
 $('.chivsrc li').each((index, element) => {
 const title = $(element).find('h2 a').text().trim();
 const link = $(element).find('h2 a').attr('href');
 const imageUrl = $(element).find('img').attr('src');
 const genres = $(element).find('.set').first().text().replace('Genres : ', '').trim();
 const status = $(element).find('.set').eq(1).text().replace('Status : ', '').trim();
 const rating = $(element).find('.set').eq(2).text().replace('Rating : ', '').trim() || 'N/A';

 animeList.push({
 title,
 link,
 imageUrl,
 genres,
 status,
 rating
 });
 });
 return animeList;
 
 } catch (error) {
 console.error('Error fetching data:', error);
 return { error: 'Error fetching data' };
 }
 },
 detail: async (url) => {
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 
 const animeInfo = {
 title: $('.fotoanime .infozingle p span b:contains("Judul")').parent().text().replace('Judul: ', '').trim(),
 japaneseTitle: $('.fotoanime .infozingle p span b:contains("Japanese")').parent().text().replace('Japanese: ', '').trim(),
 score: $('.fotoanime .infozingle p span b:contains("Skor")').parent().text().replace('Skor: ', '').trim(),
 producer: $('.fotoanime .infozingle p span b:contains("Produser")').parent().text().replace('Produser: ', '').trim(),
 type: $('.fotoanime .infozingle p span b:contains("Tipe")').parent().text().replace('Tipe: ', '').trim(),
 status: $('.fotoanime .infozingle p span b:contains("Status")').parent().text().replace('Status: ', '').trim(),
 totalEpisodes: $('.fotoanime .infozingle p span b:contains("Total Episode")').parent().text().replace('Total Episode: ', '').trim(),
 duration: $('.fotoanime .infozingle p span b:contains("Durasi")').parent().text().replace('Durasi: ', '').trim(),
 releaseDate: $('.fotoanime .infozingle p span b:contains("Tanggal Rilis")').parent().text().replace('Tanggal Rilis: ', '').trim(),
 studio: $('.fotoanime .infozingle p span b:contains("Studio")').parent().text().replace('Studio: ', '').trim(),
 genres: $('.fotoanime .infozingle p span b:contains("Genre")').parent().text().replace('Genre: ', '').trim(),
 imageUrl: $('.fotoanime img').attr('src')
 };

 const episodes = [];
 $('.episodelist ul li').each((index, element) => {
 const episodeTitle = $(element).find('span a').text();
 const episodeLink = $(element).find('span a').attr('href');
 const episodeDate = $(element).find('.zeebr').text();
 episodes.push({ title: episodeTitle, link: episodeLink, date: episodeDate });
 });

 return {
 animeInfo,
 episodes
 };
 
 } catch (error) {
 console.error('Error fetching data:', error);
 return { error: 'Error fetching data' };
 }
 },
 download: async (url) => {
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 
 const episodeInfo = {
 title: $('.download h4').text().trim(),
 downloads: []
 };

 $('.download ul li').each((index, element) => {
 const quality = $(element).find('strong').text().trim();
 const links = $(element).find('a').map((i, el) => ({
 quality,
 link: $(el).attr('href'),
 host: $(el).text().trim()
 })).get();
 episodeInfo.downloads.push(...links);
 });
 return episodeInfo;
 
 } catch (error) {
 console.error('Error fetching data:', error);
 return { error: 'Error fetching data' };
 }
 }
}

let hoh = await otakudesu.ongoing()
let deku = `⏤͟͟͞͞╳── *[ ᴜᴘᴅᴀᴛᴇ ᴏɴɢᴏɪɴɢ ]* ── .々─ᯤ\n│ `
for (let i of hoh) {
deku += `\n⏤͟͟͞͞╳── *[ ${i.title} | ${i.episode} ]* ── .々─ᯤ\n`
deku += `│ =〆 ʟɪɴᴋ: ${i.link}\n`
deku += `⏤͟͟͞͞╳────────── .✦\n\n`
}

await Risa.sendMessage(m.chat, {
text: deku,
contextInfo: {
 isForwarded: true,
 forwardingScore: 99999,
 externalAdReply: {
 showAdAttribution: true,
 title: 'Update Ongoing By: Lepii',
 mediaType: 1,
 previewType: 1,
 body: 'by: Lepii',
 //previewType: "PHOTO",
 thumbnailUrl: 'https://endpoint.web.id/server/file/izpR22PMfHe8L5YN.jpg',
 renderLargerThumbnail: false,
 mediaUrl: web,
 sourceUrl: web
 },
 forwardedNewsletterMessageInfo: {
 newsletterJid: idch,
 newsletterName: `By : ${botname}`,
 serverMessageId: 143
 }
 }
}, { quoted: m })
}
break

case 'ytmp4': {
  if (!text) return reply3(' [ Example ] :*\n> *.yt <link youtube>*')
  reply3(mess.wait)
try {
  reply3('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!*')
  let proces = await (await fetch(`https://btch.us.kg/download/ytdl?url=${text}`)).json()
  let video4 = proces.result.mp4;
  const ytc = `*[ YOUTUBE DOWNLOADER ]*
  *title* ${proces.result.title}
  
  ©${botname}`;
  Risa.sendMessage(m.chat, { video: { url: video4 }, caption: ytc }, { quoted: m })
 } catch (error) {
 reply3(`Maaf, terjadi kesalahan, coba lagi!`);
}
}
break


case 'spotifydl': {
 if (!text) return m.reply( `Masukkan URL Spotify.\nContoh: .spotifydl https://open.spotify.com/track/2Tp8vm7MZIb1nnx1qEGYv5`);

 m.reply('Mencari lagu...');

 try {
 let apiUrl = `https://api.agatz.xyz/api/spotifydl?url=${encodeURIComponent(text)}`;
 let res = await fetch(apiUrl);

 // Periksa status respons
 if (!res.ok) return m.reply('Gagal mengambil data dari API');

 let json = await res.json();
 console.log('API Response:', json); // Log respons dari API

 if (json.status !== 200) return m.reply( 'Gagal mengambil data dari API');

 let data = JSON.parse(json.data); // Mengurai data JSON
 if (!data) return m.reply( 'Data tidak ditemukan.');

 // Pastikan ada URL audio
 if (!data.url_audio_v1) return m.reply( 'Link audio tidak ditemukan.');

 let caption = `*Judul:* ${data.judul || 'Tidak ada judul'}\n` +
 `*Channel:* ${data.nama_channel || 'Tidak ada channel'}\n` +
 `*Durasi:* ${data.durasi || 'Tidak ada durasi'} detik\n` +
 `*Link Audio:* [Unduh MP3](${data.url_audio_v1})`;

 // Mengirimkan audio
 await Risa.sendMessage(m.chat, {
 audio: { url: data.url_audio_v1 },
 caption: caption,
 mimetype: 'audio/mpeg'
 }, { quoted: m });

 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message || 'Kesalahan tidak terduga'}`);
 }
};
break

case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return reply3(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return reply3(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await Risa.downloadAndSaveMediaMessage(q)
let url = await pomfCDN(img)
let hasil = await ocrapi.ocrSpace(url)
 await reply3(hasil.ParsedResults[0].ParsedText)
}
break

case 'violet': {
const a = await axios.get('https://btch.us.kg/pinimg?query=Violet%20Evergarden', { responseType: 'arraybuffer' })

await Risa.sendMessage(from, { image: a.data, caption: 'Nih Foto Violet' }, { quoted: m })

}
break

case 'cecan': {
const a = await axios.get('https://btch.us.kg/pinimg?query=cewe%20cantik', { responseType: 'arraybuffer' })

await Risa.sendMessage(from, { image: a.data, caption: 'Nih Foto cecan' }, { quoted: m })

}
break


case 'playspotify': {
 if (!text) return m.reply(`Ex: .playspotify phonk 2023`)
async function searchSpotifyTracks(query) {
 const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
 const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
 const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

 const getToken = async () => {
 const response = await fetch('https://accounts.spotify.com/api/token', {
 method: 'POST',
 timeout: 60000, // 60 seconds
 body: new URLSearchParams({ grant_type: 'client_credentials' }),
 headers: { Authorization: `Basic ${auth}` },
 });
 return (await response.json()).access_token;
 };

 const accessToken = await getToken();
 const offset = 10;
 const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
 const response = await fetch(searchUrl, {
 headers: { Authorization: `Bearer ${accessToken}` },
 });
 const data = await response.json();
 return data.tracks.items;
}

try {
let angkaAcak = [0, 1, 2, 3, 4]
let random = pickRandom(angkaAcak)
 do2 = await searchSpotifyTracks(text)
await Risa.sendMessage(m.chat, { audio: { url: `${do2[random].preview_url}` }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
} catch (e) {
 return m.reply('error bang')
 }
 }
break

case 'intro': {
m.reply(`╭─── *「 Kartu Intro 」*
│ 
│ *Nama :* 
│ *Gender :* 
│ *Umur :* 
│ *Hobby :* 
│ *Kelas :* 
│ *Asal :* 
│ *Agama :* 
│ *Status :* 
│ *Role :* 
╰──────────────`)
}
break

case 'removebg': {
 if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
 if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);

 let remobg = require('remove.bg');
 let apirnobg = [
 'q61faXzzR5zNU6cvcrwtUkRU',
 'S258diZhcuFJooAtHTaPEn4T',
 '5LjfCVAp4vVNYiTjq9mXJWHF',
 'aT7ibfUsGSwFyjaPZ9eoJc61',
 'BY63t7Vx2tS68YZFY6AJ4HHF',
 '5Gdq1sSWSeyZzPMHqz7ENfi8',
 '86h6d6u4AXrst4BVMD9dzdGZ',
 'xp8pSDavAgfE5XScqXo9UKHF',
 'dWbCoCb3TacCP93imNEcPxcL'
 ];
 
 let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
 let hmm = './remobg-' + getRandom('');
 let localFile = await Risa.downloadAndSaveMediaMessage(qmsg, hmm);
 let outputFile = './hremo-' + getRandom('.png');
 
 m.reply(mess.wait);
 
 remobg.removeBackgroundFromImageFile({
 path: localFile,
 apiKey: apinobg,
 size: "regular",
 type: "auto",
 scale: "100%",
 outputFile
 }).then(async result => {
 Risa.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: 'Done' }, { quoted: m });
 await fs.unlinkSync(localFile);
 await fs.unlinkSync(outputFile);
 });
}
break

case 'textoimg': {
 if (!text) {
 return m.reply(`Contoh penggunaan: .textoimg <deskripsi gambar>\n .textoimg "gunung di pagi hari"`);
 }

 m.reply('⏳ Sedang membuat gambar, mohon tunggu sebentar...');

 try {
 const response = await sanai.create(text);

 if (response && response.result) {
 const imageUrl = response.result;

 await Risa.sendFile(
 m.chat,
 imageUrl,
 'generated-image.jpg',
 `✅ Gambar berhasil dibuat!\n\n• Prompt: *${text}*\n• Resolusi: ${response.width}x${response.height}\n• Waktu proses: ${response.processingTime} detik`,
 m
 );
 } else {
 m.reply('❌ Gagal membuat gambar. Silakan coba lagi.');
 }
 } catch (error) {
 console.error("Error saat membuat gambar:", error.message);
 m.reply('❌ Terjadi kesalahan saat membuat gambar. Silakan coba lagi nanti.');
 }
}
 break;

case 'delsesi':
case 'clearsession':{
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply3('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply3(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply3(teks)
await sleep(2000)
reply3("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply3("Berhasil menghapus semua sampah di folder session")
});
}
break

case 'ytmp3': {
  if (!text) return reply3(' [ Example ] :*\n> *.yt <link youtube>*')
  reply3(mess.wait)
try {
  reply3('*processs sending audio, mungkin membutuhkan 1-3 menit jika durasi audio terlalu panjang!*')
  let process = await (await fetch(`https://btch.us.kg/download/ytdl?url=${text}`)).json()
  let audio4 = process.result.mp3;
  Risa.sendMessage(m.chat, { audio: { url: audio4 }, mimetype: "audio/mp4", ptt: false }, { quoted: m })
 } catch (error) {
console.error(`Terjadi kesalahan: ${error}`)
return reply3(`Terjadi kesalahan saat mengakses URL: ${error.message}`)
}
}
break

case "cekmemek":{
 if (!text) return m.reply("Siapa Yang Mau di Cek Memeknya?!")
	
 const memek = pickRandom([
	 "Putih mulus",
	 "Hitam",
	 "Pink",
	 "Pink Mulus",
 "Hitam mulus",
 ]);
 const jembut = pickRandom([
	 "Lebat",
	 "Tipis",
	 "Gada",
	 "Jembut",
 "Bersih",
 ]); 
 const lobang = pickRandom([
	 "Perawan",
	 "Ga Perawan",
	 "Besar",
	 "Sempit",
 "dobrak",
 ]); 
 const respond = `
╭━━━━°「 *Memeknya ${text}* 」°
┊• Nama : ${text}
┃• Memek : ${memek}
┊• Jembut : ${jembut}
┃• Lobang : ${lobang}
╰═┅═━––––––๑
 `.trim();
 
	m.reply(respond);
 }
 break

case "cekkontol":{
 if (!text) return m.reply("Siapa Yang Mau di Cek kontolnya?!")
	
 const kontol = pickRandom([
	 "Putih mulus",
	 "Hitam",
	 "Pink",
	 "Pink Mulus",
 "Hitam mulus",
 ]);
 const jembut = pickRandom([
	 "Lebat",
	 "Tipis",
	 "Gada",
	 "Jembut",
 "Bersih",
 ]); 
 const type = pickRandom([
	 "perjaka",
	 "ga perjaka",
	 "loyo",
	 "kecil",
 "jumbo",
 ]); 
 const respond = `
╭━━━━°「 *kontolnya ${text}* 」°
┊• Nama : ${text}
┃• kontol : ${kontol}
┊• Jembut : ${jembut}
┃• type : ${type}
╰═┅═━––––––๑
 `.trim();
 
	m.reply(respond);
 }
 break

case 'play2': {
const axios = require('axios');

const formats = ["audio", "video"];
const audioQuality = [320, 256, 192, 128, 64];
const videoQuality = ["360p", "480p", "720p", "1080p"];

const bigconv = {
 getToken: async (url) => {
 const extractVideoId = (url) => {
 const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
 const match = url.match(regex);
 return match ? match[1] : null;
 };

 const id = extractVideoId(url);
 if (!id) {
 throw new Error('ID videonya gk ketemu jir, pastikan link youtube yak');
 }

 const config = {
 method: 'GET',
 url: `https://dd-n01.yt2api.com/api/v4/info/${id}`,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
 'Accept': 'application/json',
 'accept-language': 'id-ID',
 'referer': 'https://bigconv.com/',
 'origin': 'https://bigconv.com',
 'alt-used': 'dd-n01.yt2api.com',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'cross-site',
 'priority': 'u=0',
 'te': 'trailers'
 }
 };

 const response = await axios.request(config);
 const cookies = response.headers['set-cookie'];
 const processedCookie = cookies ? cookies[0].split(';')[0] : '';
 const authorization = response.headers['authorization'] || '';
 const result = { data: response.data, cookie: processedCookie, authorization };
 return result;
 },
 convert: async (url, format, quality) => {
 const data = await bigconv.getToken(url);
 const formats = data.data.formats;

 let token;
 if (format === "audio") {
 const audioOptions = formats.audio.mp3;
 const selectedAudio = audioOptions.find(option => option.quality === quality);
 if (selectedAudio) {
 token = selectedAudio.token;
 } else {
 throw new Error(`Kualitas audio ${quality} tidak tersedia.`);
 }
 } else if (format === "video") {
 const videoOptions = formats.video.mp4;
 const selectedVideo = videoOptions.find(option => option.quality === quality);
 if (selectedVideo) {
 token = selectedVideo.token;
 } else {
 throw new Error(`Kualitas video ${quality} tidak tersedia.`);
 }
 } else {
 throw new Error('Format tidak dikenali. Gunakan "audio" atau "video".');
 }

 const raw = JSON.stringify({ "token": token });

 const config = {
 method: 'POST',
 url: 'https://dd-n01.yt2api.com/api/v4/convert',
 headers: {
 'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
 'Accept': 'application/json',
 'Content-Type': 'application/json',
 'accept-language': 'id-ID',
 'referer': 'https://bigconv.com/',
 'origin': 'https://bigconv.com',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'cross-site',
 'priority': 'u=0',
 'te': 'trailers',
 'Cookie': data.cookie,
 'authorization': data.authorization
 },
 data: raw
 };

 const response = await axios.request(config);
 return { jobId: response.data.id, cookie: data.cookie, authorization: data.authorization };
 },
 download: async (url, format, quality) => {
 const { jobId, cookie, authorization } = await bigconv.convert(url, format, quality);
 return new Promise((resolve, reject) => {
 const checkStatus = async () => {
 const config = {
 method: 'GET',
 url: `https://dd-n01.yt2api.com/api/v4/status/${jobId}`,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
 'Accept': 'application/json',
 'accept-language': 'id-ID',
 'referer': 'https://bigconv.com/',
 'origin': 'https://bigconv.com',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'cross-site',
 'priority': 'u=4',
 'te': 'trailers',
 'Cookie': cookie,
 'authorization': authorization
 }
 };

 const response = await axios.request(config);
 console.log(response.data);
 if (response.data.status === 'completed') {
 clearInterval(interval);
 resolve(response.data);
 } else if (response.data.status === 'failed') {
 clearInterval(interval);
 resolve(response.data);
 } else {
 console.log('Status belum complete, wet iam cek lagi...');
 }
 };

 const interval = setInterval(checkStatus, 5000);
 });
 }
};

if (!text) return m.reply('What Song Are You Looking For?')
const search = await yts(text)
const convert = search.all[0]

if (!convert || convert === 0) {
 m.reply('The Song You Searched For Was Found')
}

let capt = `╭──── *[ ʀᴇǫᴜᴇsᴛ - ᴘʟᴀʏ ]* ──々\n`
capt += `│ =〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `│ =〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `│ =〆 ɪᴅ : ${convert.videoId}\n`
capt += `│ =〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `│ =〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `│ =〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `│ =〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `│ =〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `│ =〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `│ =〆 ᴜʀʟ : ${convert.url}\n`
capt += `╰─々`

await Risa.sendMessage(m.chat, {
text: capt,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: convert.title,
mediaType: 1,
previewType: 1,
body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
thumbnailUrl: convert.image,
renderLargerThumbnail: true,
mediaUrl: convert.url,
sourceUrl: convert.url
}
}
},{ quoted: m });

try {
let Lepikk = await bigconv.download(convert.url,"video","360p")

await Risa.sendMessage(m.chat, {
audio: {
url: Lepikk.download
},
mimetype: 'audio/mpeg',
contextInfo: {
forwardingScore: 999,
isForwarded: true,
externalAdReply: {
title: convert.title,
mediaType: 1,
previewType: 1,
body: `Durasi : ${convert.timestamp} / View : ${convert.views}`,
thumbnailUrl: convert.image,
renderLargerThumbnail: true,
mediaUrl: convert.url,
sourceUrl: convert.url
}
}
},{ quoted: m });

} catch (err) {
m.reply('sorry, can you try again...')
}

}
break
case 'addcase': {
 if (!isCreator) return reply3('lu sapa asu')
 if (!text) return reply3('Mana case nya?');
    const fs = require('fs');
const namaFile = 'message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply3('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply3('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply3('Tidak dapat menambahkan case dalam file.');
    }
});

}
break

default:
//<================================================>
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return reply3(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                
Risa.Lily = Risa.Lily ? Risa.Lily : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Risa.Lily[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Risa.Lily[sender] && m.text) {
        let name = Risa.getName(sender);
        //await Risa.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        const prompt = `Nama lu lily AI, lu AI asisten yang pintar dan ceria. Lu diciptain sama Alfi Syahrial. Lu tuh ceria banget dan selalu bantuin orang lain, kadang-kadang bisa manis juga kalo ngomongnya manis sama lu. Hobi lu bercerita dan dengerin orang bercerita, dan gaya bicara lu aksen anak jaksel`;
        const apiUrl = `https://btch.us.kg/prompt/gpt?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(m.text)}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'accept': 'application/json' }
            });

            const responseData = response.data;
            const answer = responseData.result;
            //await Risa.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
            reply3(answer);
            Risa.Lily[sender].messages = [
                { role: "system", content: `Halo, saya Lily Asistent, dikembangkan oleh AlfiXD Anda sedang berbicara dengan ${pushname}` },
                { role: "user", content: m.text }
            ];
        } catch (error) {
            console.error("Error fetching data:", error);
            reply3("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }
//<================================================>                
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                } 
//batas euy 
}
} catch (err) {
    let formattedError = util.format(err);   
    let errorMessage = String(formattedError);   
    let stackTrace = err.stack ? err.stack : "Stack trace not available";
    if (typeof err === 'string') {
        m.reply(`Terjadi error:\n\nKeterangan Error: ${errorMessage}`);
    } else {
        console.log(formattedError);
        Risa.sendMessage("62895615063060@s.whatsapp.net", {
            text: `Alo ketua, ada error nih:\n\nKeterangan Error: ${errorMessage}\n\nStack Trace:\n${stackTrace}`,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        });
    }
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
