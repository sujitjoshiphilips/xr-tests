var currentAlpha = "100";
let currentHeading = "b";
let currentBody = "r";
let modelID = "gltf-inline";
let sx = 0.083;
let sy = 0.083;
let sz = 0.083;

window.onload = function onloadFunction() {
    console.log("onload" + currentAlpha);
    updatePos();
}

function updatePos() {
    let pos = document.getElementById('my-objects').getAttribute('position');
    document.getElementById('position').innerHTML = pos.x + "," + pos.y + "," + pos.z;
    console.log(pos);
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
    updatePos()
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
    updatePos()
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
    updatePos();
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
    updatePos();
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
    updatePos();
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
    updatePos();
}

function incScale() {
    sx = sx * 1.2;
    sy = sy * 1.2;
    sz = sz * 1.2;

    let scale = String(sx) + " " + String(sz) + " " + String(sy);
    document.getElementById('targetEntity').setAttribute('scale', scale);
    updatePos();
}

function redScale() {
    sx = sx / 1.2;
    sy = sy / 1.2;
    sz = sz / 1.2;

    let a = sx * sy * sz;

    let scale = String(sx) + " " + String(sz) + " " + String(sy);
    document.getElementById('targetEntity').setAttribute('scale', scale);
    updatePos();
}