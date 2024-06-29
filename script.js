//Setting Options at window load
let array = ['m','Meter' , 'km' , 'Kilometer' , 'cm' , 'Centimeter' , 'mm' , 'Millimeter' , 'micro' , 'Micrometer' , 'nm' , 'Nanometer' , 'mile' , 'Mile' , 'yard' , 'Yard' , 'foot' , 'Foot' , 'inch' , 'Inch' , 'ly' , 'Light Year']
window.onload = function(){
    optionList(array);
}


//Initializing
let length = document.getElementById('length');
let temp = document.getElementById('temp');
let area = document.getElementById('area');
let volume = document.getElementById('volume');
let time = document.getElementById('time');
let weight = document.getElementById('weight');

let result=document.getElementById('result');
length.addEventListener('click', menuClick);
temp.addEventListener('click', menuClick);
area.addEventListener('click', menuClick);
volume.addEventListener('click',menuClick);
time.addEventListener('click', menuClick);
weight.addEventListener('click', menuClick);

let choice1=document.getElementById('choice1');
let choice2=document.getElementById('choice2');
let to=document.getElementById('to');
let from=document.getElementById('from');


//swapping units when arrow Clicked
document.getElementById('arrow').onclick = function() {
    let temp=choice1.value;
    choice1.value = choice2.value;
    choice2.value=temp;
    changeValue();
}

// Clear on menu click
length.addEventListener('click',clear);
temp.addEventListener('click',clear);
area.addEventListener('click',clear);
volume.addEventListener('click',clear);
weight.addEventListener('click',clear);
time.addEventListener('click',clear);
function clear(){
    from.value="";
    to.value="";
    result.style.display='none';
}

//changing 'from' and 'to' values during various events
choice1.addEventListener('change',changeValue)
choice2.addEventListener('change', changeValue);
from.addEventListener('input',changeValue);

function changeValue(){
    let text=from.value;
    let num=parseFloat(text).toString();
    if(isNaN((parseFloat(text))) && text!=="-"){
        to.value = "";
        result.style.display="none";
        if(text!==""){
            result.style.display="block";
            result.style.color="white";
            result.style.backgroundColor="red";
            result.textContent="Enter a valid Number";
        }
        return;
    }
    else if(text.length!==num.length && (text[text.length -1]!=="." || text.length-1!==num.length)){
        // checks non-numerical characters in the input
        to.value="";
        result.style.color="white";
        result.style.backgroundColor="red";
        result.textContent="Enter a valid Number";
        return;
    }
    result.style.color="black";
    result.style.backgroundColor="springgreen";
    result.style.display= "block";
    if(getComputedStyle(length).color==='rgb(0, 0, 255)'){
        lengthCalc(text);
    }
    else if(getComputedStyle(temp).color==='rgb(0, 0, 255)'){
        tempCalc(text);
    }
    else if(getComputedStyle(area).color==='rgb(0, 0, 255)') {
        areaCalc(text);
    }
    else if(getComputedStyle(weight).color==='rgb(0, 0, 255)') {
        weightCalc(text);
    }
    else if(getComputedStyle(time).color==='rgb(0, 0, 255)'){
        timeCalc(text);
    }
    else if(getComputedStyle(volume).color==='rgb(0, 0, 255)'){
        volumeCalc(text);
    }
    result.innerHTML="RESULT: &nbsp"+from.value+" "+choice1.options[choice1.selectedIndex].text+" = "+to.value+" "+choice2.options[choice2.selectedIndex].text;
}


//changing button color when Menu clicked
function menuClick() {
    let button=event.target;
    button.style.backgroundColor = 'floralwhite';
    button.style.color = 'blue';
    let a=['length','temp','area','volume','weight','time'];
    for(let i=0;i<6;i++){
        let otherButton=document.getElementById(a[i]);
        if(otherButton===button)
            continue;
        else{
            otherButton.style.backgroundColor='#0541d8';
            otherButton.style.color = 'white';
        }
    }
}

