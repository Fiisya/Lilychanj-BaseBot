const fetch = require('node-fetch');

const types = [ 'video', 'audio' ];
const qualityVideo = [ '144', '240', '360', '480', '720' ];
const qualityAudio = [ '32', '64', '128', '192' ];

const SaveTube = {
  detail: async (url) => {
    try {
      const response = await (await fetch(`https://cdn59.savetube.su/info?url=${url}`)).json();
      const data = response.data;
      const result = {
        title: data.title,
        url: data.url,
        duration: data.durationLabel,
        thumbnail: data.thumbnail_formats[0].url,
        id: data.id,
        access: data.key
      }
      return result;
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
      console.log('Error:' + error);
    }
  },
  media: async (type, quality, key) => {
    try {
      const response = await (await fetch(`https://cdn51.savetube.su/download/${type}/${quality}/${key}`)).json();
      const data = response.data;
      if (data && data.downloadUrl) {
        return {
          url: data.downloadUrl
        };
      } else {
        return {
          status: false,
          message: "Download URL tidak ditemukan."
        };
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
      console.log('Error:' + error);
    }
  },
  download: async (url, type, quality) => {
    try {
      const data = await SaveTube.detail(url);
      const { access } = data;
      const mediaResult = await SaveTube.media(type, quality, access);

      return {
        data,
        media: mediaResult
      };
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
      console.log('Error:' + error);
    }
  }
}

module.exports = { SaveTube };
