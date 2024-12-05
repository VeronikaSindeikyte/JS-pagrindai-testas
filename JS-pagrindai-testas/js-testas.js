/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log();
console.log('-------------- 1 UZDUOTIS -------------');
console.log();


function euraiIDolerius (eurai) {
    let doleriai = eurai / 0.95;
    return doleriai;
}

let naujaEuruSuma = Math.floor(Math.random() * 1000 + 1);

console.log("Eurų suma, kurią konvertuosime:", naujaEuruSuma);
console.log(naujaEuruSuma, "EU yra", euraiIDolerius(naujaEuruSuma), "USD.");

euraiIDolerius(naujaEuruSuma);


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

console.log();
console.log('-------------- 2 UZDUOTIS -------------');
console.log();

function doleriaiIEurus (doleriai) {
    let eurai = 0.95 * doleriai;
    return eurai;
}

let naujaDoleriuSuma = Math.floor(Math.random() * 1000 + 1);
console.log("Dolerių suma, kurią konvertuosime:", naujaDoleriuSuma);
console.log(naujaDoleriuSuma, "USD yra", doleriaiIEurus(naujaDoleriuSuma), "EU.");

doleriaiIEurus (naujaDoleriuSuma);


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

console.log();
console.log('-------------- 3 UZDUOTIS -------------');
console.log();


function calculateBMI (ugis, svoris) {
    let BMI = svoris / (ugis ** 2);
    if (BMI > 25) {
        console.log("Viršsvoris = BMI > 25");
        return BMI;
    } else if (BMI >= 18.5 && BMI < 25) {
        console.log("Normalu = 18.5 <= BMI < 25");
        return BMI;
    } else {
        console.log("Per mažas svoris = BMI < 18.5");
        return BMI;
    }
}

calculateBMI (1.75, 65);



/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log();
console.log('-------------- 4 UZDUOTIS -------------');
console.log();


function convertAge (age) {
    let ageInDays = age * 365;
    let ageInHours = ageInDays * 24;
    let ageInMinutes = ageInHours * 60;
    let ageInSeconds = ageInMinutes * 60;
    console.log("Amžius", age, "yra", ageInDays, "dienos,", ageInHours, "valandos,", ageInMinutes, "minutės,", ageInSeconds, "sekundės.")
}

convertAge(28);


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
