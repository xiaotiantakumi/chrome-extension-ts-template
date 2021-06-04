import moment from 'moment';
import axios from 'axios';
import {SampleClass} from './sampleClass';

const now = moment();
(async () => {
  var cls = new SampleClass("TACOS");
  console.log(cls.GetValue());
  const res = await axios.get('https://www.google.com/search?q=test');
  console.log({
    from: 'content.ts',
    now: now.format('YYYY/MM/DD HH:mm:ss'),
    data: res.data,
  })
})();
