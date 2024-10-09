const os      = require('os');
const express = require('express');
const app     = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.status(200).json({
        'os-hostname': os.hostname(),
        'os-machine' : os.machine(),
        'os-userinfo': os.userInfo(),
        'os-version' : os.version(),
        'os-platform': os.platform(),
        'os-type'    : os.type(),
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});