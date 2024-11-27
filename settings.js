/**
BASE LILYCHANJ CASE X PLUGINS 
**/

const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

//PAIRING CODE
global.pairing = '62895417817823'
//contact details
global.owner = ['62895615063060'] // ubah aja pake nomor lu
global.owner0 = '62895615063060@s.whatsapp.net'
global.nomerowner = ["62895615063060"]
global.ownername = "Lepii"

global.ownernumber = '62895615063060'  //creator number
global.ownername = 'Lepii' //owner name
global.botname = 'Risa - Assistant' //name of the bot

//sticker details
global.packname = ' Created By Risa' // ubah aja ini nama sticker
global.author = `At ${hariini}\n${time}\nPowered By Lepii` // ubah aja ini nama sticker

//api
global.lann = 'jQR4SvUC'

//apis
global.APIs = {
    // API Prefix
    // name: 'https://website'
    lann: 'https://api.betabotz.eu.org'
}

//apikeys
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.betabotz.eu.org': 'jQR4SvUC'
}


//console view/theme
global.themeemoji = '🍁'
global.fii = '`'
global.wm = " Lepii"
global.urldb = ''; // kosongin aja
global.idch = '120363208710632243@newsletter'
global.linkch = "https://whatsapp.com/channel/0029VaGgcSa3bbV4dMm9Fe3B"
global.web = 'https://alfixd.my.id'
global.fotoRandom = [
    "https://endpoint.web.id/server/file/90zDkCDA914lq5K.jpg",
    "https://endpoint.web.id/server/file/KCqIkl0RvvA6WTGn.jpg",
    "https://endpoint.web.id/server/file/btyOc42R3m5fNj5q.jpg",
    "https://endpoint.web.id/server/file/FIuOqvnxp5bpnQCs.jpg",
    "https://endpoint.web.id/server/file/Oc2ooJioDKuVdoPs.jpg",
    "https://endpoint.web.id/server/file/ixz76vppf70Smp.jpg",
   
    ]

//custom prefix
global.prefa = ['/','!','.','#','&']
 
global.welcome = true 
global.autoswview = true

//Global Message 
global.mess = {
    done: 'Successfully!',
    prem: 'Sorry, this feature can only be used by premium users.\nIf you want to buy premium, type *.buyprem*',
    admin: 'Group Admin Only!!',
    botadmin: 'Please make the bot a group admin first!',
    owner: 'This feature is for owners only',
    group: 'Sorry, this feature can only be used in groups!!',
    private: 'This feature is only for private chat!!',
    wait: '_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_',    
    error: 'Error!',
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})
