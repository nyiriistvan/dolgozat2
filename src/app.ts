/*
File: app.ts
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
    alert("asd");
    const aSide = document.querySelector('#aSide') as HTMLInputElement;
    const bSide = document.querySelector('#bSide') as HTMLInputElement;
    const cSide = document.querySelector('#cSide') as HTMLInputElement;
    const dSide = document.querySelector('#dSide') as HTMLInputElement;

    let aNum: number = Number(aSide.value);
    let bNum : number = Number(bSide.value);
    let cNum : number = Number(cSide.value);
    let dNum : number = Number(dSide.value);

    let area = calcArea(aNum, bNum, cNum, dNum);
    vegeredmeny.textContent = "Terület: " + String(area);
    aSide.value = "";
    bSide.value = "";
    cSide.value = "";
    dSide.value = "";
});

function calcArea(aSide: number, bSide: number, cSide: number, dSide: number):number {
    return (aSide + cSide / 4 * (aSide - cSide)) * Math.sqrt((aSide + bSide - cSide + dSide) * 
    (aSide - bSide - cSide + dSide) * (aSide + bSide - cSide - dSide) * (- aSide + bSide + cSide + dSide));
}