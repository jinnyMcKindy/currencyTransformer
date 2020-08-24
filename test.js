import obj from './index.js'

var day = obj.convertDayToWords('10'); // 10 (Десять) дней
var num = obj.convertNumToWords('10'); // 10 (Десять)
var curr = obj.getNominal('10', 'US'); // 10 (Десять) долларов США
console.log(day, num, curr);