//Changing Options when Menu clicked
length.addEventListener('click',function() {
    let array = ['m','Meter' , 'km' , 'Kilometer' , 'cm' , 'Centimeter' , 'mm' , 'Millimeter' , 'micro' , 'Micrometer' , 'nm' , 'Nanometer' , 'mile' , 'Mile' , 'yard' , 'Yard' , 'foot' , 'Foot' , 'inch' , 'Inch' , 'ly' , 'Light Year']
    optionList(array);
})
temp.addEventListener('click',function(){
    let array=['c','Celsius','k','Kelvin','f','Fahrenheit']
    optionList(array);
})
area.addEventListener('click',function(){
    let array=['sqm','Square Meter','sqkm', 'Square Kilometer','sqcm', 'Square Centimeter','sqmm', 'Square Millimeter','sqmicro', 'Square Micrometer','hect', 'Hectare','sqmile', 'Square Mile','sqyard', 'Square Yard','sqfoot', 'Square Foot','sqinch', 'Square Inch','acre', 'Acre'];
    optionList(array);
})
volume.addEventListener('click',function(){
    let array=['cubicm','Cubic Meter', 'cubickm','Cubic Kilometer','cubiccm', 'Cubic Centimeter','cubicmm', 'Cubic Millimeter','l', 'Liter','ml', 'Milliliter','usG', 'US Gallon','usQ', 'US Quart','usP', 'US Pint','usC', 'US Cup','usF', 'US Fluid Ounce']
    optionList(array);
})
weight.addEventListener('click',function(){
    let array=['kg','Kilogram' , 'g' , 'Gram' , 'mg' , 'Milligram' , 'metricton' , 'Metric Ton' , 'longton' , 'Long Ton' , 'shortton' , 'Short Ton' , 'pound' , 'Pound' , 'ounce' , 'Ounce' , 'carat' , 'Carat' , 'amu' , 'Atomic Mass Unit']
    optionList(array);
})
time.addEventListener('click',function(){
    let array=['s','Second' , 'ms' , 'Millisecond' , 'micros' , 'Microsecond' , 'nanos' , 'Nanosecond' , 'picos' , 'Picosecond' , 'min' , 'Minute' , 'hr' , 'Hour' , 'day' , 'Day' , 'week' , 'Week' , 'month' , 'Month' , 'year' , 'Year' ];
    optionList(array);
})
function optionList(array) {
    choice1.innerHTML = '';
    choice2.innerHTML = '';
    for (let i = 0; i < array.length; i += 2) {
        let newElement = document.createElement('option');
        newElement.value = array[i];
        newElement.textContent = array[i + 1];
        choice1.appendChild(newElement.cloneNode(true));
        choice2.appendChild(newElement);
    }
}

//change theme
let sun=document.getElementById('sun');
sun.style.display='none';
let moon=document.getElementById('moon');
sun.addEventListener('click',changeTheme);
moon.addEventListener('click',changeTheme);
moon.click();
function changeTheme(){
    if(sun.style.display==='none'){
        document.body.style.backgroundImage='url("Images%20and%20Icons/dark_bgImg.jpg")';
        sun.style.display='block';
        moon.style.display='none';
        document.getElementById('arrow').src = 'Images%20and%20Icons/white_arrow.png';
        document.getElementById('label1').style.color='white';
        document.getElementById('label2').style.color='white';
        from.style.opacity='10';
        document.getElementById('box').style.backgroundColor='rgba(25, 25, 112, 0.75)';
        if (window.matchMedia('(max-width: 500px)').matches) {
            document.getElementById('header').style.color = 'rgba(255,255,255,.8)';
        }
    }
    else {
        document.body.style.backgroundImage= 'url("Images%20and%20Icons/light_bgImg.jpg")';
        sun.style.display='none';
        moon.style.display='block';
        document.getElementById('arrow').src='Images%20and%20Icons/black_arrow.png';
        document.getElementById('label1').style.color='black';
        document.getElementById('label2').style.color='black';
        document.getElementById('box').style.backgroundColor='floralwhite';
        document.getElementById('box').style.opacity='.8';
        document.getElementById('header').style.color='blue';
    }
}


