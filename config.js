const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ge8GBKqa#IT6SGhLA3ZQrIHfG1DAl0MlMgbZeWnNE7DsL2ZZLab8",
MONGODB: process.env.MONGODB || "mongodb://mongo:PDkOJxKWbVHUcNOvwdemPNqrAHlGCiZt@autorack.proxy.rlwy.net:57894",
};
