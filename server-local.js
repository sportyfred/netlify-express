'use strict';

const app = require('./express/server');
const play = require('audio-play');
const load = require('audio-loader');
 


app.listen(3000, () => console.log('Local app listening on port 3000!'));
