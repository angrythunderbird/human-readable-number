module.exports = function toReadable(number) {

  if (number === 0) {
    return 'zero';
  }

  const single = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  const tens = {
    0: '',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  let words = '';
  let arr = number.toString().split('');
  let teensVar = 0;
  if (arr[1] === '1') {
    teensVar = +arr[1] * 10 + +arr[2];
  } else teensVar = +arr[1];

  if (number < 20) {
    words = single[number];
  } else if (number < 100) {
    words = tens[+arr[0]] + ' ' + single[+arr[1]];
  } else if (number % 100 === 0) {
    words = single[+arr[0]] + ' hundred';
  } else if (arr[1] === '0') {
    words = single[+arr[0]] + ' hundred ' + single[+arr[2]];
  } else if (arr[1] === '1') {
    words = single[+arr[0]] + ' hundred ' + single[teensVar];
  } else if (number % 10 === 0) {
    words = single[+arr[0]] + ' hundred ' + tens[+arr[1]];
  } else words = single[+arr[0]] + ' hundred ' + tens[+arr[1]] + ' ' + single[+arr[2]];

  return words.trim();

};