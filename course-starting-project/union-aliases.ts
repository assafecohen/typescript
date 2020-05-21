type Combineable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combineable,
  input2: Combineable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 == 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combiendAges = combine(30, 26, 'as-number');
console.log(combiendAges);
const combiendNames = combine('max', 'assaf', 'as-number');
console.log(combiendNames);
