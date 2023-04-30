console.log("Unit conversions");

let kilometerBtn = document.querySelector(".km");
let meterBtn = document.querySelector(".m");
let centimeterBtn = document.querySelector(".cm");
let millimeterBtn = document.querySelector(".mm");

let mminput = document.getElementById("mminp");
let cminput = document.getElementById("cminp");
let minput = document.getElementById("minp");
let kminput = document.getElementById("kminp");

let result = document.getElementById("result");

millimeterBtn.addEventListener("click", function () {
    let cmToMm = cminput.value * 10;
    let mToMm = minput.value * 1000;
    let kmToMm = kminput.value * 1000000;
    let mmToMm = mminput.value;

    if (cminput.value) {
        result.value = `${cmToMm}mm`;
        minput.value="";
        kminput.value="";
        mminput.value="";
    } else if (mminput.value) {
        result.value=`${mmToMm}mm`;
        cminput.value="";
        minput.value="";
        kminput.value="";
    } else if (kminput.value) {
        result.value=`${kmToMm}mm`;
        cminput.value="";
        minput.value="";
        mminput.value="";
    } else if (minput) {
      result.value=`${mToMm}mm`;
      cinput.value="";
      kinput.value="";
      mininput.value="";  
    }
});

centimeterBtn.addEventListener("click", function(){
    let mmTocm=mminput.value/10;
    let mTocm=minput.value*100;
    let kmTocm=kminput.value*100000;
    let cmTocm=cminput.value;

    if(mminput.value){
        result.value=`${mmTocm}cm`;
        minput.value="";
        kminput.value="";
        cminput.value="";
    } else if (minput.value) {
        result.value = `${mTocm}cm`;
        mminput.value = "";
        kminput.value = "";
        cminput.value = "";
    } else if (kminput) {
        result.value = `${kmTocm}cm`;
        minput.value="";
        mminput.value="";
        cminput.value="";
    } else if (cminput) {
      result.value=`${cmTocm}cm`;
      mininput.valye="";
      kinput.valye="";
      minput.valye="";  
    }
});

meterBtn.addEventListener("click", function () {
    let mmToM = mminput.value / 1000;
    let cmToM = cminput.value / 100;
    let kmToM = kminput.value * 1000;
    let mToM = minput.value;

    if (mminput.value) {
        result.value = `${mmToM}m`;
        cminput.value = "";
        kminput.value = "";
        minput.value = "";
    } else if (cminput.value) {
        result.value = `${cmToM}m`;
        mminput.value = "";
        kminput.value = "";
        minput.value = "";
    } else if (kminput.value) {
        result.value = `${kmToM}m`;
        mminput.value = "";
        cminput.value = "";
        minput.value = "";
    } else if (minput.value) {
        result.value = `${mToM}m`;
        mminput.value = "";
        cminput.value = "";
        kminput.value = "";
    }
});
kilometerBtn.addEventListener("click", function () {
    let mmTokm = mminput.value / 1000000;
    let cmToKm = cminput.value / 100000;
    let mToKm = minput.value / 1000;
    let kmToKm = kminput.value;

    if (mminput) {
        result.valeu = `${mmTokm}km`;
        cminput.value="";
        minput.value="";
        kminput.value="";
    } else if (cminput) {
        result.valeu = `${cmToKm}km`;
        mminput.valye="";
        minput.valye="";
        kminput.valye="";
    } else if (kminput) {
      result.valeu=`${kmToKm}km`;
      cinput.valye=""; 
      mmout.valye="";
      minout=valyue ="";
      mininput.valye="";  
   } else if(minput){
       result.valeu=`${mToKm}km`;
       cinput.valye=""; 
       mmout.valye="";
       kinput.valye="";  
   }
});