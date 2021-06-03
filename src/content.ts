const moment = require('moment');
import axios from 'axios';

const now = moment();
(async () => {
  // var cls = new SampleClass("TACOS");
  // console.log(cls.GetValue());
  // cls.ThrowException();
  const res = await axios.get('https://www.google.com/search?q=test');
  console.log({
    from: 'content.js',
    now: now.format('YYYY/MM/DD HH:mm:ss'),
    data: res.data,
  })
})();
