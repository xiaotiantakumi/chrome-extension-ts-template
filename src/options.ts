// import 'core-js';  // NOTE: babel で useBuiltIns: 'entry' にする場合に必要
const moment = require('moment');
import axios from 'axios';
import './assets/stylesheets/options.scss';

const now = moment();
(async () => {
  const res = await axios.get('https://www.google.com/search?q=test');
  console.log({
    from: 'options.js',
    now: now.format('YYYY/MM/DD HH:mm:ss'),
    data: res.data,
  })
})();
