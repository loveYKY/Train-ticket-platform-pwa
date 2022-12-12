const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');
var cors = require('cors')

const app = express();
app.use(cors())

apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(5000);