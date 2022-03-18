let max = films[0].title.length;
for (let i=1; i<films.length; i++){
    if(films[i].title.length > max) max = films[i].title.length;
}

max = max-15;

let elem = document.getElementById('sField');
elem.setAttribute('maxlength', max);

let thing = sButton.onclick = function(){
    event.preventDefault();
    let smthing = document.getElementById('sField').value;
    sessionStorage.setItem('inputValue', JSON.stringify(smthing));
    document.location.href = "../html/search.html";
}