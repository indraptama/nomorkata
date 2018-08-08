function nomorKata(n) {

  let nomor = n.toString();
  let result = null;
  let nLength = nomor.length;
  let nSplit = nomor.split('');
  let words = []

  const keSembilanBelas = [
    'nol',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
    'dua belas',
    'tiga belas',
    'empat belas',
    'lima belas',
    'enam belas',
    'tujuh belas',
    'delapan belas',
    'sembilan belas',
  ]

  const kelipatan = [
    '',
    'puluh',
    'ratus',
    'ribu',
    'juta',
    'miliar',
    'triliun'
  ]

  if ( nLength <= 2 && n <= 19 ) {
    result = keSembilanBelas[n]
  }

  for (const nWord of nomor) {
    
    words.push(keSembilanBelas[nWord])
    result = words;
  }

  return result;
}

console.log(nomorKata(1234))