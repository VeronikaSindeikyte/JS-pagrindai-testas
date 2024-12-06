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
    let BMI = Math.round(svoris / (ugis ** 2));
    if (BMI > 25) {
        console.log("Viršsvoris (BMI > 25).");
        return BMI;
    } else if (BMI >= 18.5 && BMI < 25) {
        console.log("Normalus BMI");
        return BMI;
    } else {
        console.log("Per mažas svoris (BMI < 18.5).");
        return BMI;
    }
}

calculateBMI (1.75, 65);
let paskaiciuotiBMI = calculateBMI();
let tomoUgis = 1.8;
let tomoSvoris = 100;


console.log('Asmens ūgis yra -', tomoUgis, ', o svoris - ', tomoSvoris);
console.log('Šio asmens BMI yra:', calculateBMI(1.8, 100));
calculateBMI(tomoUgis, tomoSvoris);


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


console.log();
console.log('-------------- 4 UZDUOTIS (PAPILDYMAS) -------------');
console.log();

console.log('Paskaičiuoti amžių su keliamaisiais metais:');
console.log();

let dabartineData = new Date();

let dabartniaiMetai = dabartineData.getFullYear();
console.log(`Dabar yra ${dabartniaiMetai} metai.`);

function convertExactAge (gimimoMetai) {
    if (gimimoMetai % 4 === 0 || gimimoMetai % 400 === 0) {
        console.log("Šie metai yra keliamieji:", gimimoMetai);
        let kiekKartuBuvoKeliamieji = (dabartniaiMetai - gimimoMetai) / 4 + 1;
        let age = dabartniaiMetai - gimimoMetai;
        let ageInDays = age * 365 + kiekKartuBuvoKeliamieji;
        let ageInHours = ageInDays * 24;
        let ageInMinutes = ageInHours * 60;
        let ageInSeconds = ageInMinutes * 60;
        console.log("Amžius", age, "yra", ageInDays, "dienos,", ageInHours, "valandos,", ageInMinutes, "minutės,", ageInSeconds, "sekundės.");
    } else {
        console.log("Šie metai nėra keliamieji:", gimimoMetai);
        kiekKartuBuvoKeliamieji = (dabartniaiMetai - gimimoMetai) / 4;
        age = dabartniaiMetai - gimimoMetai;
        ageInDays = age * 365 + kiekKartuBuvoKeliamieji;
        ageInHours = ageInDays * 24;
        ageInMinutes = ageInHours * 60;
        ageInSeconds = ageInMinutes * 60;
        console.log("Amžius", age, "yra", ageInDays, "dienos,", ageInHours, "valandos,", ageInMinutes, "minutės,", ageInSeconds, "sekundės.");
    }
}

convertExactAge(1996);


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

console.log();
console.log('-------------- 5 UZDUOTIS -------------');
console.log();

function convertCelsiusToFahrenheit (celsius) {
    let fahrenheitas = Math.round(celsius * (9/5) + 32);
    return fahrenheitas;
}

let kazkokiaTemperatura = 32;
console.log("Temperatūra", kazkokiaTemperatura, "celsijais yra", convertCelsiusToFahrenheit(kazkokiaTemperatura), "fahrenheitu.");


function convertFahrenheitToCelsius (fahrenheitas) {
    let celsius = Math.round((fahrenheitas - 32) * (5/9));
    return celsius;
}

let temperaturafahrenheitais = 100;
console.log("Temperatūra", temperaturafahrenheitais, "fahrenheitais yra", convertFahrenheitToCelsius(temperaturafahrenheitais), "celsijų.");


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

console.log();
console.log('-------------- 6 UZDUOTIS -------------');
console.log();

let skaiciuEile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(skaiciuEile.join('-'));


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

console.log();
console.log('-------------- 7 UZDUOTIS -------------');
console.log();

let didejantiZvaigzdute = '';

for (let i = 0; i <= 4; i++) {
didejantiZvaigzdute = didejantiZvaigzdute + '*';
console.log(didejantiZvaigzdute);
}


/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

console.log();
console.log('-------------- 8 UZDUOTIS -------------');
console.log();


dabartineData = new Date();

let dabartinisMenesis = dabartineData.getMonth() + 1;
console.log("Dabartinis mėnesis:", dabartinisMenesis);

let dabartineDiena = dabartineData.getDate();
console.log("Dabartinė diena:", dabartineDiena);

let kaleduMenesis = 12;
let kaleduDiena = 25;

function likoDienuIkiKaledu (menesis, diena) {
    let likoMenesiu = kaleduMenesis - menesis;
    let likoDienu = kaleduDiena - diena;
    console.log(`Iki Kalėdų liko ${likoMenesiu} mėnesių ir ${likoDienu} dienų.`)
}

console.log();
likoDienuIkiKaledu(dabartinisMenesis, dabartineDiena);
console.log();

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

console.log();
console.log('-------------- 9 UZDUOTIS -------------');
console.log();

let mokiniuVardai = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];
console.log(mokiniuVardai.join(','));
console.log(mokiniuVardai.join('+'));


/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

console.log();
console.log('-------------- 10 UZDUOTIS -------------');
console.log();

// ---------------- RANDOM DIDIOJI RAIDE --------------------

function getRandomLetterUpperCase () {
    const lettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * lettersUpperCase.length);
    return lettersUpperCase[randomIndex];
}

getRandomLetterUpperCase();
let randomDidziojiRaide = getRandomLetterUpperCase();
console.log('Atsitiktinė didžioji raidė:', randomDidziojiRaide);

// ---------------- RANDOM MAZOJI RAIDE --------------------

function getRandomLetterLowerCase () {
    const lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * lettersLowerCase.length);
    return lettersLowerCase[randomIndex];
}

getRandomLetterLowerCase();
let randomMazojiRaide = getRandomLetterLowerCase();
console.log('Atsitiktinė didžioji raidė:', randomMazojiRaide);


// ---------------- RANDOM SKAICIUS --------------------

function getRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    return randomNumber;
}

getRandomNumber();
let atsitiktinisSkaicius = getRandomNumber();
console.log('Atsitiktinis skaičius yra:', atsitiktinisSkaicius);


// ---------------- RANDOM SIMBOLIS --------------------

function getRandomSymbol () {
    const randomSymbol = "!@#$%^&*()_-+=[]{}|\\;:',.<>?/`~";
    const randomIndex = Math.floor(Math.random() * randomSymbol.length);
    return randomSymbol[randomIndex];
}

getRandomSymbol();
let atsitiktinisSimbolis = getRandomSymbol();
console.log('Atsitiktinis simbolis yra:', atsitiktinisSimbolis);


// ---------------- PASSWORDAS --------------------


function generatePassword () {
    let password = [];
    const randomIndex = Math.floor(Math.random() * password.length);
    for (let i = 1; i <= 2; i++) {
        password.splice(randomIndex, 0, getRandomLetterUpperCase());
        password.splice(randomIndex, 0, getRandomLetterLowerCase());
        password.splice(randomIndex, 0, getRandomNumber());
        password.splice(randomIndex, 0, getRandomSymbol());
    }

    return password.join('');
}


generatePassword();
let sugeneruotiSlaptazodi = generatePassword();
console.log('Jūsų slaptažodis yra:', sugeneruotiSlaptazodi);