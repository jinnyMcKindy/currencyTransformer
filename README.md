#Currency Transformer

Transforms days, numbers to Russian words and appends currency

```js
import obj from './index.js'

var day = obj.convertDayToWords('10'); // 10 (Десять) дней
var num = obj.convertNumToWords('10'); // 10 (Десять)
var curr = obj.getNominal('10', 'US'); // 10 (Десять) долларов США
console.log(day, num, curr);
```
Possible currencies: 
- ruble -> российских рублей
- US -> долларов США
- euro -> евро
- pounds -> фунтов стерлингов


[NPM](https://www.npmjs.com/package/currencytransformer)