var currentAlpha = "100";
let currentHeading = "b";
let currentBody = "r";
let modelID = "gltf-inline";
let sx = 0.1;
let sy = 0.1;
let sz = 0.1;

window.onload = function onloadFunction() {
    console.log("onload" + currentAlpha);
}


function redAlpha() {



    if (currentAlpha == "100") {
        currentAlpha = "50";
    } else if (currentAlpha == "50") {
        currentAlpha = "0";
    } else if (currentAlpha == "0") {
        currentAlpha = "0";
    }

    let srcLink = './a' + currentAlpha + '-' + currentHeading + '-' + currentBody + '.glb';
    document.getElementById(modelID).setAttribute('gltf-model', srcLink);
    console.log(currentAlpha + '-' + currentHeading + '-' + currentBody);
}

// gltf-model="url(./a100-b-r.glb)"

function incAlpha() {

    if (currentAlpha == "100") {
        currentAlpha = "100";
    } else if (currentAlpha == "50") {
        currentAlpha = "100";
    } else if (currentAlpha == "0") {
        currentAlpha = "50";
    }
    let srcLink = './a' + currentAlpha + '-' + currentHeading + '-' + currentBody + '.glb';
    document.getElementById(modelID).setAttribute('gltf-model', srcLink);
    console.log(currentAlpha + '-' + currentHeading + '-' + currentBody);
}

function incHead() {


    if (currentHeading == "l") {
        currentHeading = "r";
    } else if (currentHeading == "r") {
        currentHeading = "m";
    } else if (currentHeading == "m") {
        currentHeading = "b";
    } else if (currentHeading == "b") {
        currentHeading = "b";
    }

    let srcLink = './a' + currentAlpha + '-' + currentHeading + '-' + currentBody + '.glb';
    document.getElementById(modelID).setAttribute('gltf-model', srcLink);
    console.log(currentAlpha + '-' + currentHeading + '-' + currentBody);
}

function redHead() {

    if (currentHeading == "l") {
        currentHeading = "l";
    } else if (currentHeading == "r") {
        currentHeading = "l";
    } else if (currentHeading == "m") {
        currentHeading = "r";
    } else if (currentHeading == "b") {
        currentHeading = "m";
    }

    let srcLink = './a' + currentAlpha + '-' + currentHeading + '-' + currentBody + '.glb';
    document.getElementById(modelID).setAttribute('gltf-model', srcLink);
    console.log(currentAlpha + '-' + currentHeading + '-' + currentBody);
}


function incBod() {

    if (currentBody == "l") {
        currentBody = "r";
    } else if (currentBody == "r") {
        currentBody = "m";
    } else if (currentBody == "m") {
        currentBody = "b";
    } else if (currentBody == "b") {
        currentBody = "b";
    }

    let srcLink = './a' + currentAlpha + '-' + currentHeading + '-' + currentBody + '.glb';
    document.getElementById(modelID).setAttribute('gltf-model', srcLink);
    console.log(currentAlpha + '-' + currentHeading + '-' + currentBody);
}

function redBod() {

    if (currentBody == "l") {
        currentBody = "l";
    } else if (currentBody == "r") {
        currentBody = "l";
    } else if (currentBody == "m") {
        currentBody = "r";
    } else if (currentBody == "b") {
        currentBody = "m";
    }

    let srcLink = './a' + currentAlpha + '-' + currentHeading + '-' + currentBody + '.glb';
    document.getElementById(modelID).setAttribute('gltf-model', srcLink);
    console.log(currentAlpha + '-' + currentHeading + '-' + currentBody);
}

function incScale() {
    sx = sx * 1.2;
    sy = sy * 1.2;
    sz = sz * 1.2;

    let scale = String(sx) + " " + String(sz) + " " + String(sy);
    document.getElementById('targetEntity').setAttribute('scale', scale);
}

function redScale() {
    sx = sx / 1.2;
    sy = sy / 1.2;
    sz = sz / 1.2;

    let a = sx * sy * sz;

    let scale = String(sx) + " " + String(sz) + " " + String(sy);
    document.getElementById('targetEntity').setAttribute('scale', scale);
}