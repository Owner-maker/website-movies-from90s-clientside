document.addEventListener("DOMContentLoaded", function(){
    if (sessionStorage.getItem('idOfFilm')){
        var idFilm = JSON.parse(sessionStorage.getItem('idOfFilm'));
        // console.log(idFilm)
        
        let filmSingle;                              //  нужный фильм
        films.forEach(function(film){
            if(film.id == idFilm) filmSingle = film;
        });

        var dirs = [];                               //  массив с режиссерами этого фильма

        directors.forEach(function(director){
            for(let i=0;i<director.films.length;i++){
                if(director.films[i] == idFilm) dirs.push(director);
            }
        });

        function Type(link, type){
            this.link = link;
            this.type = type;
        };

        let type1 = new Type('filmsPage.html#actionmovie', 'Боевики');
        let type2 = new Type('filmsPage.html#drama', 'Драмы');
        let type3 = new Type('filmsPage.html#comedy', 'Комедии');
        let type4 = new Type('filmsPage.html#fantastics ', 'Фантастика');
        let type5 = new Type('filmsPage.html#thriller ', 'Триллеры');
        let type6 = new Type('filmsPage.html#horror', 'Ужасы');
        
        let types = [type1, type2, type3, type4, type5, type6];

        let typeSingle;                               //  нужная ссылка на данный раздел с дургими фильмами
        types.forEach(function(typ){
            if(typ.type == filmSingle.type) typeSingle = typ.link;
        });
        

        let container = document.getElementById('main');
        container.innerHTML = '';

        let block1 = document.createElement('div');
        block1.classList.add('discr');

        let block1Link = document.createElement('a');
        block1Link.classList.add('discr-link');
        block1Link.innerText = 'Фильмы с подборки';
        block1Link.href = 'filmsPage.html';
        block1.appendChild(block1Link);

        let block1Span = document.createElement('span');
        block1Span.classList.add('discr-span');
        block1Span.innerText = ' | ';
        block1.appendChild(block1Span);

        let block1Link2 = document.createElement('a');
        block1Link2.classList.add('discr-link');
        block1Link2.innerText = filmSingle.type;
        block1Link2.href = typeSingle;
        block1.appendChild(block1Link2);

        container.appendChild(block1);
        // -----------------

        let block2 = document.createElement('div');
        block2.classList.add('title');

        let block2elem = document.createElement('p');
        block2elem.innerText = filmSingle.title;
        block2.appendChild(block2elem);

        container.appendChild(block2);
        // -----------------

        let block3 = document.createElement('div');
        block3.classList.add('discr');

        let block3elem = document.createElement('p');
        block3elem.innerText = filmSingle.year + ', ' + filmSingle.country + ', ' + filmSingle.type;
        block3.appendChild(block3elem);

        container.appendChild(block3);
        // -----------------

        let block4 = document.createElement('div');
        block4.classList.add('discr__direct-block');

        let block4bl1 = document.createElement('div');
        block4bl1.classList.add('discr__director');
        block4.appendChild(block4bl1);

        let block4bl1Elem = document.createElement('p');
        if(dirs.length == 1)block4bl1Elem.innerText = 'Режиссер:\u00A0';
        else block4bl1Elem.innerText = 'Режиссеры:\u00A0';
        block4bl1.appendChild(block4bl1Elem);

        for (let i=0;i<dirs.length;i++){
            let block4bl2 = document.createElement('div');
            block4bl2.classList.add('discr__name');
            block4bl2.id = dirs[i].id;
            block4.appendChild(block4bl2);

            let block4bl2Elem = document.createElement('p');
            block4bl2Elem.classList.add('discr__name-link');
            block4bl2Elem.innerText = dirs[i].name + ' ' + dirs[i].surname;
            block4bl2.appendChild(block4bl2Elem);

            if(i+1<dirs.length){
                let block4bl2ElemGap = document.createElement('p');
                block4bl2ElemGap.innerText = ',\u00A0\u00A0';
                block4.appendChild(block4bl2ElemGap);
            }
        }

        container.appendChild(block4);
        // -----------------

        let block5 = document.createElement('div');
        block5.classList.add('discr__acters-block');

        let block5bl1 = document.createElement('div');
        if(dirs.length==1)block5bl1.classList.add('discr__acters');
        else block5bl1.classList.add('discr__acters2');
        
        block5.appendChild(block5bl1);

        let block5bl1Elem = document.createElement('p');
        block5bl1Elem.innerText = 'Актеры:';
        block5bl1.appendChild(block5bl1Elem);

        let block5bl2 = document.createElement('div');
        // block5bl2.classList.add('discr__names');
        block5.appendChild(block5bl2);

        let block5bl2Elem = document.createElement('p');
        block5bl2Elem.innerText = filmSingle.acters;
        block5bl2.appendChild(block5bl2Elem);

        container.appendChild(block5);
        // -----------------

        let block6 = document.createElement('div');
        block6.classList.add('mainBlock__img');

        let block6Img = document.createElement('img');
        block6Img.src = filmSingle.posterBig;
        block6Img.alt = filmSingle.title;
        window.addEventListener('load', function() {
            
            var fac = new FastAverageColor();
            var container = document.querySelector('.mainBlock__img');
            
            var color = fac.getColor(container.querySelector('img'));

            
            container.style.color = color.isDark ? '#fff' : '#000';
            
            var elem = " " + color.hex;
           
            container.style.boxShadow = "10px 10px 45px 10px" + elem;

        }, false);
        block6.appendChild(block6Img);

        container.appendChild(block6);
        // -----------------

        let block7 = document.createElement('div');
        block7.classList.add('about');

        let block7Elem = document.createElement('p');
        block7Elem.innerText = filmSingle.description;
        block7.appendChild(block7Elem);

        container.appendChild(block7);
        // -----------------

        let block8 = document.createElement('div');
        block8.classList.add('discr');

        let block8Link = document.createElement('a');
        block8Link.classList.add('discr-link');
        block8Link.target = '_blank';
        block8Link.innerText = 'Смотреть трейлер в YouTube';
        block8Link.href = filmSingle.linkYT;
        block8.appendChild(block8Link);

        container.appendChild(block8);
    }
});





















// window.addEventListener('load', function() {
            
//     var fac = new FastAverageColor();
//     var container = document.querySelector('.mainBlock__img');
    
//     var color = fac.getColor(container.querySelector('img'));

    
//     container.style.color = color.isDark ? '#fff' : '#000';
    
//     var elem = " " + color.hex;
   
//     container.style.boxShadow = "10px 10px 45px 10px" + elem;

// }, false);