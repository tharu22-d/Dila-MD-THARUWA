const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "pyUQ0aRR#rMaDbCnaDbaaUIpTW8-qeIK_4dwQISKPPsw52NvqpeA",
MONGODB: process.env.MONGODB || "mongodb://mongo:PDkOJxKWbVHUcNOvwdemPNqrAHlGCiZt@autorack.proxy.rlwy.net:57894",
};
