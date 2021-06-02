// import 'core-js';  // NOTE: babel で useBuiltIns: 'entry' にする場合に必要
const moment = require('moment');
import axios from 'axios';

class MyClass {
  private Str : string;
  constructor(str:string) {
    this.Str = str;
  }
  /**
   * GetValue
   */
  public GetValue(): string {
    return this.Str;
  }
  /**
   * GetValue
   */
   public ThrowException() {
    let tmp = 5 / 0;
  }
}
const now = moment();
(async () => {
  var cls = new MyClass("TACOS");
  console.log(cls.GetValue());
  cls.ThrowException();
  const res = await axios.get('https://www.google.com/search?q=test');
  console.log({
    from: 'content.js',
    now: now.format('YYYY/MM/DD HH:mm:ss'),
    data: res.data,
  })
})();
