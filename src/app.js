/*
File: app.js
Author: Nyiri István
Copyright: 2022, Nyiri István
Group: Szoft_II_N
Date: 2022-10-26
Github: https://github.com/nyiriistvan
Licenc: GNU GPL
*/
const calcButton = document.querySelector('#calcButton');
const vegeredmeny = document.querySelector('#vegeredmeny');
calcButton.addEventListener('click', () => {
    const aSide = document.querySelector('#aSide');
    const bSide = document.querySelector('#bSide');
    const cSide = document.querySelector('#cSide');
    const dSide = document.querySelector('#dSide');
    let aNum = Number(aSide.value);
    let bNum = Number(bSide.value);
    let cNum = Number(cSide.value);
    let dNum = Number(dSide.value);
    let area = calcArea(aNum, bNum, cNum, dNum);
    vegeredmeny.textContent = "Terület: " + String(area);
    aSide.value = "";
    bSide.value = "";
    cSide.value = "";
    dSide.value = "";
});
function calcArea(aSide, bSide, cSide, dSide) {
    return (aSide + cSide / 4 * (aSide - cSide)) * Math.sqrt((aSide + bSide - cSide + dSide) *
        (aSide - bSide - cSide + dSide) * (aSide + bSide - cSide - dSide) * (-aSide + bSide + cSide + dSide));
}
