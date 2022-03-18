let slides = document.querySelectorAll('.slide-single');
let slider = [];
for (let i=0; i<slides.length; i++){
    slider[i] = slides[i].src;
    slides[i].remove();
}
// шаг и смещение для смены картинок
let step = 0;  
let offset = 0;

// нахождение ширины картинки

// let rules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
// let rules = document.styleSheets[0].cssRules;
// for( let i=0; i<rules.length; i++){
//     let rule = rules[i];
//     if(rule.selectorText.toLowerCase()==".slide-single"){
//         var width = rule.style.getPropertyValue("width");
//     }
// }


let width = window.getComputedStyle(document.getElementById("slider")).width;

width = parseInt(width.replace(/\D+/g,""));


function draw(){
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset*width + 'px';
    document.querySelector('.slide').appendChild(img);
    if(step + 1 == slider.length){
        step = 0;
    }
    else{
        step++;
    }
    offset=1;
}

function left(){
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2=0;
    for (let i=0; i<slides2.length; i++){
        slides2[i].style.left = offset2*width - width + 'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        draw();
    }, 1000);
    
}

draw();draw();
let timerId = setInterval(() => left(), 5000);