//calculating result for menuSelected=length
function lengthCalc(text){
    let value1 = choice1.value;
    let value2 = choice2.value;
    let num=parseFloat(text);
    const lengthConversionTable={
        m:{ m: num, km: num*0.001, cm: num*100, mm: num*1000, micro: num*1000000, nm: num*1000000000, mile: num*0.0006213689, yard: num*1.0936132983, foot: num*3.280839895, inch: num*39.37007874, ly:  num*1.057008707E-16},
        km:{ m: num*1000, km: num, cm: num*100000, mm: num*1000000, micro: num*1000000000, nm: num*1000000000000, mile: num*0.6213688756, yard: num*1093.6132983, foot: num*3280.839895, inch: num*39370.07874, ly:  num*1.057008707E-13},
        cm:{ m: num*0.01, km: num*0.00001, cm: num, mm: num*10, micro: num*10000, nm: num*10000000, mile: num*0.0000062137, yard: num*0.010936133, foot: num*0.032808399, inch: num*0.3937007874, ly:  num*1.057008707E-18},
        mm:{ m: num*0.001, km: num*0.000001, cm: num*0.1, mm: num, micro: num*1000, nm: num*1000000, mile: num*6.213688756E-7, yard: num*0.0010936133, foot: num*0.0032808399, inch: num*0.0393700787, ly:  num*1.057008707E-19},
        micro:{ m: num*0.000001, km: num*9.999999999E-10, cm: num*0.0001, mm: num*0.001, micro: num, nm: num*1000, mile: num*6.213688756E-10, yard: num*0.0000010936, foot: num*0.0000032808, inch: num*0.0000393701, ly:  num*1.057008707E-22},
        nm:{ m: num*1.E-9, km: num*1.E-12, cm: num*1.E-7, mm: num*0.000001, micro: num*0.001, nm: num, mile: num*6.213688756E-13, yard: num*1.093613298E-9, foot: num*3.280839895E-9, inch: num*3.937007874E-8, ly:  num*1.057008707E-25},
        mile:{ m: num*1609.35, km: num*1.60935, cm: num*160935, mm: num*1609350, micro: num*1609350000, nm: num*1609350000000, mile: num, yard: num*1760.0065617, foot: num*5280.019685, inch: num*63360.23622, ly:  num*1.701096963E-13},
        yard:{ m: num*0.9144, km: num*0.0009144, cm: num*91.44, mm: num*914.4, micro: num*914400, nm: num*914400000, mile: num*0.0005681797, yard: num, foot: num*3, inch: num*36, ly:  num*9.665287622E-17},
        foot:{ m: num*0.3048, km: num*0.0003048, cm: num*30.48, mm: num*304.8, micro: num*304800, nm: num*304800000, mile: num*0.0001893932, yard: num*0.3333333333, foot: num, inch: num*12, ly:  num*3.22176254E-17},
        inch:{ m: num*0.0254, km: num*0.0000254, cm: num*2.54, mm: num*25.4, micro: num*25400, nm: num*25400000, mile: num*0.0000157828, yard: num*0.0277777778, foot: num*0.0833333333, inch: num, ly:  num*2.684802117E-18},
        ly:{ m: num*9460660000000000, km: num*9460660000000, cm: num*946066000000000000, mm: num*9460660000000000000, micro: num*9.46066E+21, nm: num*9.460659999E+24, mile: num*5878559666946, yard: num*10346303587051618, foot: num*31038910761154856, inch: num*372466929133858300, ly:  num},
    }
    to.value=lengthConversionTable[value1][value2];
}

