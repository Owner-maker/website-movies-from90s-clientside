document.getElementById('test').addEventListener("submit", function(event){
    event.preventDefault();

    let q1Inputs = document.getElementsByName('q1');
    let checkedValueOne = '';
    q1Inputs.forEach(function(input){
        if(input.checked){
            checkedValueOne = input.value;
        }
    });

    localStorage.setItem('q1',checkedValueOne);

    let q2Inputs = document.getElementsByName('q2');
    let checkedValueTwo = '';
    q2Inputs.forEach(function(input){
        if(input.checked){
            checkedValueTwo = input.value;
        }
    });

    localStorage.setItem('q2',checkedValueTwo);

    let q3Inputs = document.getElementsByName('q3');
    let checkedValueThree = ['','','','','',''];
    for(let i=0;i<6;i++){
        if(q3Inputs[i].checked){
            checkedValueThree[i] = q3Inputs[i].value;
        }
    }

    localStorage.setItem('q3',JSON.stringify(checkedValueThree));
    
    printFilms();
});

let printFilms = function(){
    let checkedValueOne = localStorage.getItem('q1');
    let checkedValueTwo = localStorage.getItem('q2');
    let checkedValueThree = JSON.parse(localStorage.getItem('q3'));
    let result = [];

    
    if(checkedValueOne == 'Зарубежное'){
        result = films.filter(f => f.country != 'Россия');
    }
    else result = films.filter(f => f.country == 'Россия');

    if(checkedValueTwo == 'болееДвух'){
        result = result.filter(f => f.time >= 120);
    }
    else result = result.filter(f => f.time < 120);

    let finalResult = [];
    for (let i=0;i<6;i++){
        if(checkedValueThree[i]!=0){
            result.forEach(function(film){
                if(film.type == checkedValueThree[i]){
                    finalResult.push(film);
                }
            });
        }
    }

    if (finalResult.length == 0){
        let container =document.getElementById('selection');
        container.innerHTML = '';
        let field = document.createElement('div');
        field.classList.add('block1');

        let text1 = document.createElement('p');
        text1.classList.add('block1__title1');
        text1.innerText = 'К сожалению, мы ничего не нашли :с';
        field.appendChild(text1);

        let text2 = document.createElement('p');
        text2.classList.add('block1__title2');
        text2.innerText = 'Попробуйте снова';
        field.appendChild(text2);

        container.appendChild(field);
    }
    else{
        let container = document.getElementById('selection');
        container.innerHTML = '';
        finalResult.forEach(function(film){
        let field = document.createElement('div');
        field.classList.add('block-1__field__img');
        field.style.backgroundImage = film.posterSmall;
        field.setAttribute('title',film.title);
        field.setAttribute('alt',film.title);
        field.id = film.id; 

        let hidden = document.createElement('div');
        hidden.classList.add('hidden');
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

        container.appendChild(field);

        });

    }
};

printFilms();