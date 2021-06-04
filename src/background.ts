import moment from 'moment';
import axios from 'axios';

const now = moment();
(async () => {
  const res = await axios.get('https://www.google.com/search?q=test');
  console.log({
    from: 'background.ts',
    now: now.format('YYYY/MM/DD HH:mm:ss'),
    data: res.data,
  })
})();