//Calculating result for menuSelected=temperature
function tempCalc(text) {
    let value1 = choice1.value;
    let value2 = choice2.value;
    let num = parseFloat(text);
    const tempConversionTable={
        c:{ c: num, k: num+273.15, f: ((9/5)*(num))+32},
        k:{ c: num-273.15, k: num, f: ((9/5)*(num-273.15))+32},
        f:{ c: (num-32)/1.8, k: ((num-32)/1.8)+273.15, f: num}
    }
    to.value=tempConversionTable[value1][value2];
}

//Calculating result for menuSelected=area
function areaCalc(text){
    let value1 = choice1.value;
    let value2 = choice2.value;
    let num=parseFloat(text);
    const areaConversionTable={
        sqm:{ sqm: num, sqkm: num*0.000001, sqcm: num*10000, sqmm: num*1000000, sqmicro: num*1000000000000, hect: num*0.0001, sqmile: num*3.861018768E-7, sqyard: num*1.1959900463, sqfoot: num*10.763910417, sqinch: num*1550.0031, acre: num*0.0002471054},
        sqkm:{ sqm: num*1000000, sqkm: num, sqcm: num*10000000000, sqmm: num*1000000000000, sqmicro: num*1000000000000000000, hect: num*100, sqmile: num*0.3861018768, sqyard: num*1195990.0463, sqfoot: num*10763910.417, sqinch: num*1550003100, acre: num*247.10538147},
        sqcm:{ sqm: num*0.0001, sqkm: num*1.E-10, sqcm: num, sqmm: num*100, sqmicro: num*100000000, hect: num*1.E-8, sqmile: num*3.861018768E-11, sqyard: num*0.000119599, sqfoot: num*0.001076391, sqinch: num*0.15500031, acre: num*2.471053814E-8},
        sqmm:{ sqm: num*0.000001, sqkm: num*1.E-12, sqcm: num*0.01, sqmm: num, sqmicro: num*1000000, hect: num*9.999999999E-11, sqmile: num*3.861018768E-13, sqyard: num*0.000001196, sqfoot: num*0.0000107639, sqinch: num*0.0015500031, acre: num*2.471053814E-10},
        sqmicro:{ sqm: num*1.E-12, sqkm: num*1.E-18, sqcm: num*9.999999999E-9, sqmm: num*0.000001, sqmicro: num, hect: num*1.E-16, sqmile: num*3.861018768E-19, sqyard: num*1.195990046E-12, sqfoot: num*1.076391041E-11, sqinch: num*1.5500031E-9, acre: num*2.471053814E-16},
        hect:{ sqm: num*10000, sqkm: num*0.01, sqcm: num*100000000, sqmm: num*10000000000, sqmicro: num*10000000000000000, hect: num, sqmile: num*0.0038610188, sqyard: num*11959.900463, sqfoot: num*107639.10417, sqinch: num*15500031, acre: num*2.4710538147},
        sqmile:{ sqm: num*2589990, sqkm: num*2.58999, sqcm: num*25899900000, sqmm: num*2589990000000, sqmicro: num*2589990000000000000, hect: num*258.999, sqmile: num, sqyard: num*3097602.26, sqfoot: num*27878420.34, sqinch: num*4014492529, acre: num*640.00046695},
        sqyard:{ sqm: num*0.83612736, sqkm: num*8.3612736E-7, sqcm: num*8361.2736, sqmm: num*836127.36, sqmicro: num*836127360000, hect: num*0.0000836127, sqmile: num*3.228303429E-7, sqyard: num, sqfoot: num*9, sqinch: num*1296, acre: num*0.0002066116},
        sqfoot:{ sqm: num*0.0000229568, sqkm: num*9.290304E-8, sqcm: num*929.0304, sqmm: num*92903.04, sqmicro: num*92903040000, hect: num*0.0000092903, sqmile: num*3.58700381E-8, sqyard: num*0.1111111111, sqfoot: num, sqinch: num*144, acre: num*0.0000229568},
        sqinch:{ sqm: num*0.00064516, sqkm: num*6.4516E-10, sqcm: num*6.4516, sqmm: num*645.16, sqmicro: num*645160000, hect: num*6.4516E-8, sqmile: num*2.490974868E-10, sqyard: num*0.0007716049, sqfoot: num*0.0069444444, sqinch: num, acre: num*1.594225079E-7},
        acre:{ sqm: num*4046.8564224, sqkm: num*0.0040468564, sqcm: num*40468564.224, sqmm: num*4046856422.4, sqmicro: num*4046856422400000, hect: num*0.4046856422, sqmile: num*0.0015624989, sqyard: num*4840, sqfoot: num*43560, sqinch: num*6272640, acre: num}
    }
    to.value=areaConversionTable[value1][value2];
}

