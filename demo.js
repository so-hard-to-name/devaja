const birds=["Woodstock", "Daffy", "Iago", "Zazu", "Tweety", "Hedwig", "Daisy", "Bella", "Ava", "Coco"];
var first = true;
let index = 0;

birdName.innerHTML = birds[index];

document.addEventListener('keypress', removeLetter);

function removeLetter(e) {    
    
    if (first == true) {
        if (birdName.textContent.charAt(0) == String.fromCharCode(e.keyCode)){
            birdName.innerHTML = birdName.textContent.replaceAll(String.fromCharCode(e.keyCode), "");
            first = false;
        }
    }
    else {
        if (birdName.textContent.charAt(birdName.textContent.length-1) == String.fromCharCode(e.keyCode)){
            birdName.innerHTML = birdName.textContent.replaceAll(String.fromCharCode(e.keyCode), "");
            first = true;
        }
    }    

    if (birdName.textContent.length == 0) {        
        birdName.innerHTML = birds[index = index==birds.length-1 ? 0 : ++index];
        first = true;
    }
}
