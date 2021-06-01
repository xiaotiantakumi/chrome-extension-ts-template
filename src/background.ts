// import 'core-js';  // NOTE: babel で useBuiltIns: 'entry' にする場合に必要
const moment = require('moment');
import axios from 'axios';

const now = moment();
(async () => {
  const res = await axios.get('https://www.google.com/search?q=test');
  console.log({
    from: 'background.js',
    now: now.format('YYYY/MM/DD HH:mm:ss'),
    data: res.data,
  })
})();
