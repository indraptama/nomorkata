function nomorKata(n) {

  let nomor = n.toString();
  let result = null;
  let nLength = nomor.length;


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

  return result;
}

console.log(nomorKata(20))