//Calculating result for menuSelected=weight
function weightCalc(text){
    let value1=choice1.value;
    let value2=choice2.value;
    let num=parseFloat(text);
    const weightConversionTable={
        kg: {kg: num, g: num*1000, mg: num*1000000, metricton: num*0.001, longton: num*0.0009842073, shortton: 0.0011023122, pound: 2.2046244202, ounce: 35.273990723, carat: 5000, amu: 6.022136652E+26 },
        g: {kg: num*0.001, g: num, mg: num*1000, metricton: num*0.000001, longton: num*9.842073304E-7, shortton: 0.0000011023, pound: 0.0022046244, ounce: 0.0352739907, carat: 5, amu: 6.022136652E+23 },
        mg: {kg: num*0.000001, g: num*0.001, mg: num, metricton: num*9.999999999E-10, longton: num*9.842073304E-10, shortton: 1.10231221E-9, pound: 0.0000022046, ounce: 0.000035274, carat: 0.005, amu: 602213665200000000000 },
        metricton: {kg: num*1000, g: num*1000000, mg: num*1000000000, metricton: num, longton: num*0.9842073304, shortton: 1.1023122101, pound: 2204.6244202, ounce: 35273.990723, carat: 5000000, amu: 6.022136652E+29 },
        longton: {kg: num*1016.04608, g: num*1016046.08, mg: num*1016046080, metricton: num*1.01604608, longton: num, shortton: 1.12, pound: 2240, ounce: 35840, carat: 5080230.4, amu:  6.118768338E+29},

        shortton: { kg: num*907.184, g: num*907184, mg: num*907184000, metricton: num*0.907184, longton: num*0.8928571429, shortton: num, pound: num*2000, ounce: num*32000, carat: num*4535920, amu: num*5.463186016e+29},
        pound: { kg: num*0.453592, g: num*453.592, mg: num*453592, metricton: num*0.000453592, longton: num*0.000446286, shortton: num*0.0005, pound: num, ounce: num*16, carat: num*2267.96, amu: num*2.731593008e+26},
        ounce: { kg: num*0.0283495, g: num*28.3495, mg: num*28349.5, metricton: num*0.0000283495, longton: num*0.0000279018, shortton: num*0.00003125, pound: num*0.0625, ounce: num, carat: num*141.7475, amu: num*1.70724563e+25 },
        carat: { kg: num*0.0002, g: num*0.2, mg: num*200, metricton: num*2e-7, longton: num*1.96841466e-7, shortton: num*2.20462442e-7, pound: num*0.0004409249, ounce: num*0.0070547981, carat: num, amu: num*1.20442733E+23 },
        amu: { kg: num*1.660540199e-27, g: num*1.660540199e-24, mg: num*1.660540199e-21, metricton: num*1.660540199e-30, longton: num*1.634315837e-30, shortton: num*1.830433737e-30, pound: num*3.660867475e-27, ounce: num*5.85738796e-26, carat: num*8.302700999e-24, amu: num }
    }
    to.value=weightConversionTable[value1][value2];
}

