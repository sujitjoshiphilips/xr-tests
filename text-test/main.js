var currentAlpha = "100";
let currentBody = "r";
let currentHeading = "r";

window.onload = function onloadFunction() {
console.log("onload" + currentAlpha);
}

            function redAlpha() {
                
                

                if(currentAlpha == "100"){
                    currentAlpha = "50";
                }
                else if(currentAlpha == "50"){
                    currentAlpha = "0";
                }
                else if(currentAlpha == "0"){
                    currentAlpha = "0";
                }
                
                let srcLink = './a'+currentAlpha+'-'+currentHeading+'-'+currentBody+'.glb';
               document.getElementById('text').setAttribute('src',srcLink); 
               console.log(currentAlpha+'-'+currentHeading+'-'+currentBody);
            }

            function incAlpha() {
                
                

                if(currentAlpha == "100"){
                    currentAlpha = "100";
                }
                else if(currentAlpha == "50"){
                    currentAlpha = "100";
                }
                else if(currentAlpha == "0"){
                    currentAlpha = "50";
                }
                let srcLink = './a'+currentAlpha+'-'+currentHeading+'-'+currentBody+'.glb';
               document.getElementById('text').setAttribute('src',srcLink); 
               console.log(currentAlpha+'-'+currentHeading+'-'+currentBody);
            }

            function incHead() {
                

                if(currentHeading == "l"){
                    currentHeading = "r";
                }
                else if(currentHeading == "r"){
                    currentHeading = "m";
                }
                else if(currentHeading == "m"){
                    currentHeading= "b";
                }
                else if(currentHeading == "b"){
                    currentHeading = "b";
                }

                let srcLink = './a'+currentAlpha+'-'+currentHeading+'-'+currentBody+'.glb';
               document.getElementById('text').setAttribute('src',srcLink); 
               console.log(currentAlpha+'-'+currentHeading+'-'+currentBody);
            }

            function redHead() {

                if(currentHeading == "l"){
                    currentHeading = "l";
                }
                else if(currentHeading == "r"){
                    currentHeading = "l";
                }
                else if(currentHeading == "m"){
                    currentHeading= "r";
                }
                else if(currentHeading == "b"){
                    currentHeading = "m";
                }

                let srcLink = './a'+currentAlpha+'-'+currentHeading+'-'+currentBody+'.glb';
               document.getElementById('text').setAttribute('src',srcLink); 
               console.log(currentAlpha+'-'+currentHeading+'-'+currentBody);
            }


            function incBod() {

                if(currentBody == "l"){
                    currentBody = "r";
                }
                else if(currentBody == "r"){
                    currentBody = "m";
                }
                else if(currentBody == "m"){
                    currentBody = "b";
                }
                else if(currentBody == "b"){
                    currentBody = "b";
                }

                let srcLink = './a'+currentAlpha+'-'+currentHeading+'-'+currentBody+'.glb';
               document.getElementById('text').setAttribute('src',srcLink); 
               console.log(currentAlpha+'-'+currentHeading+'-'+currentBody);
            }
            function redBod() {

                if(currentBody == "l"){
                    currentBody = "l";
                }
                else if(currentBody == "r"){
                    currentBody = "l";
                }
                else if(currentBody == "m"){
                    currentBody = "r";
                }
                else if(currentBody == "b"){
                    currentBody = "m";
                }

                let srcLink = './a'+currentAlpha+'-'+currentHeading+'-'+currentBody+'.glb';
               document.getElementById('text').setAttribute('src',srcLink); 
               console.log(currentAlpha+'-'+currentHeading+'-'+currentBody);
            }