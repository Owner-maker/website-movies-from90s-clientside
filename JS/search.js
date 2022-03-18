document.addEventListener("DOMContentLoaded", function(){
    if (sessionStorage.getItem('inputValue')){
        let key = JSON.parse(sessionStorage.getItem('inputValue'));
        
        let keyTemp = key.toLowerCase();
        keyTemp = keyTemp.replace(/,/g, '');
        keyTemp = keyTemp.replace(/"/g, '');
        keyTemp = keyTemp.replace(/-/g, '');
        keyTemp = keyTemp.replace(/:/g, '');
        var res = []; 
        var resDir = [];
        let check=0;

        if(keyTemp == ''){
            let container = document.getElementById('searchTitle');
            container.innerHTML = '';

            let text = document.createElement('p');
            text.classList.add('block1__title1');
            text.innerText = 'Вы ничего не ввели в поле поиска';
            container.appendChild(text);
            check++;
        }
        else if((keyTemp.length >= 1)&&(keyTemp.length <= 2)){
            res = films.filter(function(film){
                
                let filmTemp = film.title.toLowerCase();
                filmTemp = filmTemp.replace(/-/g, ' ');
                filmTemp = filmTemp.replace(/,/g, '');
                filmTemp = filmTemp.replace(/:/g, '');
            
                if ((filmTemp[0] == keyTemp[0])&&(keyTemp.length == 1)) return film;
                if ((filmTemp[0] == keyTemp[0])&&(filmTemp[1] == keyTemp[1])&&(keyTemp.length == 2)) return film;
                for (let i=0; i<filmTemp.length; i++){
                    if(filmTemp[i]==' '){
                        if((filmTemp[i+1]==keyTemp[0])&&(keyTemp.length == 1))return film;
                        if((filmTemp[i+1]==keyTemp[0])&&(filmTemp[i+2]==keyTemp[1])&&(keyTemp.length == 2))return film;
                        
                    }
                }
            
            });

            resDir = directors.filter(function(director){
                let nameTemp = director.name.toLowerCase();
                let surnameTemp = director.surname.toLowerCase();

                if (((nameTemp[0] == keyTemp[0]) || (surnameTemp[0] == keyTemp[0]))&&(keyTemp.length == 1)) return director;
                if ((((nameTemp[0] == keyTemp[0])&&(nameTemp[1] == keyTemp[1])) || ((surnameTemp[0] == keyTemp[0])&&(surnameTemp[1] == keyTemp[1])))&&(keyTemp.length == 2)) return director;
            });
        } 
        else if(keyTemp.length >= 3){
            // res = [];
            films.forEach(function(film){

                let filmTemp = film.title.toLowerCase();

                filmTemp = filmTemp.replace(/-/g, ' ');
                filmTemp = filmTemp.replace(/,/g, '');
                filmTemp = filmTemp.replace(/:/g, '');

                if(keyTemp.length < filmTemp.length){
                    let beg = 0;
                    for (let end = keyTemp.length - 1; end < filmTemp.length; beg++, end++){
                        let nfilmTemp = filmTemp.slice([beg],[end+1]);
                        if(nfilmTemp == keyTemp){
                            res.push(film);
                            break;
                        }
                    }
                }
                else if(keyTemp.length >= filmTemp.length){
                    let beg = 0;
                    for (let end = filmTemp.length-1; end < keyTemp.length; beg++, end++){
                        let nfilmTemp = keyTemp.slice([beg],[end+1]);
                        if(nfilmTemp == filmTemp){
                            res.push(film);
                            break;
                        }
                    }
                }
            });

            directors.forEach(function(director){
                let nameTemp = director.name.toLowerCase();
                let surnameTemp = director.surname.toLowerCase();
                let checkAdd = 0;

                if(keyTemp.length < nameTemp.length){
                    let beg = 0;
                    for (let end = keyTemp.length - 1; end < nameTemp.length; beg++, end++){
                        let nnameTemp = nameTemp.slice([beg],[end+1]);
                        if(nnameTemp == keyTemp){
                            resDir.push(director);
                            checkAdd++;
                            break;
                        }
                    }
                }
                else if(keyTemp.length >= nameTemp.length){
                    let beg = 0;
                    for (let end = nameTemp.length-1; end < keyTemp.length; beg++, end++){
                        let nnameTemp = keyTemp.slice([beg],[end+1]);
                        if(nnameTemp == nameTemp){
                            resDir.push(director);
                            checkAdd++;
                            break;
                        }
                    }
                }

                if((keyTemp.length < surnameTemp.length)&&(checkAdd == 0)){
                    let beg = 0;
                    for (let end = keyTemp.length - 1; end < surnameTemp.length; beg++, end++){
                        let nsurnameTemp = surnameTemp.slice([beg],[end+1]);
                        if(nsurnameTemp == keyTemp){
                            resDir.push(director);
                            break;
                        }
                    }
                }
                else if((keyTemp.length >= surnameTemp.length)&&(checkAdd == 0)){
                    let beg = 0;
                    for (let end = surnameTemp.length-1; end < keyTemp.length; beg++, end++){
                        let nsurnameTemp = keyTemp.slice([beg],[end+1]);
                        if(nsurnameTemp == surnameTemp){
                            resDir.push(director);
                            break;
                        }
                    }
                }

            });
        }

        if ((res.length == 0)&&(resDir.length == 0)&&(check==0)){
            let container =document.getElementById('searchTitle');
            container.innerHTML = '';

            let text = document.createElement('p');
            text.classList.add('block1__title1');
            text.innerText = 'По Вашему запросу «' + key + '» ничего не найдено';
            container.appendChild(text);
        }
        else if(((res.length != 0)||(resDir.length != 0))&&(check==0)){
            let container0 =document.getElementById('searchTitle');
            container0.innerHTML = '';

            let text = document.createElement('p');
            text.classList.add('block1__title1');
            text.innerText = 'По Вашему запросу «' + key + '» найдено:';
            container0.appendChild(text);


            if(res.length != 0){
                res.forEach(function(film){
                    let container = document.getElementById('searchResult');
                    container.innerHTML = '';
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

            if(resDir.length != 0){
                let container = document.getElementById('searchResNames');
                let title = document.createElement('p');
                    title.classList.add('blockNames-title');
                    title.innerText = 'Найденные имена:';
                    container.appendChild(title);

                resDir.forEach(function(director){
                    let block = document.createElement('div');
                    block.classList.add('blockNames__elem');
                    block.id = director.id;

                    let name = document.createElement('p');
                    name.classList.add('blockNames-name');
                    name.innerText = director.name + ' ' + director.surname;
                    block.appendChild(name);

                    container.appendChild(block);
                });
            }
            

        }


        
    }
});

