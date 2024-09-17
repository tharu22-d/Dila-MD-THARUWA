const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aOBw1RRI#RqHgeMEgUw3rG_8JkiX2NcfW6950m71tTJ066O7W5ZU",
MONGODB: process.env.MONGODB || "mongodb://mongo:PDkOJxKWbVHUcNOvwdemPNqrAHlGCiZt@autorack.proxy.rlwy.net:57894",
};
