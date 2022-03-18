let types = ['Боевики','Драмы', 'Комедии', 'Фантастика', 'Триллеры', 'Ужасы'];

let result = [ [], [], [], [], [], [] ];

for( let i=0; i<6; i++){
    result[i] = films.filter(f => f.type == types[i]);
};

let container = [document.getElementById('type1'),document.getElementById('type2'),document.getElementById('type3'),document.getElementById('type4'),document.getElementById('type5'),document.getElementById('type6')];

 
for( let i=0; i<6; i++){
    result[i].forEach(function(film){
        let field = document.createElement('div');
        field.classList.add('block-1__field__img');
        field.style.backgroundImage = film.posterSmall;
        field.setAttribute('title',film.title);
        field.setAttribute('alt',film.title);
        field.id = film.id; 
        

        let hidden = document.createElement('div');     
        hidden.classList.add('hidden');
        // hidden.id = film.id;
        field.appendChild(hidden);


        let hiddenBlock1 = document.createElement('div');
        hiddenBlock1.classList.add('hidden-img');
        hidden.appendChild(hiddenBlock1);

        let hiddenTitle1 = document.createElement('p');
        hiddenTitle1.innerText = film.type;
        hiddenBlock1.appendChild(hiddenTitle1);



        let hiddenBlock2 = document.createElement('div');
        hiddenBlock2.classList.add('hidden-img');
        hidden.appendChild(hiddenBlock2);

        let hiddenTitle2 = document.createElement('p');
        hiddenTitle2.innerText = film.year + ', ' + film.country;
        hiddenBlock2.appendChild(hiddenTitle2);



        let hiddenBlock3 = document.createElement('div');
        hiddenBlock3.classList.add('hidden-img');
        hidden.appendChild(hiddenBlock3);

        let hiddenTitle3 = document.createElement('p');
        hiddenTitle3.innerText = film.time + ' мин.';
        hiddenBlock3.appendChild(hiddenTitle3);


        container[i].appendChild(field);
    });
};