//Calculating result for menuSelected=time
function timeCalc(text){
    let value1=choice1.value;
    let value2=choice2.value;
    let num=parseFloat(text);
    const timeConversionTable={
        s: { s: num, ms: num*1000, micros: num*1000000, nanos: num*1000000000, picos: num*1000000000000, min: num*0.0166666667, hr: num*0.0002777778, day: num*0.0000115741, week: num*0.0000016534, month: num*3.802570537E-7, year: num*3.168808781E-8 },
        ms: { s: num*0.001, ms: num, micros: num*1000, nanos: num*1000000, picos: num*1000000000, min: num*0.0000166667, hr: num*2.777777777e-7, day: num*1.157407407e-8, week: num*1.653439153e-9, month: num*3.802570537e-10, year: num*3.168808781e-11 },
        micros: { s: num*0.000001, ms: num*0.001, micros: num, nanos: num*1000, picos: num*1000000, min: num*1.666666666e-8, hr: num*2.77777777e-10, day: num*1.157407407e-11, week: num*1.653439153e-12, month: num*3.802570537E-13, year: num*3.168808781E-14 },
        nanos: { s: num*1e-9, ms: num*0.000001, micros: num*0.001, nanos: num, picos: num*1000, min: num*1.666666666e-11, hr: num*2.777777777e-13, day: num*1.157407407e-14, week: num*1.653439153e-15, month: num*3.802570537e-16, year: num*3.168808781e-17 },
        picos: { s: num*1e-12, ms: num*1e-9, micros: num*0.000001, nanos: num*0.001, picos: num, min: num*1.666666666e-14, hr: num*2.777777777e-16, day: num*1.157407407e-17, week: num*1.653439153e-18, month: num*3.802570537e-19, year: num*3.168808781e-20 },
        min: { s: num*60, ms: num*60000, micros: num*60000000, nanos: num*60000000000, picos: num*60000000000000, min: num, hr: num*0.0166666667, day: num*0.0006944444, week: num*0.0000992063, month: num*0.0000228154, year: num*0.0000019013 },
        hour: { s: num*3600, ms: num*3600000, micros: num*3600000000, nanos: num*3600000000000, picos: num*3600000000000000, min: num*60, hr: num, day: num*0.0416666667, week: num*0.005952381, month: num*0.0013689254, year: num*0.0001140771 },
        day: { s: num*86400, ms: num*86400000, micros: num*86400000000, nanos: num*86400000000000, picos: num*86400000000000000, min: num*1440, hr: num*24, day: num, week: num*0.1428571429, month: num*0.0328542094, year: num*0.0027378508 },
        week: { s: num*604800 ,ms: num*604800000 ,micros: num*604800000000 ,nanos: num*604800000000000 ,picos: num*604800000000000000 ,min: num*10080 ,hr: num*168 ,day: num*7 ,week: num ,month: num*0.2299794661 ,year: num*0.0191649555 },
        month: { s: num*2629800 ,ms: num*2629800000 ,micros: num*2629800000000 ,nanos: num*2629800000000000 ,picos: num*2629800000000000000 ,min: num*43830 ,hr: num*730.5 ,day: num*30.4375 ,week: num*4.3482142857 ,month: num ,year: num*0.0833333333 },
        year: { s: num*31557600 ,ms: num*31557600000 ,micros: num*31557600000000 ,nanos: num*31557600000000000 ,picos: num*31557600000000000000 ,min: num*525960 ,hr: num*8766 ,day: num*365.25 ,week: num*52.178571429 ,month: num*12 ,year: num }
    }
    to.value=timeConversionTable[value1][value2];
}

