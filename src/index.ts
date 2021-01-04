/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import nomorToKata from './nomor-to-kata';
console.log(nomorToKata(25870.524));

const theInput = document.getElementById('inputNumber');
const theButton = document.getElementById('btn');
const theContainer = document.getElementById('result');
theButton.addEventListener("click", (e) => {
  let test = parseFloat(theInput.value);
  
  theContainer.innerHTML = nomorToKata(test);
}, false);