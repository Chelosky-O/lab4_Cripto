// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://cripto.tiiny.site/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tiiny.site
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var texto = document.getElementsByTagName('p')[0].innerHTML;

    var KEY = texto.replace(/[^A-Z]+/g, "");

    console.log("La llave es: " + KEY);

    var realkey = CryptoJS.enc.Utf8.parse(KEY);

    const divs = document.querySelectorAll('div');
    var NUMBER = divs.length
    console.log("Los mensajes cifrados son: " + NUMBER);

    // Itera sobre los elementos y muestra sus IDs en la consola


    divs.forEach((div, index) => {
        var decrypted = CryptoJS.TripleDES.decrypt(div.id, realkey,{mode: CryptoJS.mode.ECB});
        var msg = decrypted.toString(CryptoJS.enc.Utf8);
        console.log(`Mensaje div ${index + 1}: ${div.id || 'Sin ID'} ${msg}`);
        var contenedor = document.createElement('div');
        contenedor.textContent = msg;
        document.body.appendChild(contenedor);

    });


})();