//Calculating result for menuSelected=volume
function volumeCalc(text){
    let value1=choice1.value;
    let value2=choice2.value;
    let num=parseFloat(text);
    const volumeConversionTable ={
        cubicm: {cubicm: num ,cubickm: num*1e-9 ,cubiccm: num*1000000 ,cubicmm: num*1000000000 ,l: num*1000 ,ml: num*1000000 ,usG: num*264.17217686 ,usQ: num*1056.6887074 ,usP: num*2113.3774149 ,usC: num*4226.7548297 ,usF: num*33814.038638 },
        cubickm: {cubicm: num*1000000000 ,cubickm: num ,cubiccm: num*1000000000000000 ,cubicmm: num*1000000000000000000 ,l: num*1000000000000 ,ml: num*1000000000000000 ,usG: num*264172176858 ,usQ: num*1056688707432 ,usP: num*2113377414864 ,usC: num*4226754829728 ,usF: num*33814038637823 },
        cubiccm: {cubicm: num*0.000001 ,cubickm: num*9.999999999e-16 ,cubiccm: num ,cubicmm: num*1000 ,l: num*0.001 ,ml: num ,usG: num*0.0002641722 ,usQ: num*0.0010566887 ,usP: num*0.0021133774 ,usC: num*0.0042267548 ,usF: num*0.0338140386 },
        cubicmm: {cubicm: num*1e-9 ,cubickm: num*1e-18 ,cubiccm: num*0.001 ,cubicmm: num ,l: num*0.000001 ,ml: num*0.001 ,usG: num*2.641721768e-7 ,usQ: num*0.0000010567 ,usP: num*0.0000021134 ,usC: num*0.0000042268 ,usF: num*0.000033814 },
        l: {cubicm: num*0.001 ,cubickm: num*1e-12 ,cubiccm: num*1000 ,cubicmm: num*1000000 ,l: num ,ml: num*1000 ,usG: num*0.2641721769 ,usQ: num*1.0566887074 ,usP: num*2.1133774149 ,usC: num*4.2267548297 ,usF: num*33.814038638 },
        ml: {cubicm: num*0.000001 ,cubickm: num*9.999999999e-16 ,cubiccm: num ,cubicmm: num*1000 ,l: num*0.001 ,ml: num ,usG: num*0.0002641722 ,usQ: num*0.0010566887 ,usP: num*0.0021133774 ,usC: num*0.0042267548 ,usF: num*0.0338140386 },
        usG: {cubicm: num*0.00378541 ,cubickm: num*3.78541e-12 ,cubiccm: num*3785.41 ,cubicmm: num*3785410 ,l: num*3.78541 ,ml: num*3785.41 ,usG: num ,usQ: num*4 ,usP: num*8 ,usC: num*16 ,usF: num*128 },
        usQ: {cubicm: num*0.0009463525 ,cubickm: num*9.463525E-13 ,cubiccm: num*946.3525 ,cubicmm: num*946352.5 ,l: num*0.9463525 ,ml: num*946.3525 ,usG: num*0.25 ,usQ: num ,usP: num*2 ,usC: num*4 ,usF: num*32 },
        usP: {cubicm: num*0.0004731763 ,cubickm: num*4.7317625e-13 ,cubiccm: num*473.17625 ,cubicmm: num*473176.25 ,l: num*0.47317625 ,ml: num*473.17625 ,usG: num*0.125 ,usQ: num*0.5 ,usP: num ,usC: num*2 ,usF: num*16 },
        usC: {cubicm: num*0.0002365881 ,cubickm: num*2.36588125e-13 ,cubiccm: num*236.588125 ,cubicmm: num*236588.125 ,l: num*0.236588125 ,ml: num*236.588125 ,usG: num*0.0625 ,usQ: num*0.25 ,usP: num*0.5 ,usC: num ,usF: num*8 },
        usF: {cubicm: num*0.0000295735 ,cubickm: num*2.957351562E-14 ,cubiccm: num*29.573515625 ,cubicmm: num*29573.515625 ,l: num*0.0295735156 ,ml: num*29.573515625 ,usG: num*0.0078125 ,usQ: num*0.03125 ,usP: num*0.0625 ,usC: num*0.125 ,usF: num }
    }
    to.value=volumeConversionTable[value1][value2];
}
