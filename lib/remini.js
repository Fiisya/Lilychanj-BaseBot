const FormData = require('form-data');
const https = require('https');

/**
 * Enhances an image using the Vyro.ai API
 * @param {Buffer} imageBuffer - The input image buffer
 * @param {string} enhancementType - The type of enhancement to apply ('enhance', 'recolor', or 'dehaze')
 * @returns {Promise<Buffer>} - Returns a promise that resolves with the enhanced image buffer
 */
async function remini(imageBuffer, enhancementType) {
    return new Promise(async (resolve, reject) => {
        // Valid enhancement types
        const validTypes = ['enhance', 'recolor', 'dehaze'];
        
        // Default to 'enhance' if invalid type provided
        if (!validTypes.includes(enhancementType)) {
            enhancementType = validTypes[0];
        }

        // Create form data for the request
        const formData = new FormData();
        
        // Add required form fields
        formData.append('model_version', 1, {
            'Content-Transfer-Encoding': 'binary',
            'contentType': 'multipart/form-data; charset=utf-8'
        });

        formData.append('image', Buffer.from(imageBuffer), {
            'filename': 'enhance_image_body.jpg',
            'contentType': 'image/jpeg'
        });

        // Set up the request options
        const options = {
            hostname: 'inferenceengine.vyro.ai',
            path: `/${enhancementType}`,
            method: 'POST',
            headers: {
                ...formData.getHeaders(),
                'User-Agent': 'okhttp/4.9.3',
                'Connection': 'Keep-Alive',
                'Accept-Encoding': 'gzip'
            }
        };

        // Make the HTTPS request
        const req = https.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(Buffer.concat(chunks));
                } else {
                    reject(new Error(`HTTP Error: ${res.statusCode}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        // Write form data to the request
        formData.pipe(req);
    });
}

// Example usage:
// const fs = require('fs');
// async function example() {
//     try {
//         const imageBuffer = fs.readFileSync('input.jpg');
//         const enhancedImage = await remini(imageBuffer, 'enhance');
//         fs.writeFileSync('output.jpg', enhancedImage);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

module.exports = { remini };