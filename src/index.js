module.exports = function toReadable(number) {
  number = 9;
  const single = {
    0: '',
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  const tens = {
    0: '',
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  const tys = {
    0: '',
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };

  const hundreds = {
    0: '',
    100: "hundred"
  };

  let words = '';
  let arr = [];

  if (number < 20) {
    words = tens[number];
  } else if (number < 100) {
    arr = number.toString().split('');
    words = tys[+arr[0] * 10] + ' ' + tens[+arr[1]];
  } else if (number % 100 === 0) {
    arr = number.toString().split('');
    words = tens[+arr[0]] + ' hundred';
  } else {
    arr = number.toString().split('');
    words = tens[+arr[0]] + ' hundred ' + tys[+arr[1] * 10] + ' ' + tens[+arr[2]];
  }

  console.log(words);

};