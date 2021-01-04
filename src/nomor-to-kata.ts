export function nomorToKata(inputNum: number) {

  let result: string = '';

  const satuan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  const belasan = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  const puluhan = ['dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
  const threeDigit = ['', 'ribu', 'juta', 'milyar', 'triliun'];

  // Send error message if inputNum is not a Number
  if (typeof (inputNum) !== 'number') return 'Anda tidak input angka';


  // Convert Number to String
  let numString = inputNum.toString();
  numString = numString.replace(/[\, ]/g, '');

  // Check if Number is parse-able
  let numIndex = numString.indexOf('.');
  if (numIndex === -1) {
    numIndex = numString.length;
  }
  // throw error if number is to more than 15 digit
  if (numIndex >= 15) {
    return 'Jumlah Angka terlalu besar'
  }


  // Create Number Array
  let numberArray: any = [];
  let numberStringArray = numString.split('');
  for (let i = 0; i < numberStringArray.length; i++) {
    const element = parseFloat(numberStringArray[i]);
    numberArray = [...numberArray, element];
  }


  let sk = 0;

  for (let i = 0; i < numIndex; i++) {
    if ((numIndex - i) % 3 === 2) {
      if (numberArray[i] === 1) {
        result += belasan[Number(numberArray[i + 1])] + ' ';
        i++;
        sk = 1;
      } else if (numberArray[i] !== 0) {
        result += puluhan[numberArray[i] - 2] + ' ';
        sk = 1
      }
    } else if (numberArray[i] !== 0) {
      result += satuan[numberArray[i]] + ' ';
      if ((numIndex - i) % 3 === 0) {
        result += 'ratus '
      }
      sk = 1
    }

    if ((numIndex - i) % 3 === 1) {
      if (sk) result += threeDigit[(numIndex - i - 1) / 3] + ' ';
      sk = 0;
    }
  }

  // Koma
  if(numIndex !== numString.length) {
    let newNumberIndex = numString.length;
    result += 'koma '
    for (let i = numIndex+1; i < newNumberIndex; i++) {
      result += satuan[numberArray[i]] + ' ';
    }
  }

  return result.replace(/\s+/g, ' ').replace("satu ratus", "seratus").replace("satu ribu", "seribu").replace("satu puluh", "sepuluh");
}

export default nomorToKata