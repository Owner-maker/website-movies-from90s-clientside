document.addEventListener("DOMContentLoaded", function(){
    if (sessionStorage.getItem('idOfDir')){
        var idDir = JSON.parse(sessionStorage.getItem('idOfDir'));
    }

    let dirSingle;                            // нужный режиссер

    directors.forEach(function(director){
        if(director.id == idDir) dirSingle = director;
    });

    var filmsDir = [];                         // фильмы режиссера с данной подборки

    for (let i=0;i<dirSingle.films.length;i++){
        films.forEach(function(film){
            if(film.id == dirSingle.films[i]) filmsDir.push(film);
        });
    }


    let container = document.getElementById('mainB');
    container.innerHTML = '';

    let blockMain = document.createElement('div');
    blockMain.classList.add('block');

    let block1 = document.createElement('div');
    block1.classList.add('block1');
    blockMain.appendChild(block1);

    let img = document.createElement('img');
    img.classList.add('block1-img');
    img.src = dirSingle.poster;
    img.alt = dirSingle.name + ' ' + dirSingle.surname;
    block1.appendChild(img);

    let block2 = document.createElement('div');
    block2.classList.add('block2');
    blockMain.appendChild(block2);

    let block2Elems = document.createElement('div');
    block2Elems.classList.add('block2__elems');
    block2.appendChild(block2Elems);

    let title = document.createElement('div');
    title.classList.add('title');
    block2Elems.appendChild(title);

    let titleText = document.createElement('p');
    titleText.innerText = dirSingle.name + ' ' + dirSingle.surname;
    title.appendChild(titleText);

    let titleEng = document.createElement('div');
    titleEng.classList.add('discr');
    block2Elems.appendChild(titleEng);

    let titleEngText = document.createElement('p');
    titleEngText.innerText = dirSingle.nameEng;
    titleEng.appendChild(titleEngText);

    let about = document.createElement('div');
    about.classList.add('about');
    block2.appendChild(about);

    let aboutText = document.createElement('p');
    aboutText.innerText = dirSingle.descr;
    about.appendChild(aboutText);

    container.appendChild(blockMain);

    
    // ---------------------------

    let about2 = document.createElement('div');
    about2.classList.add('about2');
    container.appendChild(about2);

    let aboutText2 = document.createElement('p');
    aboutText2.innerText = dirSingle.descr;
    about2.appendChild(aboutText2);

    // ---------------------------

    let blockFilms = document.createElement('div');
    blockFilms.classList.add('block__films');

    let blockFilmsTitle = document.createElement('div');
    blockFilmsTitle.classList.add('block__films-title');
    blockFilms.appendChild(blockFilmsTitle);

    let blockFilmsTitleText = document.createElement('p');
    if (filmsDir.length == 1) blockFilmsTitleText.innerText = 'Фильм режиссера с нашей подборки:';
    else  blockFilmsTitleText.innerText = 'Фильмы режиссера с нашей подборки:';
    blockFilmsTitle.appendChild(blockFilmsTitleText);

    let blockFilmsElems = document.createElement('div');
    blockFilmsElems.classList.add('block__films__elems');
    blockFilms.appendChild(blockFilmsElems);

    for (let i=0;i<filmsDir.length;i++){
        // filmsDir[i] = film;
        let field = document.createElement('div');
        field.classList.add('block-1__field__img');
        field.style.backgroundImage = filmsDir[i].posterSmall;
        field.setAttribute('title',filmsDir[i].title);
        field.setAttribute('alt',filmsDir[i].title);
        field.id = filmsDir[i].id;

        let hidden = document.createElement('div');
        hidden.classList.add('hidden');
        field.appendChild(hidden)

        let hiddenBlock1 = document.createElement('div');
        hiddenBlock1.classList.add('hidden-img');
        hidden.appendChild(hiddenBlock1)

        let hiddenTitle1 = document.createElement('p');
        hiddenTitle1.innerText = filmsDir[i].type;
        hiddenBlock1.appendChild(hiddenTitle1)

        let hiddenBlock2 = document.createElement('div');
        hiddenBlock2.classList.add('hidden-img');
        hidden.appendChild(hiddenBlock2);

        let hiddenTitle2 = document.createElement('p');
        hiddenTitle2.innerText = filmsDir[i].year + ', ' + filmsDir[i].country;
        hiddenBlock2.appendChild(hiddenTitle2);
    
    
        let hiddenBlock3 = document.createElement('div');
        hiddenBlock3.classList.add('hidden-img');
        hidden.appendChild(hiddenBlock3)
        let hiddenTitle3 = document.createElement('p');
        hiddenTitle3.innerText = filmsDir[i].time + ' мин.';
        hiddenBlock3.appendChild(hiddenTitle3);
        
        blockFilmsElems.appendChild(field);
    }


    container.appendChild(blockFilms);


});