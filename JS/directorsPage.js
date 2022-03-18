document.getElementById('sort').addEventListener('submit',function(event){
    event.preventDefault();

    let q1Inputs = document.getElementsByName('q1');
    let checkedValue1 = '';
    q1Inputs.forEach(function(input){
        if(input.checked){
            checkedValue1 = input.value;
        }
    });
    localStorage.setItem('qD1',checkedValue1);


    let q2Inputs = document.getElementsByName('q2');
    let checkedValue2 = '';
    q2Inputs.forEach(function(input){
        if(input.checked){
            checkedValue2 = input.value;
        }
    });
    localStorage.setItem('qD2',checkedValue2);


    printAlph();
});

let printAlph = function(){
    let checkedValue1 = localStorage.getItem('qD1');
    let checkedValue2 = localStorage.getItem('qD2');
    let container = document.getElementById('drs');
    container.innerHTML = '';
    var res = directors;

    if(checkedValue1 == 'имена'){
        res.sort(function(a, b){
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if ((nameA < nameB)&&(checkedValue2 == 'алф')) return -1 //сортируем строки по возрастанию
            if ((nameA > nameB)&&(checkedValue2 == 'алф')) return 1
            if ((nameA > nameB)&&(checkedValue2 == 'пралф')) return -1 //сортируем строки по убыванию
            if ((nameA < nameB)&&(checkedValue2 == 'пралф')) return 1
            return 0;
        })
    }
    else{
        res.sort(function(a, b){
            var nameA=a.surname.toLowerCase(), nameB=b.surname.toLowerCase()
            if ((nameA < nameB)&&(checkedValue2 == 'алф')) return -1 //сортируем строки по возрастанию
            if ((nameA > nameB)&&(checkedValue2 == 'алф')) return 1
            if ((nameA > nameB)&&(checkedValue2 == 'пралф')) return -1 //сортируем строки по убыванию
            if ((nameA < nameB)&&(checkedValue2 == 'пралф')) return 1
            return 0;
        })
    }
    


    


    res.forEach(function(director){

        let field = document.createElement('div');
        field.classList.add('direct');

        let img = document.createElement('img');
        img.src = director.poster;
        img.classList.add('direct-img');
        img.setAttribute('alt',director.name);
        img.id = director.id;
        field.appendChild(img);

        let blockName = document.createElement('div');
        blockName.classList.add('direct__name');
        field.appendChild(blockName);

        let name = document.createElement('p');
        name.classList.add('direct__name-elem');
        name.innerText = director.name + ' ' + director.surname;
        blockName.appendChild(name);

        container.appendChild(field);

    });
}

printAlph();



